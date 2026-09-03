# Invitación XV Años · Luzmery Naiara

Sitio estático (HTML + CSS + JS puro, sin dependencias de build) para la invitación
de 15 años. Se puede abrir directamente haciendo doble clic en `index.html`,
o publicarse en cualquier hosting estático gratuito.

## Estructura

- `index.html` — contenido y secciones (portada, cuenta regresiva, presentación,
  itinerario, ubicación, vestimenta, galería, confirmación).
- `style.css` — estilos, paleta azul/plateado y animaciones de mariposas.
- `script.js` — cuenta regresiva y animaciones al hacer scroll.

## Personalización pendiente

### 1. Formulario de confirmación (RSVP)
En `index.html`, sección `#confirmar`, hay un iframe de ejemplo:

```html
<iframe id="rsvp-form" src="https://docs.google.com/forms/d/e/REEMPLAZAR_CON_TU_ID_DE_FORMULARIO/viewform?embedded=true">
```

Para reemplazarlo por tu formulario real:
1. Crea el formulario en [Google Forms](https://forms.google.com) con las preguntas
   que necesites (nombre, N° de acompañantes, confirmación, alergias, etc.).
2. Haz clic en **Enviar** (arriba a la derecha) → pestaña **Insertar HTML** (ícono `<>`).
3. Copia la URL que aparece dentro de `src="..."`.
4. Pégala en el `src` del iframe `#rsvp-form`, reemplazando la URL de ejemplo.

Si prefieres no embeber el formulario, puedes reemplazar el iframe por un botón
que enlace directamente al formulario (`target="_blank"`).

### 2. Ubicación / Mapa
El mapa usa una búsqueda genérica de "Centro de Retirados Militares". Para mayor
precisión:
1. Busca el lugar exacto en [Google Maps](https://maps.google.com).
2. Copia el enlace para compartir o la dirección completa.
3. Reemplaza `Centro+de+Retirados+Militares` en las dos URLs de la sección
   `#ubicacion` (la del `<iframe>` y la del botón "Cómo llegar") por la dirección
   exacta, separando espacios con `+`.

### 3. Fotos
Cuando tengas las fotos de Luzmery Naiara:
- Crea una carpeta `img/` y coloca ahí las imágenes.
- En la sección `#galeria`, reemplaza cada `<div class="galeria-item">🦋</div>`
  por `<img src="img/foto1.jpg" alt="...">` (ajusta el CSS `.galeria-item` si
  usas `<img>` en vez de emoji).
- Puedes también usar una foto como fondo del `.hero` agregando
  `background-image: url('img/portada.jpg');` en `style.css`.

### 4. Música de fondo
El sitio incluye un botón flotante 🎵 (esquina inferior derecha) que reproduce
música de fondo en loop, usando el archivo `audio/musica-fondo.mp3`.

**Pista de prueba ya incluida**: "Shining Stars", del catálogo público
[FreePD](https://freepd.com) (dominio público / CC0, sin necesidad de
atribución), obtenida vía su copia archivada en Internet Archive
(archive.org/details/freepd). Es solo para probar el reproductor — puedes
dejarla o reemplazarla.

Para usar tu propia canción:
1. Reemplaza el archivo `audio/musica-fondo.mp3` por el tuyo (mismo nombre),
   o cambia la ruta en el `<source>` dentro de `index.html` (sección final).
2. Usa una canción con licencia libre de derechos para evitar problemas de
   copyright al publicarla (por ejemplo, en [Pixabay Music](https://pixabay.com/music/),
   [YouTube Audio Library](https://www.youtube.com/audiolibrary) o
   [Free Music Archive](https://freemusicarchive.org)), o una pista propia.

Nota: los navegadores bloquean la reproducción automática con sonido, por lo
que la música arranca en el primer clic o toque del visitante en cualquier
parte de la página (además del botón flotante, que sirve para pausar/reanudar).

### 5. Textos e itinerario
Los horarios del itinerario (`#itinerario`) y el mensaje de presentación
(`#historia`) son editables directamente en `index.html`.

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
