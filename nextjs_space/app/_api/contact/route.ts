import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request?.json?.().catch(() => ({}));
    const { name, email, subject, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const submission = await prisma.contactSubmission.create({
      data: {
        name: String(name ?? ''),
        email: String(email ?? ''),
        subject: String(subject ?? ''),
        message: String(message ?? ''),
      },
    });

    // Send email notification (don't block the response)
    import('@/lib/mail').then(({ sendContactEmail }) => {
      sendContactEmail({ name, email, subject, message });
    }).catch(err => console.error('Error importing mail lib:', err));

    return NextResponse.json({ message: 'Message sent successfully!', id: submission.id });
  } catch (error: unknown) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
