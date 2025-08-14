# 🧩 Exportar Diagramas y Capturas a Imágenes

## 📋 Comandos Esenciales

| Herramienta | Propósito | Comando |
|-------------|-----------|---------|
| **Mermaid CLI** | Diagrama `.mmd` → imagen | `mmdc -i diagrama.mmd -o diagrama.png` |
| **ImageMagick** | PDF/foto → imagen segura | `magick -density 300 input.pdf -quality 90 -strip -interlace Plane -colorspace sRGB output.jpg` |
| **Puppeteer** | Web → captura pantalla | `node captura.js` |

## 🔧 Configuración rápida

### Mermaid
```bash
cd tu-carpeta
mmdc -i archivo.mmd -o resultado.png
```

### ImageMagick
```bash
cd tu-carpeta
magick documento.pdf imagen.jpg
# o para mejor calidad + seguridad anti-manipulación:
magick -density 300 input.pdf -quality 90 -strip -interlace Plane -colorspace sRGB output.jpg
```

### Puppeteer
**1.** Crea archivo `captura.js`:
```javascript
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // URL del sitio web que quieres capturar
  await page.goto('https://tu-sitio-web.com');
  
  // Nombre del archivo PNG que SE CREARÁ con la captura
  await page.screenshot({ path: 'resultado.png' });
  
  await browser.close();
})();
```

**2.** Ejecuta desde terminal:
```bash
node captura.js
```
**Resultado:** Se genera `resultado.png` con la captura

## ⚡ Uso directo
- **Mermaid:** Tienes diagrama → usas comando → obtienes imagen
- **ImageMagick:** Tienes PDF/foto → usas comando → obtienes imagen optimizada  
- **Puppeteer:** Creas script JS → ejecutas script → obtienes captura de web