# 🌐 IA Traducciones - Chat Inteligente

> **Aplicación web moderna y responsive para traducción de texto en tiempo real utilizando la potente API de DeepSeek.**

## ✨ Características Principales

🎨 **Diseño Moderno**
- Interfaz elegante con efectos de vidrio esmerilado (glassmorphism)
- Gradientes atractivos y animaciones suaves
- Tema oscuro automático basado en preferencias del sistema

📱 **Completamente Responsive**
- Optimizado para dispositivos móviles, tablets y desktop
- Breakpoints adaptativos para todos los tamaños de pantalla
- Layout flexible que se ajusta al contenido

♿ **Accesible**
- Navegación completa por teclado
- Etiquetas ARIA para lectores de pantalla
- Estados de foco visibles y semántica HTML correcta

🌍 **Soporte Multiidioma**
- 10 idiomas disponibles con banderas representativas
- Traducciones instantáneas y precisas
- Interfaz de chat intuitiva

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5** - Estructura semántica moderna
- **CSS3** - Variables CSS, Grid, Flexbox, animaciones
- **JavaScript ES6+** - Módulos, async/await, manipulación DOM
- **Google Fonts** - Tipografía Inter para mejor legibilidad

### Backend & API
- **Node.js** - Servidor backend
- **API DeepSeek** - Motor de traducción de IA avanzado
- **Express.js** - Framework web minimalista

### Características Técnicas
- **Responsive Design** - Mobile-first approach
- **Progressive Enhancement** - Funcionalidad básica + mejoras progresivas
- **Accessibility (a11y)** - WCAG 2.1 compliance
- **Modern CSS** - Custom properties, clamp(), backdrop-filter
- **Smooth Animations** - CSS transitions y keyframes

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (v14 o superior)
- NPM o Yarn
- Clave API de DeepSeek

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/tuusuario/IA-traduccion.git

# Navegar al directorio
cd IA-traduccion

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tu API key de DeepSeek

# Iniciar el servidor
npm start
```

### Variables de Entorno
```env
DEEPSEEK_API_KEY=tu_clave_api_aqui
PORT=3000
```

## 💻 Uso

### Interfaz Web
1. **Abrir la aplicación** en tu navegador en `http://localhost:3000`
2. **Escribir el texto** que deseas traducir (máximo 100 caracteres)
3. **Seleccionar el idioma** de destino del menú desplegable
4. **Hacer clic en "✨ Traducir"** o presionar Enter
5. **Ver la traducción** en tiempo real en el chat

### Idiomas Soportados
- 🇪🇸 Español
- 🇺🇸 Inglés  
- 🇫🇷 Francés
- 🇩🇪 Alemán
- 🇮🇹 Italiano
- 🇵🇹 Portugués
- 🇷🇺 Ruso
- 🇨🇳 Chino
- 🇯🇵 Japonés
- 🇸🇦 Árabe

## 🏗️ Estructura del Proyecto

```
IA-traduccion/
├── 📁 public/
│   ├── 📄 index.html          # Página principal
│   ├── 📁 css/
│   │   └── 📄 styles.css      # Estilos modernos y responsive
│   ├── 📁 js/
│   │   └── 📄 main.js         # Lógica del frontend
│   └── 📁 images/
│       └── 🖼️ bot-chat.webp   # Logo del chat
├── 📄 app.js                  # Servidor Express
├── 📄 package.json            # Dependencias y scripts
├── 📄 README.md               # Este archivo
└── 📄 .env                    # Variables de entorno
```

## 🎨 Características de Diseño

### Paleta de Colores
- **Primario**: `#4f46e5` (Índigo moderno)
- **Secundario**: `#f8fafc` (Gris claro)
- **Acento**: `#06b6d4` (Cyan vibrante)
- **Texto**: `#1e293b` (Gris oscuro)

### Tipografía
- **Fuente**: Inter (Google Fonts)
- **Pesos**: 400 (Regular), 600 (Semi-bold), 700 (Bold)
- **Escalado**: Responsivo con `clamp()`

### Efectos Visuales
- **Glassmorphism**: `backdrop-filter: blur(10px)`
- **Sombras**: Sistema de elevación consistente
- **Animaciones**: Transiciones suaves de 300ms
- **Gradientes**: Lineales de 135 grados

## 🔧 Personalización

### Modificar Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --primary-color: #tu-color-aqui;
    --secondary-color: #tu-color-aqui;
    /* ... más variables */
}
```

### Agregar Idiomas
1. Añade la opción en `index.html`:
```html
<option value="NuevoIdioma">🏴 Nuevo Idioma</option>
```

2. Configura el backend para soportar el nuevo idioma

