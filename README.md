# 🧠 Trivia Master - Aplicación de Preguntas y Respuestas

Una aplicación web interactiva que consume la **Open Trivia Database API** para generar quizzes personalizados con preguntas en español e inglés, presentadas en un diseño holográfico futurista.

## ✨ Características Principales

- **🇪🇸 Soporte Bilingüe**: Preguntas curadas en español + API en inglés
- **🎯 Quiz Interactivo**: Sistema de grid con múltiples preguntas visibles
- **🎨 Diseño Holográfico**: Estilo futurista con efectos visuales avanzados
- **📊 Progreso en Tiempo Real**: Seguimiento visual del avance del quiz
- **🔍 Filtros Avanzados**: Por categoría, dificultad y tipo de pregunta
- **⚡ Manejo Robusto de Errores**: Fallback automático a preguntas en español
- **📱 Responsive Design**: Optimizado para todos los dispositivos
- **🏆 Sistema de Puntuación**: Seguimiento de aciertos y estadísticas

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica moderna
- **CSS3**: Gradientes holográficos, animaciones y efectos visuales
- **JavaScript ES6+**: Async/await, módulos ES6, manejo de estado
- **Font Awesome 6.4.0**: Iconografía profesional
- **Open Trivia Database API**: Fuente de preguntas en inglés
- **Base de Datos Local**: 20+ preguntas curadas en español

## 📋 Funcionalidades Implementadas

