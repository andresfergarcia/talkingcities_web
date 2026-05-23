# 🚀 Guía de Estrategia Híbrida: Antigravity + DeepSeek V4

Esta guía explica cómo coordinar a tus dos asistentes de IA para desarrollar **Talking Cities** con el menor costo y la mayor precisión posible.

## 1. El Flujo de Trabajo (The Workflow)

| Paso | Actor | Acción |
| :--- | :--- | :--- |
| **1. IDEA** | Tú | "Quiero añadir un sistema de comentarios a los relatos." |
| **2. PLAN** | **Antigravity** | Diseña el plan técnico detallado en un archivo `.md`. |
| **3. ACCIÓN** | **DeepSeek** | Lee el plan en VS Code y escribe el código. |
| **4. TEST** | Tú / DeepSeek | Verificas que todo funcione correctamente. |

---

## 2. Cómo pedir un Plan a Antigravity
Para que DeepSeek pueda trabajar bien, mis instrucciones deben ser muy precisas. Cuando me pidas algo, usa este formato:

> *"Antigravity, quiero [TU IDEA]. No escribas el código todavía. Crea un **Plan de Acción detallado** en un archivo llamado `PROXIMO_PASO.md` con los archivos que hay que modificar y la lógica exacta, para que yo se lo pase a DeepSeek en VS Code."*

---

## 3. Cómo ejecutar el Plan en VS Code (con DeepSeek)
Una vez que yo cree el archivo `PROXIMO_PASO.md`, abre tu VS Code y usa la extensión **Continue** (que ya tienes configurada con DeepSeek V4):

1.  Abre el chat de **Continue** (Ctrl+L).
2.  Escribe: `@PROXIMO_PASO.md Sigue este plan paso a paso. Implementa los cambios necesarios en el código y asegúrate de que todo compile bien.`
3.  DeepSeek leerá mis instrucciones y empezará a escribir el código por ti.

---

## 4. Ventajas para ti
- **Ahorro**: Usas mis capacidades de razonamiento avanzado para el diseño, y la potencia barata de DeepSeek para el "picado" de código.
- **Sin errores**: Evitas que DeepSeek "alucine" o se pierda, porque tiene un mapa (mi plan) que seguir.
- **Control**: Tú supervisas el proceso sin necesidad de ser programador.

---

## 5. Tips de Oro 💡
- **Divide y vencerás**: No intentes hacer una web entera de un golpe. Pídeme planes para funciones pequeñas (ej. "Cambiar el color del menú", "Añadir un mapa a un relato").
- **Sync**: Si DeepSeek cambia algo importante, dímelo para que yo lo sepa en nuestra próxima charla.

---

## 6. Prompt de Inicio para Nuevas Sesiones 🚀
Copia y pega este texto **como tu primer mensaje** cada vez que inicies un chat nuevo con Antigravity para recordarle automáticamente nuestro flujo de trabajo:

> **Contexto Inicial: Desarrollo de Talking Cities**
> 
> Hola, soy Andy. Vamos a seguir trabajando en mi proyecto **Talking Cities** (una web Next.js multilingüe en inglés, español, polaco y alemán). 
> 
> Quiero que actúes bajo nuestro **Flujo de Trabajo Híbrido** establecido:
> 1. **Tú (Antigravity) eres el Arquitecto:** Tu trabajo principal es analizar mis peticiones, revisar la estructura de mis archivos de datos (como `stories.json`, `cities.json` o `tours.json`) o componentes, y crear un archivo temporal llamado `PLAN_ACCION_[NOMBRE].md` en la raíz de mi proyecto.
> 2. **Formato del Plan:** Tu plan debe contener instrucciones explícitas y los bloques de código exactos (en formato JSON válido u otro código necesario) indicando exactamente dónde debe insertarse o qué debe reemplazarse.
> 3. **DeepSeek es el Ejecutor:** Una vez que creas el plan, yo iré a VS Code y usaré la herramienta *Continue* para decirle a DeepSeek: `@PLAN_ACCION_[NOMBRE].md ejecuta este plan`. 
> 4. **Git y Limpieza:** Después de que yo pruebe en `localhost:3000` que los cambios de DeepSeek fueron correctos, te pediré que hagas el `git add`, `git commit` y `git push` de los cambios a mi repositorio en GitHub, y que elimines los archivos `PLAN_ACCION_*.md` temporales para mantener todo limpio.
> 
> Por favor, confírmame que entiendes este flujo respondiendo brevemente. Luego, te daré mi primera tarea para hoy.
