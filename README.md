# Invitación XV Años · Luzmery Naiara

Sitio estático (HTML + CSS + JS puro, sin dependencias de build) para la invitación
de 15 años. Se puede abrir directamente haciendo doble clic en `index.html`,
o publicarse en cualquier hosting estático gratuito.

## Estructura

- `index.html` — contenido y secciones (portada, fecha y cuenta regresiva,
  detalles y vestimenta, presentación, ubicación, confirmación). No tiene menú
  de navegación: es una página de scroll continuo.
- `style.css` — estilos mobile-first, paleta azul/plateado y decoraciones
  (tiara, mariposas, rosas, corazones).
- `script.js` — cuenta regresiva, botón "Agregar al calendario" (.ics),
  reproductor de música y animaciones al hacer scroll.

## Personalización pendiente

### 1. Formulario de confirmación (RSVP)
En `index.html`, sección `#confirmar`, el botón "Confirmar asistencia" enlaza a
un formulario de ejemplo:

```html
<a class="btn btn-primary" id="rsvp-link" href="https://docs.google.com/forms/d/e/REEMPLAZAR_CON_TU_ID_DE_FORMULARIO/viewform" ...>
```

Para reemplazarlo por tu formulario real:
1. Crea el formulario en [Google Forms](https://forms.google.com) con las preguntas
   que necesites (nombre, N° de acompañantes, confirmación, alergias, etc.).
2. Haz clic en **Enviar** → pestaña de enlace (ícono 🔗) y copia la URL.
3. Pégala en el `href` del botón `#rsvp-link`.

Se usa un botón en vez de un formulario embebido porque en celulares el
formulario se abre a pantalla completa y es mucho más cómodo de llenar.

### 2. Ubicación / Mapa
La sección `#ubicacion` ya apunta al Club de Retirados Militares de Toledo:
el mapa embebido, el botón "Google Maps" (enlace `maps.app.goo.gl`) y el botón
"Waze" (usa las coordenadas `-34.7448788,-56.0893142`). Si cambia el lugar,
actualiza los tres.

Si cambias el lugar o el horario, actualiza también el objeto `EVENT` en
`script.js` y el enlace de Google Calendar de la sección `#countdown`.

### 3. Fotos
El sitio ya incluye una carpeta `img/` con imágenes de ambientación (azul y
plateado, con mariposas, rosas y una tiara) usadas en el hero, el fondo de
toda la página y la sección "Un poco de mí":

- `img/hero-cielo-estrellado.png` — textura de fondo de toda la página (se usa
  como fondo fijo del `<body>`) y del footer.
- `img/tiara.png` — tiara sobre el nombre en el hero.
- `img/quince.png` — el número "15" en cristales, reemplaza la palabra "Quince".
- `img/corazon-borde.png` — divisor ornamental con corazón, usado bajo "Años",
  bajo el nombre, y como separador (`.section-divider`) al inicio de cada
  sección del sitio.
- `img/mariposa-azul.png` — mariposas grandes del hero (izquierda y derecha), y
  también junto al texto de presentación (variante `mariposa-azul-2.png`).
- `img/mariposa-plateada.png` — mariposa plateada pequeña del hero.
- `img/rosa-azul.png` y `img/rosa-azul-2.png` — ramos de rosas de las esquinas
  inferiores del hero (izquierda y derecha respectivamente).
- `img/hojas.png` — hojas plateadas de relleno detrás de las rosas.

Todas son PNG con fondo transparente. Cuando tengas las
fotos reales de Luzmery Naiara, puedes reemplazar la imagen de `#historia`
(`.presentacion-media img`) por una foto real de la quinceañera, o agregar
una nueva sección de galería con tus propias fotos.

### 4. Música de fondo
El sitio incluye un botón flotante 🎵 (esquina inferior derecha) que reproduce
música de fondo en loop: "The Climb" de Miley Cyrus, en el archivo
`audio/the_climb_miley_cyrus.mp3`.

Para cambiar la canción, reemplaza ese archivo y actualiza la ruta del
`<source>` dentro de `index.html` (sección final).

Nota: los navegadores bloquean la reproducción automática con sonido, por lo
que la música arranca en el primer clic o toque del visitante en cualquier
parte de la página (además del botón flotante, que sirve para pausar/reanudar).

### 5. Textos
El mensaje de presentación (`#historia`) y los demás textos son editables
directamente en `index.html`.

## Publicar en hosting gratuito

### Opción A: GitHub Pages
1. Crea un repositorio en GitHub (puede ser público) y sube estos archivos
   (`index.html`, `style.css`, `script.js`).
2. En el repositorio: **Settings → Pages → Source**, selecciona la rama
   `main` y la carpeta `/root`.
3. En unos minutos el sitio estará disponible en
   `https://<tu-usuario>.github.io/<nombre-repo>/`.

### Opción B: Hostinger (u otro hosting con panel de archivos/FTP)
1. Entra al **Panel de hosting → Administrador de archivos**.
2. Ve a la carpeta `public_html` (o la carpeta raíz del dominio/subdominio).
3. Sube `index.html`, `style.css` y `script.js` (y la carpeta `img/` si la
   agregaste) a esa carpeta.
4. El sitio quedará disponible en tu dominio o subdominio asignado.

### Opción C: Netlify / Vercel (alternativas también gratuitas)
Arrastra la carpeta completa a [app.netlify.com/drop](https://app.netlify.com/drop)
para publicarla en segundos, sin necesidad de crear cuenta de GitHub.

## Notas

- Como el hosting será temporal, conviene guardar una copia local de esta
  carpeta (o el repositorio de GitHub) para poder reutilizarla o reubicarla
  cuando el hosting gratuito expire.
- La cuenta regresiva usa la hora local del dispositivo de cada invitado,
  tomando como referencia el 17 de octubre de 2026, 21:00 h.