✅ **API Pública**: Open Trivia Database (https://opentdb.com/)  
✅ **Consumo de API**: Peticiones GET con manejo de errores  
✅ **Visualización Grid**: Cards de preguntas con estados visuales  
✅ **Filtros Dinámicos**: Categoría, dificultad y tipo de pregunta  
✅ **Sistema de Fallback**: Preguntas en español cuando la API falla  
✅ **Interfaz Bilingüe**: Soporte completo español/inglés  
✅ **Manejo de Rate Limits**: Detección y solución automática de error 429  

## 🎮 Cómo Usar la Aplicación

### 1. **Configuración Inicial**
```bash
# Clona el repositorio
git clone https://github.com/Henry-Tercero-MH/-S9-Consulta-y-visualizaci-n-de-API-externa.git

# Navega al directorio
cd -S9-Consulta-y-visualizaci-n-de-API-externa

# Abre con servidor local (recomendado)
python -m http.server 8000
# O simplemente abre index.html en tu navegador
```

### 2. **Generar Quiz**
- **Selecciona filtros**: Cantidad, categoría, dificultad y tipo
- **Elige idioma**: 🇪🇸 Español o 🇬🇧 English
- **Genera trivia**: Haz clic en "Generar Trivia"
- **Responde preguntas**: Haz clic en las opciones A, B, C, D

### 3. **Navegación**
- **Vista Grid**: Todas las preguntas visibles simultáneamente
- **Estados Visuales**: ⏰ Pendiente, ✅ Correcto, ❌ Incorrecto
- **Card de Progreso**: Estadísticas en tiempo real
- **Finalizar Quiz**: Botón automático cuando completar todas

## 🌟 Características Técnicas

### **Sistema de Preguntas Bilingüe**
```javascript
// Preguntas en español (fallback)
const SPANISH_QUESTIONS = [
    {
        category: "Historia",
        difficulty: "easy",
        question: "¿En qué año comenzó la Segunda Guerra Mundial?",
        correct_answer: "1939",
        incorrect_answers: ["1940", "1938", "1941"]
    }
    // ... 20+ preguntas más
];

// API en inglés con traducción
const response = await fetch(`https://opentdb.com/api.php?amount=10`);
```

### **Manejo Robusto de Errores**
- **Error 429 (Rate Limit)**: Cambio automático a español
- **Sin conexión**: Preguntas offline disponibles
- **API no disponible**: Fallback transparente
- **Filtros sin resultados**: Sugerencias automáticas

### **Interfaz Visual Avanzada**
- **Gradientes Holográficos**: Cyan, magenta y amarillo
- **Animaciones CSS**: Pulsos, brillos y transformaciones
- **Estados Dinámicos**: Colores que cambian según respuestas
- **Iconos Contextuales**: Font Awesome para cada categoría

## 🎨 Categorías y Iconos

| Categoría | Icono | Descripción |
|-----------|-------|-------------|
| 🏛️ Historia | `fa-landmark` | Eventos históricos |
| 🧪 Ciencia | `fa-flask` | Conocimiento científico |
| ⚽ Deportes | `fa-football` | Deportes y competencias |
| 🌍 Geografía | `fa-globe` | Países, capitales, ríos |
| 🎨 Arte | `fa-palette` | Pintura, música, literatura |
| 📖 Literatura | `fa-book` | Libros y autores |
| 🎬 Entretenimiento | `fa-film` | Películas, TV, celebridades |
| 🧠 Conocimiento General | `fa-brain` | Temas variados |

## 🔧 Estructura del Proyecto

```
📁 API/
├── 📄 index.html          # Estructura HTML principal
├── 🎨 styles.css          # Estilos holográficos y responsive
├── ⚙️ script.js           # Lógica de la aplicación
├── 📚 README.md           # Documentación completa
└── 📋 Características:
    ├── 🇪🇸 Base de datos en español
    ├── 🌐 Integración con API externa
    ├── 🎯 Sistema de quiz interactivo
    └── 📊 Seguimiento de progreso
```

## 🌐 APIs y Servicios

### **Open Trivia Database API**
- **URL Base**: `https://opentdb.com/api.php`
- **Endpoints**:
  - `?amount=N` - Cantidad de preguntas
  - `&category=ID` - Filtro por categoría
  - `&difficulty=LEVEL` - easy, medium, hard
  - `&type=TYPE` - multiple, boolean

### **Códigos de Respuesta**
```javascript
const errorMessages = {
    0: 'Éxito - Preguntas obtenidas',
    1: 'No hay suficientes preguntas',
    2: 'Parámetros inválidos',
    3: 'Token no encontrado',
    4: 'Token está vacío'
};
```

## 🎯 Tipos de Pregunta

### **🔢 Opción Múltiple**
- 4 opciones (A, B, C, D)
- 1 respuesta correcta
- 3 respuestas incorrectas mezcladas

### **✅ Verdadero/Falso**
- 2 opciones simples
- Respuesta binaria
- Ideal para hechos concretos

## 📊 Sistema de Puntuación

```javascript
// Cálculo automático
const correctAnswers = responses.filter(r => r.isCorrect).length;
const percentage = Math.round((correctAnswers / totalQuestions) * 100);

// Niveles de rendimiento
if (percentage >= 80) return "🏆 Excelente";
if (percentage >= 60) return "🎉 Muy bien";
if (percentage >= 40) return "👍 No está mal";
return "📚 Sigue estudiando";
```

## 🚀 Funcionalidades Avanzadas

### **1. Sistema de Caché**
```javascript
let apiCache = new Map();
const CACHE_DURATION = 300000; // 5 minutos
```

### **2. Control de Rate Limits**
```javascript
const API_COOLDOWN = 2000; // 2 segundos entre llamadas
await waitForApiCooldown();
```

### **3. Notificaciones Toast**
```javascript
showToast('✅ ¡Correcto! +1 punto', 'success');
showToast('❌ Incorrecto. La respuesta era: ' + correctAnswer, 'error');
```

### **4. Responsive Grid**
```css
.characters-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
}
```

## 🎨 Guía de Estilos

### **Colores Principales**
```css
:root {
    --primary-cyan: #00ffff;
    --primary-magenta: #ff00ff;
    --accent-yellow: #ffeb3b;
    --bg-dark: #0a0a0a;
    --text-light: #e0e0e0;
}
```

### **Gradientes Holográficos**
```css
background: linear-gradient(135deg, 
    rgba(0, 255, 255, 0.1), 
    rgba(255, 0, 255, 0.1)
);
```

## 📱 Responsive Breakpoints

| Dispositivo | Ancho | Columnas Grid |
|-------------|-------|---------------|
| 🖥️ Desktop | >1200px | 4 columnas |
| 💻 Laptop | 768-1200px | 3 columnas |
| 📱 Tablet | 480-768px | 2 columnas |
| 📱 Mobile | <480px | 1 columna |

## 🔍 Casos de Uso y Testing

### **Escenarios de Prueba**
1. **✅ Funcionalidad Normal**: Generar quiz y responder
2. **⚠️ Error de API**: Desconectar internet → fallback español
3. **🔄 Rate Limit**: Generar múltiples quizzes rápido → manejo automático
4. **🔍 Filtros Vacíos**: Seleccionar filtros sin resultados → sugerencias
5. **📱 Mobile**: Probar en dispositivos móviles → responsive

### **Comandos de Debug**
```javascript
// En consola del navegador
console.log('Questions:', currentQuestions);
console.log('Score:', score, '/', totalQuestions);
console.log('Cache:', apiCache);
```

## 🌟 Características Únicas

### **🇪🇸 Preguntas Curadas en Español**
- 20+ preguntas originales en español perfecto
- Múltiples categorías y dificultades
- Sin dependencia de APIs externas
- Contenido cultural relevante

### **🎯 Grid de Progreso Visual**
- Todas las preguntas visibles simultáneamente
- Estados de color por respuesta
- Card de progreso con estadísticas animadas
- Finalización automática cuando completa

### **⚡ Sistema de Fallback Inteligente**
- Detección automática de problemas de API
- Cambio transparente a modo español
- Notificaciones contextuales
- Sin interrupciones en la experiencia

## 🏆 Resultados y Compartir

### **Estadísticas Finales**
```javascript
const results = {
    score: correctAnswers,
    total: totalQuestions,
    percentage: Math.round((correctAnswers / totalQuestions) * 100),
    categories: categoryStats,
    timeSpent: elapsedTime
};
```

### **Opciones de Compartir**
- **� Copiar al portapapeles**: Texto con resultados
- **🌐 Web Share API**: Compartir nativo en móviles
- **💾 Guardar localmente**: LocalStorage para historial

## 🔐 Seguridad y Privacidad

- **Sin cookies**: No se almacenan datos personales
- **LocalStorage**: Solo resultados opcionales locales
- **HTTPS**: Todas las APIs usan conexiones seguras
- **Sin tracking**: No hay analytics externos

## 📈 Mejoras Futuras

### **Próximas Funcionalidades**
- [ ] 🏆 Sistema de logros y badges
- [ ] 📊 Estadísticas históricas
- [ ] 👥 Modo multijugador
- [ ] 🎵 Efectos de sonido
- [ ] 🌙 Modo nocturno/diurno
- [ ] 📱 PWA (Progressive Web App)

### **APIs Adicionales**
- [ ] JService (Jeopardy questions)
- [ ] Quiz API
- [ ] Trivia API
- [ ] Questions API

---

## 👨‍💻 Desarrollo

**Desarrollado por**: Henry Tercero  
**Repositorio**: [GitHub](https://github.com/Henry-Tercero-MH/-S9-Consulta-y-visualizaci-n-de-API-externa)  
**Tecnologías**: HTML5, CSS3, JavaScript ES6+, Font Awesome, Open Trivia DB  
**Propósito**: Consumo de API pública con interfaz interactiva y manejo robusto de errores  

---

*🚀 Una aplicación moderna de trivia que combina consumo de APIs externas con una experiencia de usuario excepcional y diseño futurista.*