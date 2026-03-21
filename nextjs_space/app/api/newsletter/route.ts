import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'El email es obligatorio' }, { status: 400 });
    }

    // USA TU CLAVE AQUÍ DIRECTAMENTE OTRA VEZ
    const API_KEY = process.env.BREVO_API_KEY;

    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        updateEnabled: true,
      }),
    });

    // Si Brevo devuelve 201 (creado) o 204 (vacío pero ok), lo damos por bueno
    if (response.status === 201 || response.status === 204) {
      return NextResponse.json({ message: '¡Suscrito con éxito!' });
    }

    // Leemos el texto de la respuesta primero para que no de error de JSON
    const responseText = await response.text();
    let data;
    try {
      data = responseText ? JSON.parse(responseText) : {};
    } catch (e) {
      data = {};
    }

    if (!response.ok) {
      if (data.code === 'duplicate_parameter' || response.status === 400) {
        return NextResponse.json({ message: '¡Ya estás en nuestra lista!' });
      }
      throw new Error('Error en la comunicación con Brevo');
    }

    return NextResponse.json({ message: '¡Suscrito con éxito!' });
  } catch (error) {
    console.error('Error Newsletter:', error);
    return NextResponse.json(
      { error: 'Hubo un problema. Inténtalo de nuevo.' },
      { status: 500 }
    );
  }
}