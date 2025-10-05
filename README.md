# 🚀 Rick & Morty API Consumer

Una aplicación web interactiva que consume la API pública de Rick & Morty para mostrar información de personajes de manera visual y atractiva.

## ✨ Características

- **Visualización de personajes**: Cards atractivas con información detallada
- **Búsqueda avanzada**: Buscar por nombre con filtros de estado y género
- **Paginación**: Navegación entre páginas de resultados
- **Modal de detalles**: Información extendida de cada personaje
- **Responsive Design**: Compatible con dispositivos móviles
- **Manejo de errores robusto**: Try/catch y mensajes de error claros
- **Estados de carga**: Indicadores visuales durante las peticiones

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con Flexbox y Grid
- **JavaScript ES6+**: Funcionalidad asíncrona con fetch API
- **Rick & Morty API**: Fuente de datos pública

## 📋 Requisitos Cumplidos

✅ **API Pública**: Rick & Morty API (https://rickandmortyapi.com/)  
✅ **Peticiones GET**: Implementadas con fetch API  
✅ **Visualización clara**: Cards y modal con información estructurada  
✅ **Estilos CSS**: Diseño moderno y responsive  
✅ **Manejo de errores**: Try/catch en todas las peticiones  

## 🚀 Cómo usar

1. **Abrir la aplicación**: Simplemente abre `index.html` en tu navegador
2. **Explorar personajes**: Los personajes se cargan automáticamente
3. **Buscar**: Usa la barra de búsqueda para encontrar personajes específicos
4. **Filtrar**: Utiliza los filtros de estado y género
5. **Ver detalles**: Haz clic en cualquier card para ver más información
6. **Navegar**: Usa la paginación para explorar más personajes

## 🌟 Funcionalidades

### Búsqueda y Filtros
- Búsqueda por nombre de personaje
- Filtro por estado (Vivo, Muerto, Desconocido)
- Filtro por género (Masculino, Femenino, Sin género, Desconocido)
- Botón "Cargar Todos" para resetear filtros

### Visualización
- **Cards de personajes**: Imagen, nombre, estado, especie, género y origen
- **Modal detallado**: Información completa incluyendo episodios
- **Indicadores de estado**: Colores para vivo/muerto/desconocido
- **Paginación**: Navegación entre páginas de resultados

### Manejo de Errores
- Errores de red y conectividad
- Respuestas HTTP no exitosas
- Resultados vacíos
- Tiempo de espera agotado
- Mensajes de error informativos
- Botón de reintento

## 🔧 Estructura del Proyecto

```
/
├── index.html      # Estructura HTML principal
├── styles.css      # Estilos CSS completos
├── script.js       # Lógica JavaScript y manejo de API
└── README.md       # Documentación
```

## 🌐 API Utilizada

**Rick and Morty API**
- URL Base: `https://rickandmortyapi.com/api`
- Endpoints utilizados:
  - `/character` - Lista de personajes
  - `/character?name=...` - Búsqueda por nombre
  - `/character?status=...` - Filtro por estado
  - `/character?gender=...` - Filtro por género
  - `/episode/{id}` - Detalles de episodios

## 🎨 Características de Diseño

- **Gradiente de fondo**: Atractivo degradado azul-púrpura
- **Cards modernas**: Bordes redondeados y sombras
- **Hover effects**: Efectos de elevación en cards
- **Modal responsive**: Ventana emergente para detalles
- **Loading spinner**: Indicador animado de carga
- **Error states**: Mensajes de error con estilo

## 📱 Responsive Design

- **Mobile First**: Optimizado para dispositivos móviles
- **Breakpoints**: 768px y 480px
- **Grid adaptativo**: Las cards se ajustan al tamaño de pantalla
- **Navegación táctil**: Botones y elementos optimizados para touch

## 🔍 Casos de Error Manejados

1. **Sin conexión a internet**
2. **API no disponible**
3. **Resultados no encontrados**
4. **Errores HTTP (404, 500, etc.)**
5. **Timeout de peticiones**
6. **Datos malformados**

## 🚦 Cómo Probar

1. **Funcionalidad normal**: Abre la app y navega
2. **Error de búsqueda**: Busca "zzzzz" para ver manejo de "sin resultados"
3. **Error de red**: Desconecta internet y recarga
4. **Error de debugging**: Ejecuta `testError()` en la consola

## 📝 Notas de Desarrollo

- **Fetch API**: Para peticiones HTTP modernas
- **Async/Await**: Manejo asíncrono limpio
- **Error boundaries**: Try/catch en todas las operaciones críticas
- **Performance**: Lazy loading de imágenes
- **Accessibility**: Navegación por teclado y semántica

---

**Desarrollado como ejemplo de consumo de API pública con manejo robusto de errores**