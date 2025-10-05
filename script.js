// Configuración de la Open Trivia Database API
const TRIVIA_API_BASE = 'https://opentdb.com/api.php';

// Preguntas en español como respaldo
const SPANISH_QUESTIONS = [
    {
        category: "Geografía",
        type: "multiple",
        difficulty: "easy",
        question: "¿Cuál es la capital de España?",
        correct_answer: "Madrid",
        incorrect_answers: ["Barcelona", "Sevilla", "Valencia"]
    },
    {
        category: "Historia",
        type: "multiple",
        difficulty: "medium",
        question: "¿En qué año llegó Cristóbal Colón a América?",
        correct_answer: "1492",
        incorrect_answers: ["1491", "1493", "1490"]
    },
    {
        category: "Ciencia",
        type: "boolean",
        difficulty: "easy",
        question: "¿El Sol es una estrella?",
        correct_answer: "Verdadero",
        incorrect_answers: ["Falso"]
    },
    {
        category: "Arte",
        type: "multiple",
        difficulty: "medium",
        question: "¿Quién pintó 'Las Meninas'?",
        correct_answer: "Diego Velázquez",
        incorrect_answers: ["Francisco Goya", "Pablo Picasso", "Salvador Dalí"]
    },
    {
        category: "Deportes",
        type: "multiple",
        difficulty: "easy",
        question: "¿Cuántos jugadores hay en un equipo de fútbol en el campo?",
        correct_answer: "11",
        incorrect_answers: ["10", "12", "9"]
    },
    {
        category: "Literatura",
        type: "multiple",
        difficulty: "hard",
        question: "¿Quién escribió 'Don Quijote de la Mancha'?",
        correct_answer: "Miguel de Cervantes",
        incorrect_answers: ["Lope de Vega", "Francisco de Quevedo", "Calderón de la Barca"]
    },
    {
        category: "Ciencia",
        type: "multiple",
        difficulty: "medium",
        question: "¿Cuál es el elemento químico más abundante en el universo?",
        correct_answer: "Hidrógeno",
        incorrect_answers: ["Oxígeno", "Carbono", "Helio"]
    },
    {
        category: "Geografía",
        type: "multiple",
        difficulty: "easy",
        question: "¿Cuál es el río más largo del mundo?",
        correct_answer: "Río Nilo",
        incorrect_answers: ["Río Amazonas", "Río Misisipi", "Río Yangtsé"]
    },
    {
        category: "Historia",
        type: "boolean",
        difficulty: "medium",
        question: "¿La Segunda Guerra Mundial terminó en 1945?",
        correct_answer: "Verdadero",
        incorrect_answers: ["Falso"]
    },
    {
        category: "Matemáticas",
        type: "multiple",
        difficulty: "easy",
        question: "¿Cuánto es 15 + 27?",
        correct_answer: "42",
        incorrect_answers: ["41", "43", "40"]
    },
    {
        category: "Ciencia",
        type: "multiple",
        difficulty: "easy",
        question: "¿Cuántos planetas hay en nuestro sistema solar?",
        correct_answer: "8",
        incorrect_answers: ["9", "7", "10"]
    },
    {
        category: "Cultura General",
        type: "boolean",
        difficulty: "easy",
        question: "¿México está en América del Norte?",
        correct_answer: "Verdadero",
        incorrect_answers: ["Falso"]
    },
    {
        category: "Arte",
        type: "multiple",
        difficulty: "easy",
        question: "¿De qué color se obtiene al mezclar azul y amarillo?",
        correct_answer: "Verde",
        incorrect_answers: ["Morado", "Naranja", "Rojo"]
    },
    {
        category: "Deportes",
        type: "multiple",
        difficulty: "medium",
        question: "¿Cada cuántos años se celebran los Juegos Olímpicos de Verano?",
        correct_answer: "4 años",
        incorrect_answers: ["2 años", "3 años", "5 años"]
    },
    {
        category: "Historia",
        type: "multiple",
        difficulty: "hard",
        question: "¿Quién fue el primer emperador romano?",
        correct_answer: "Augusto",
        incorrect_answers: ["Julio César", "Nerón", "Trajano"]
    },
    {
        category: "Literatura",
        type: "multiple",
        difficulty: "medium",
        question: "¿Quién escribió 'Cien años de soledad'?",
        correct_answer: "Gabriel García Márquez",
        incorrect_answers: ["Mario Vargas Llosa", "Julio Cortázar", "Isabel Allende"]
    },
    {
        category: "Ciencia",
        type: "boolean",
        difficulty: "medium",
        question: "¿La velocidad de la luz es constante en el vacío?",
        correct_answer: "Verdadero",
        incorrect_answers: ["Falso"]
    },
    {
        category: "Geografía",
        type: "multiple",
        difficulty: "medium",
        question: "¿Cuál es la montaña más alta del mundo?",
        correct_answer: "Monte Everest",
        incorrect_answers: ["K2", "Monte Kilimanjaro", "Monte McKinley"]
    },
    {
        category: "Matemáticas",
        type: "multiple",
        difficulty: "medium",
        question: "¿Cuál es el resultado de 8 × 7?",
        correct_answer: "56",
        incorrect_answers: ["54", "58", "52"]
    },
    {
        category: "Cultura General",
        type: "multiple",
        difficulty: "easy",
        question: "¿Cuántos días tiene un año bisiesto?",
        correct_answer: "366",
        incorrect_answers: ["365", "367", "364"]
    }
];

// Sistema de traducción simple (palabras comunes)
const TRANSLATIONS = {
    // Categorías
    "General Knowledge": "Conocimiento General",
    "Books": "Libros",
    "Film": "Películas",
    "Music": "Música",
    "Musicals & Theatres": "Teatro y Musicales",
    "Television": "Televisión",
    "Video Games": "Videojuegos",
    "Board Games": "Juegos de Mesa",
    "Science & Nature": "Ciencia y Naturaleza",
    "Computers": "Informática",
    "Mathematics": "Matemáticas",
    "Mythology": "Mitología",
    "Sports": "Deportes",
    "Geography": "Geografía",
    "History": "Historia",
    "Politics": "Política",
    "Art": "Arte",
    "Celebrities": "Celebridades",
    "Animals": "Animales",
    "Vehicles": "Vehículos",
    
    // Respuestas comunes
    "True": "Verdadero",
    "False": "Falso",
    "Yes": "Sí",
    "No": "No",
    
    // Palabras comunes
    "The": "El/La",
    "What": "¿Qué",
    "Which": "¿Cuál",
    "Who": "¿Quién",
    "When": "¿Cuándo",
    "Where": "¿Dónde",
    "How": "¿Cómo",
    "Why": "¿Por qué"
};

// Estado de la aplicación
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let totalQuestions = 0;
let questionsAnswered = 0;
let isQuizMode = false;
let useSpanishQuestions = true; // Por defecto usar preguntas en español

// Elementos del DOM
const elements = {
    generateBtn: document.getElementById('generateBtn'),
    surpriseMeBtn: document.getElementById('surpriseMeBtn'),
    languageToggleBtn: document.getElementById('languageToggleBtn'),
    categoryFilter: document.getElementById('categoryFilter'),
    difficultyFilter: document.getElementById('difficultyFilter'),
    typeFilter: document.getElementById('typeFilter'),
    amountFilter: document.getElementById('amountFilter'),
    activityCounter: document.getElementById('activityCounter'),
    scoreCounter: document.getElementById('scoreCounter'),
    loading: document.getElementById('loading'),
    errorMessage: document.getElementById('errorMessage'),
    errorText: document.getElementById('errorText'),
    retryBtn: document.getElementById('retryBtn'),
    resultsInfo: document.getElementById('resultsInfo'),
    resultsCount: document.getElementById('resultsCount'),
    charactersGrid: document.getElementById('charactersGrid'),
    quizNavigation: document.getElementById('quizNavigation'),
    prevQuestionBtn: document.getElementById('prevQuestionBtn'),
    nextQuestionBtn: document.getElementById('nextQuestionBtn'),
    questionProgress: document.getElementById('questionProgress'),
    finishQuizBtn: document.getElementById('finishQuizBtn'),
    quickActions: document.getElementById('quickActions'),
    saveResultsBtn: document.getElementById('saveResultsBtn'),
    shareResultsBtn: document.getElementById('shareResultsBtn'),
    newQuizBtn: document.getElementById('newQuizBtn'),
    modal: document.getElementById('characterModal'),
    modalBody: document.getElementById('modalBody'),
    closeModal: document.querySelector('.close')
};

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    updateCounters();
    showWelcomeMessage();
}

function setupEventListeners() {
    elements.generateBtn.addEventListener('click', generateTrivia);
    elements.surpriseMeBtn.addEventListener('click', generateRandomTrivia);
    elements.languageToggleBtn.addEventListener('click', toggleLanguage);
    
    elements.prevQuestionBtn.addEventListener('click', () => navigateQuestion(-1));
    elements.nextQuestionBtn.addEventListener('click', () => navigateQuestion(1));
    elements.finishQuizBtn.addEventListener('click', finishQuiz);
    
    elements.saveResultsBtn.addEventListener('click', saveResults);
    elements.shareResultsBtn.addEventListener('click', shareResults);
    elements.newQuizBtn.addEventListener('click', startNewQuiz);
    
    elements.retryBtn.addEventListener('click', () => {
        hideError();
        generateTrivia();
    });
    
    // Modal events
    elements.closeModal.addEventListener('click', closeModal);
    window.addEventListener('click', function(e) {
        if (e.target === elements.modal) {
            closeModal();
        }
    });
}

// Funciones de utilidad
function showLoading() {
    elements.loading.classList.remove('hidden');
}

function hideLoading() {
    elements.loading.classList.add('hidden');
}

function showError(message) {
    elements.errorText.textContent = message;
    elements.errorMessage.classList.remove('hidden');
}

function hideError() {
    elements.errorMessage.classList.add('hidden');
}

function updateCounters() {
    elements.activityCounter.innerHTML = `
        <i class="fas fa-clipboard-check"></i>
        Preguntas respondidas: <span style="color: #4CAF50;">${questionsAnswered}</span>
    `;
    elements.scoreCounter.innerHTML = `
        <i class="fas fa-star"></i>
        Puntuación: <span style="color: #FFD700;">${score}</span>/<span style="color: #00ffff;">${totalQuestions}</span>
    `;
}

function showWelcomeMessage() {
    elements.charactersGrid.innerHTML = `
        <div class="welcome-message" style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
            <div class="welcome-icon" style="font-size: 4rem; margin-bottom: 1rem;">
                <i class="fas fa-brain" style="color: var(--primary-cyan); text-shadow: 0 0 20px rgba(0, 255, 255, 0.5);"></i>
            </div>
            <h2 style="color: var(--primary-cyan); margin-bottom: 1rem;">
                <i class="fas fa-quiz"></i>
                ¡Pon a prueba tus conocimientos!
            </h2>
            <p style="color: var(--text-light); margin-bottom: 1.5rem; font-size: 1.1rem;">
                <i class="fas fa-rocket"></i>
                Desafía tu mente con preguntas de trivia ${useSpanishQuestions ? 'en español' : 'en inglés'} de múltiples categorías y dificultades.
            </p>
            <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem; margin-bottom: 1.5rem;">
                <div class="welcome-feature" style="background: rgba(0, 255, 255, 0.1); padding: 1rem; border-radius: 10px; border: 1px solid rgba(0, 255, 255, 0.3);">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">
                        <i class="fas fa-language" style="color: #FF6B35;"></i>
                    </div>
                    <h4 style="color: var(--primary-magenta);">
                        <i class="fas fa-flag"></i>
                        Idioma Español
                    </h4>
                    <p style="color: var(--text-muted); font-size: 0.9rem;">
                        <i class="fas fa-check"></i>
                        Preguntas curadas en español
                    </p>
                </div>
                <div class="welcome-feature" style="background: rgba(255, 0, 255, 0.1); padding: 1rem; border-radius: 10px; border: 1px solid rgba(255, 0, 255, 0.3);">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">
                        <i class="fas fa-layer-group" style="color: #FFD700;"></i>
                    </div>
                    <h4 style="color: var(--accent-yellow);">
                        <i class="fas fa-signal"></i>
                        3 Dificultades
                    </h4>
                    <p style="color: var(--text-muted); font-size: 0.9rem;">
                        <i class="fas fa-smile"></i> Fácil,
                        <i class="fas fa-meh"></i> Medio,
                        <i class="fas fa-frown"></i> Difícil
                    </p>
                </div>
                <div class="welcome-feature" style="background: rgba(255, 255, 0, 0.1); padding: 1rem; border-radius: 10px; border: 1px solid rgba(255, 255, 0, 0.3);">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">
                        <i class="fas fa-gamepad" style="color: #4CAF50;"></i>
                    </div>
                    <h4 style="color: var(--primary-cyan);">
                        <i class="fas fa-play"></i>
                        Modo Quiz
                    </h4>
                    <p style="color: var(--text-muted); font-size: 0.9rem;">
                        <i class="fas fa-eye"></i>
                        Vista de grid con progreso visual
                    </p>
                </div>
                <div class="welcome-feature" style="background: rgba(0, 255, 0, 0.1); padding: 1rem; border-radius: 10px; border: 1px solid rgba(0, 255, 0, 0.3);">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">
                        <i class="fas fa-chart-line" style="color: #FF5722;"></i>
                    </div>
                    <h4 style="color: var(--primary-magenta);">
                        <i class="fas fa-trophy"></i>
                        Puntuación
                    </h4>
                    <p style="color: var(--text-muted); font-size: 0.9rem;">
                        <i class="fas fa-star"></i>
                        Seguimiento de aciertos en tiempo real
                    </p>
                </div>
            </div>
            <div style="background: rgba(255, 165, 0, 0.1); padding: 1rem; border-radius: 10px; border: 1px solid rgba(255, 165, 0, 0.3); margin-bottom: 1rem;">
                <p style="color: var(--text-muted); font-size: 0.9rem;">
                    <i class="fas fa-flag" style="color: #FF6B35;"></i>
                    <strong>Modo Español:</strong> ${useSpanishQuestions ? 'Activo - Preguntas curadas en español' : 'Inactivo - Usando API en inglés'}<br>
                    <i class="fas fa-lightbulb" style="color: #FFD700;"></i>
                    <strong>Tip:</strong> Usa el botón 
                    <i class="fas fa-language"></i>
                    de idioma para cambiar entre español e inglés.
                </p>
            </div>
            <p style="color: var(--text-muted); font-size: 0.9rem;">
                <i class="fas fa-rocket" style="color: #4CAF50;"></i>
                <strong>¡Comienza ahora!</strong> Genera tu primer quiz y demuestra lo que sabes.
                <i class="fas fa-brain" style="color: var(--primary-cyan);"></i>
            </p>
        </div>
    `;
}

// Función para cambiar idioma
function toggleLanguage() {
    useSpanishQuestions = !useSpanishQuestions;
    
    if (useSpanishQuestions) {
        elements.languageToggleBtn.textContent = '🇪🇸 Español';
        elements.languageToggleBtn.style.background = 'linear-gradient(45deg, #FF6B35, #F7931E)';
        showToast('🇪🇸 Cambiado a preguntas en español');
    } else {
        elements.languageToggleBtn.textContent = '🇬🇧 English';
        elements.languageToggleBtn.style.background = 'linear-gradient(45deg, #4169E1, #6495ED)';
        showToast('🇬🇧 Switched to English questions');
    }
    
    showWelcomeMessage();
}

// Función para obtener preguntas en español
function getSpanishQuestions(amount, category, difficulty, type) {
    let filteredQuestions = [...SPANISH_QUESTIONS];
    
    // Mapear categorías en inglés a español
    const categoryMap = {
        "9": "Conocimiento General",
        "10": "Literatura", 
        "11": "Películas",
        "17": "Ciencia",
        "21": "Deportes",
        "22": "Geografía",
        "23": "Historia",
        "25": "Arte",
        "19": "Matemáticas"
    };
    
    // Filtrar por categoría
    if (category && categoryMap[category]) {
        const spanishCategory = categoryMap[category];
        filteredQuestions = filteredQuestions.filter(q => 
            q.category === spanishCategory || 
            q.category.includes(spanishCategory.split(' ')[0])
        );
    }
    
    // Filtrar por dificultad
    if (difficulty) {
        filteredQuestions = filteredQuestions.filter(q => q.difficulty === difficulty);
    }
    
    // Filtrar por tipo
    if (type) {
        filteredQuestions = filteredQuestions.filter(q => q.type === type);
    }
    
    // Si no hay suficientes preguntas, usar todas
    if (filteredQuestions.length === 0) {
        filteredQuestions = [...SPANISH_QUESTIONS];
    }
    
    // Mezclar y tomar la cantidad solicitada
    const shuffled = shuffleArray(filteredQuestions);
    return shuffled.slice(0, parseInt(amount));
}

// Función para traducir texto básico
function translateText(text) {
    if (!useSpanishQuestions) return text;
    
    let translated = text;
    
    // Aplicar traducciones de diccionario
    Object.keys(TRANSLATIONS).forEach(english => {
        const spanish = TRANSLATIONS[english];
        translated = translated.replace(new RegExp(english, 'gi'), spanish);
    });
    
    return translated;
}

// Generar trivia con filtros y manejo robusto de errores
async function generateTrivia() {
    try {
        showLoading();
        hideError();
        
        const amount = elements.amountFilter.value || '10';
        const category = elements.categoryFilter.value;
        const difficulty = elements.difficultyFilter.value;
        const type = elements.typeFilter.value;
        
        let questions = [];
        
        if (useSpanishQuestions) {
            // Usar preguntas en español
            questions = getSpanishQuestions(amount, category, difficulty, type);
            showToast('🇪🇸 Usando preguntas curadas en español');
        } else {
            // Intentar usar API en inglés con manejo de errores robusto
            try {
                // Esperar antes de hacer la llamada para evitar límites
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                let url = `${TRIVIA_API_BASE}`;
                const params = new URLSearchParams();
                
                params.append('amount', amount);
                if (category) params.append('category', category);
                if (difficulty) params.append('difficulty', difficulty);
                if (type) params.append('type', type);
                
                url += '?' + params.toString();
                
                console.log('Fetching trivia from:', url);
                
                const response = await fetch(url);
                
                if (!response.ok) {
                    if (response.status === 429) {
                        throw new Error('RATE_LIMIT_EXCEEDED');
                    }
                    throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
                }
                
                const data = await response.json();
                
                if (data.response_code !== 0) {
                    const errorMessages = {
                        1: 'No hay suficientes preguntas para los filtros seleccionados',
                        2: 'Parámetros inválidos',
                        3: 'Token no encontrado',
                        4: 'Token está vacío'
                    };
                    
                    if (data.response_code === 1) {
                        // Si no hay suficientes preguntas, usar español como fallback
                        throw new Error('INSUFFICIENT_QUESTIONS');
                    }
                    
                    throw new Error(errorMessages[data.response_code] || 'Error desconocido de la API');
                }
                
                if (!data.results || data.results.length === 0) {
                    throw new Error('EMPTY_RESULTS');
                }
                
                questions = data.results.map(q => ({
                    ...q,
                    question: translateText(decodeHtml(q.question)),
                    correct_answer: translateText(decodeHtml(q.correct_answer)),
                    incorrect_answers: q.incorrect_answers.map(answer => translateText(decodeHtml(answer))),
                    category: translateText(q.category)
                }));
                
                showToast('🇬🇧 Preguntas obtenidas de la API');
                
            } catch (apiError) {
                console.warn('Error con API, cambiando automáticamente a español:', apiError.message);
                
                // Cambiar automáticamente a español como fallback
                useSpanishQuestions = true;
                
                // Actualizar botón de idioma
                elements.languageToggleBtn.textContent = '🇪🇸 Español';
                elements.languageToggleBtn.style.background = 'linear-gradient(45deg, #FF6B35, #F7931E)';
                
                questions = getSpanishQuestions(amount, category, difficulty, type);
                
                let fallbackMessage = '⚠️ ';
                if (apiError.message.includes('RATE_LIMIT')) {
                    fallbackMessage += 'Límite de API alcanzado - Usando preguntas en español';
                } else if (apiError.message.includes('INSUFFICIENT_QUESTIONS')) {
                    fallbackMessage += 'No hay suficientes preguntas en la API - Usando preguntas en español';
                } else if (apiError.message.includes('EMPTY_RESULTS')) {
                    fallbackMessage += 'Sin resultados de la API - Usando preguntas en español';
                } else {
                    fallbackMessage += 'Error de conexión - Usando preguntas en español como respaldo';
                }
                
                showToast(fallbackMessage);
            }
        }
        
        if (questions.length === 0) {
            throw new Error('No se pudieron obtener preguntas. Intenta con filtros diferentes o usa el modo español.');
        }
        
        currentQuestions = questions.map(q => ({
            ...q,
            user_answer: null,
            is_answered: false
        }));
        
        totalQuestions = currentQuestions.length;
        currentQuestionIndex = 0;
        userAnswers = [];
        isQuizMode = true;
        
        displayQuiz();
        hideLoading();
        
    } catch (error) {
        console.error('Error generating trivia:', error);
        hideLoading();
        showError('Error al generar trivia: ' + error.message + '\n\n💡 Tip: Prueba usar el modo español para evitar límites de API.');
    }
}

// Generar trivia aleatoria con manejo de errores mejorado
async function generateRandomTrivia() {
    try {
        showLoading();
        hideError();
        
        // Intentar primero con preguntas en español como fallback
        if (useSpanishQuestions) {
            const randomQuestion = SPANISH_QUESTIONS[Math.floor(Math.random() * SPANISH_QUESTIONS.length)];
            
            currentQuestions = [{
                ...randomQuestion,
                user_answer: null,
                is_answered: false
            }];
            totalQuestions = 1;
            currentQuestionIndex = 0;
            isQuizMode = false;
            
            displaySingleQuestion();
            hideLoading();
            showToast('🇪🇸 Pregunta aleatoria en español');
            return;
        }
        
        // Intentar con API en inglés con manejo de errores
        try {
            // Esperar si hay límite de API
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            const url = `${TRIVIA_API_BASE}?amount=1`;
            console.log('Fetching random trivia from:', url);
            
            const response = await fetch(url);
            
            if (!response.ok) {
                if (response.status === 429) {
                    throw new Error('RATE_LIMIT');
                }
                throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
            }
            
            const data = await response.json();
            
            if (data.response_code !== 0 || !data.results || data.results.length === 0) {
                throw new Error('No se pudo obtener pregunta aleatoria');
            }
            
            const question = data.results[0];
            question.question = translateText(decodeHtml(question.question));
            question.correct_answer = translateText(decodeHtml(question.correct_answer));
            question.incorrect_answers = question.incorrect_answers.map(answer => translateText(decodeHtml(answer)));
            
            currentQuestions = [{
                ...question,
                user_answer: null,
                is_answered: false
            }];
            totalQuestions = 1;
            currentQuestionIndex = 0;
            isQuizMode = false;
            
            displaySingleQuestion();
            hideLoading();
            showToast('🇬🇧 Pregunta aleatoria de la API');
            
        } catch (apiError) {
            console.warn('Error con API, usando pregunta en español:', apiError.message);
            
            // Fallback automático a preguntas en español
            const randomQuestion = SPANISH_QUESTIONS[Math.floor(Math.random() * SPANISH_QUESTIONS.length)];
            
            currentQuestions = [{
                ...randomQuestion,
                user_answer: null,
                is_answered: false
            }];
            totalQuestions = 1;
            currentQuestionIndex = 0;
            isQuizMode = false;
            
            // Cambiar automáticamente a modo español
            if (!useSpanishQuestions) {
                useSpanishQuestions = true;
                toggleLanguage();
            }
            
            displaySingleQuestion();
            hideLoading();
            showToast('⚠️ Error de API - Usando pregunta en español como respaldo');
        }
        
    } catch (error) {
        console.error('Error generating random trivia:', error);
        hideLoading();
        showError('Error al generar pregunta aleatoria: ' + error.message);
    }
}

// Decodificar entidades HTML
function decodeHtml(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
}

// Mostrar quiz completo con grid de cards
function displayQuiz() {
    elements.resultsCount.textContent = `Quiz de ${totalQuestions} preguntas`;
    elements.resultsInfo.classList.remove('hidden');
    elements.quizNavigation.classList.remove('hidden');
    elements.quickActions.classList.add('hidden');
    
    displayAllQuestions();
    updateQuizNavigation();
}

// Mostrar todas las preguntas en un grid
function displayAllQuestions() {
    elements.charactersGrid.innerHTML = '';
    
    currentQuestions.forEach((question, index) => {
        const questionCard = createQuestionCard(question, index);
        elements.charactersGrid.appendChild(questionCard);
    });
    
    // Añadir botón de progreso si hay preguntas respondidas
    const answeredCount = currentQuestions.filter(q => q.is_answered).length;
    if (answeredCount > 0) {
        addProgressCard(answeredCount);
    }
}

// Crear card de progreso con iconos Font Awesome
function addProgressCard(answeredCount) {
    const progressCard = document.createElement('div');
    progressCard.className = 'character-card progress-card';
    
    const percentage = Math.round((answeredCount / totalQuestions) * 100);
    const correctAnswers = currentQuestions.filter(q => q.is_answered && q.user_answer === q.correct_answer).length;
    const incorrectAnswers = answeredCount - correctAnswers;
    
    // Icono de progreso según el porcentaje
    let progressIcon = 'fa-chart-line';
    let progressColor = '#00ffff';
    
    if (percentage >= 80) {
        progressIcon = 'fa-trophy';
        progressColor = '#FFD700';
    } else if (percentage >= 60) {
        progressIcon = 'fa-star';
        progressColor = '#4CAF50';
    } else if (percentage >= 40) {
        progressIcon = 'fa-thumbs-up';
        progressColor = '#FF9800';
    } else if (percentage > 0) {
        progressIcon = 'fa-chart-bar';
        progressColor = '#f44336';
    }
    
    progressCard.innerHTML = `
        <div class="progress-header">
            <div class="progress-icon" style="color: ${progressColor}">
                <i class="fas ${progressIcon}"></i>
            </div>
            <h3>
                <i class="fas fa-analytics"></i>
                Progreso del Quiz
            </h3>
        </div>
        <div class="progress-content">
            <div class="progress-bar-container">
                <div class="progress-bar" style="width: ${percentage}%">
                    <div class="progress-shine"></div>
                </div>
                <div class="progress-text">
                    <i class="fas fa-percentage"></i>
                    ${percentage}%
                </div>
            </div>
            <div class="progress-stats">
                <div class="stat-item">
                    <div class="stat-icon">
                        <i class="fas fa-check-circle" style="color: #4CAF50"></i>
                    </div>
                    <span class="stat-number">${answeredCount}</span>
                    <span class="stat-label">
                        <i class="fas fa-clipboard-check"></i>
                        Respondidas
                    </span>
                </div>
                <div class="stat-item">
                    <div class="stat-icon">
                        <i class="fas fa-star" style="color: #FFD700"></i>
                    </div>
                    <span class="stat-number">${correctAnswers}</span>
                    <span class="stat-label">
                        <i class="fas fa-medal"></i>
                        Correctas
                    </span>
                </div>
                <div class="stat-item">
                    <div class="stat-icon">
                        <i class="fas fa-times-circle" style="color: #f44336"></i>
                    </div>
                    <span class="stat-number">${incorrectAnswers}</span>
                    <span class="stat-label">
                        <i class="fas fa-exclamation-triangle"></i>
                        Incorrectas
                    </span>
                </div>
                <div class="stat-item">
                    <div class="stat-icon">
                        <i class="fas fa-clock" style="color: #FF9800"></i>
                    </div>
                    <span class="stat-number">${totalQuestions - answeredCount}</span>
                    <span class="stat-label">
                        <i class="fas fa-hourglass-half"></i>
                        Pendientes
                    </span>
                </div>
            </div>
            ${answeredCount === totalQuestions ? `
                <button class="finish-quiz-btn" onclick="finishQuiz()">
                    <i class="fas fa-flag-checkered"></i>
                    Finalizar Quiz
                    <i class="fas fa-arrow-right"></i>
                </button>
            ` : `
                <div class="progress-message">
                    <i class="fas fa-info-circle"></i>
                    Responde ${totalQuestions - answeredCount} pregunta${totalQuestions - answeredCount !== 1 ? 's' : ''} más para completar el quiz
                </div>
            `}
        </div>
    `;
    
    progressCard.style.background = 'linear-gradient(135deg, rgba(0, 255, 255, 0.15), rgba(255, 0, 255, 0.15))';
    progressCard.style.borderColor = progressColor;
    
    elements.charactersGrid.appendChild(progressCard);
}

// Mostrar pregunta individual
function displaySingleQuestion() {
    elements.resultsCount.textContent = 'Pregunta aleatoria';
    elements.resultsInfo.classList.remove('hidden');
    elements.quizNavigation.classList.add('hidden');
    elements.quickActions.classList.add('hidden');
    
    elements.charactersGrid.innerHTML = '';
    const questionCard = createQuestionCard(currentQuestions[0], 0);
    elements.charactersGrid.appendChild(questionCard);
}

// Mostrar pregunta actual en el quiz
function displayCurrentQuestion() {
    elements.charactersGrid.innerHTML = '';
    const questionCard = createQuestionCard(currentQuestions[currentQuestionIndex], currentQuestionIndex);
    elements.charactersGrid.appendChild(questionCard);
}

// Crear tarjeta de pregunta mejorada con iconos Font Awesome
function createQuestionCard(question, index) {
    const card = document.createElement('div');
    card.className = `character-card question-card ${question.is_answered ? 'answered' : 'pending'}`;
    
    // Colores e iconos por dificultad
    const difficultyData = {
        easy: { color: '#4CAF50', icon: 'fa-smile', label: 'Fácil' },
        medium: { color: '#FF9800', icon: 'fa-meh', label: 'Medio' },
        hard: { color: '#F44336', icon: 'fa-frown', label: 'Difícil' }
    };
    
    const difficulty = difficultyData[question.difficulty] || { color: '#68A090', icon: 'fa-question', label: 'Normal' };
    
    // Iconos por categoría
    const categoryIcons = {
        'Historia': 'fa-landmark',
        'History': 'fa-landmark',
        'Ciencia': 'fa-flask',
        'Science': 'fa-flask',
        'Ciencia y Naturaleza': 'fa-leaf',
        'Science & Nature': 'fa-leaf',
        'Deportes': 'fa-football',
        'Sports': 'fa-football',
        'Geografía': 'fa-globe',
        'Geography': 'fa-globe',
        'Arte': 'fa-palette',
        'Art': 'fa-palette',
        'Literatura': 'fa-book',
        'Books': 'fa-book',
        'Entretenimiento': 'fa-film',
        'Entertainment': 'fa-film',
        'Películas': 'fa-video',
        'Film': 'fa-video',
        'Música': 'fa-music',
        'Music': 'fa-music',
        'Matemáticas': 'fa-calculator',
        'Mathematics': 'fa-calculator',
        'Informática': 'fa-computer',
        'Computers': 'fa-computer',
        'Cultura General': 'fa-brain',
        'General Knowledge': 'fa-brain'
    };
    
    const categoryIcon = categoryIcons[question.category] || 'fa-question-circle';
    
    // Estado de la pregunta con iconos
    let statusData = { icon: 'fa-clock', class: 'pending', color: '#FFC107' };
    if (question.is_answered) {
        if (question.user_answer === question.correct_answer) {
            statusData = { icon: 'fa-check-circle', class: 'correct', color: '#4CAF50' };
        } else {
            statusData = { icon: 'fa-times-circle', class: 'incorrect', color: '#F44336' };
        }
    }
    
    // Icono del tipo de pregunta
    const typeIcon = question.type === 'multiple' ? 'fa-list-ul' : 'fa-check-double';
    const typeLabel = question.type === 'multiple' ? 'Opción múltiple' : 'Verdadero/Falso';
    
    card.innerHTML = `
        <div class="question-header">
            <div class="question-number">
                <i class="fas fa-hashtag"></i> ${index + 1}
            </div>
            <div class="question-status ${statusData.class}" style="color: ${statusData.color}">
                <i class="fas ${statusData.icon}"></i>
            </div>
        </div>
        <div class="question-meta">
            <div class="question-difficulty" style="background-color: ${difficulty.color}">
                <i class="fas ${difficulty.icon}"></i> ${difficulty.label}
            </div>
            <div class="question-category">
                <i class="fas ${categoryIcon}"></i> ${question.category}
            </div>
        </div>
        <div class="question-content">
            <h3 class="question-title">
                <i class="fas fa-question-circle question-icon"></i>
                ${question.question}
            </h3>
            <div class="question-type">
                <i class="fas ${typeIcon}"></i>
                ${typeLabel}
            </div>
            
            ${!question.is_answered ? `
                <div class="answers-container">
                    ${[...question.incorrect_answers, question.correct_answer]
                        .sort(() => Math.random() - 0.5)
                        .map((answer, answerIndex) => {
                            const letterIcons = ['fa-a', 'fa-b', 'fa-c', 'fa-d'];
                            const letterIcon = letterIcons[answerIndex] || 'fa-circle';
                            return `
                                <button class="answer-btn" data-answer="${answer}" onclick="selectAnswer('${answer.replace(/'/g, "\\'")}', ${index})">
                                    <span class="answer-letter">
                                        <i class="fas ${letterIcon}"></i>
                                    </span>
                                    <span class="answer-text">${answer}</span>
                                    <i class="fas fa-arrow-right answer-arrow"></i>
                                </button>
                            `;
                        }).join('')}
                </div>
            ` : `
                <div class="answer-result">
                    <div class="user-answer ${question.user_answer === question.correct_answer ? 'correct' : 'incorrect'}">
                        <i class="fas ${question.user_answer === question.correct_answer ? 'fa-check' : 'fa-times'}"></i>
                        <strong>Tu respuesta:</strong> ${question.user_answer}
                    </div>
                    <div class="correct-answer">
                        <i class="fas fa-star"></i>
                        <strong>Respuesta correcta:</strong> ${question.correct_answer}
                    </div>
                    ${question.user_answer !== question.correct_answer ? `
                        <div class="explanation">
                            <i class="fas fa-lightbulb"></i>
                            ${question.user_answer === question.correct_answer ? '¡Perfecto!' : 'Sigue intentando, ¡la práctica hace al maestro!'}
                        </div>
                    ` : `
                        <div class="celebration">
                            <i class="fas fa-trophy"></i>
                            ¡Excelente respuesta!
                        </div>
                    `}
                </div>
            `}
        </div>
        <div class="card-footer">
            <button class="detail-btn" onclick="showQuestionDetails(this, ${index})" title="Ver detalles">
                <i class="fas fa-info-circle"></i>
            </button>
            <div class="difficulty-indicator" style="background-color: ${difficulty.color}">
                <i class="fas ${difficulty.icon}"></i>
            </div>
        </div>
    `;
    
    // Aplicar estilos según el estado
    if (question.is_answered) {
        if (question.user_answer === question.correct_answer) {
            card.style.borderColor = '#4CAF50';
            card.style.background = 'linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(76, 175, 80, 0.05))';
        } else {
            card.style.borderColor = '#F44336';
            card.style.background = 'linear-gradient(135deg, rgba(244, 67, 54, 0.1), rgba(244, 67, 54, 0.05))';
        }
    } else {
        card.style.borderColor = difficulty.color;
        card.style.background = 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1))';
    }
    
    return card;
}

// Mezclar array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Seleccionar respuesta mejorada con iconos
function selectAnswer(answer, questionIndex) {
    const question = currentQuestions[questionIndex];
    
    if (question.is_answered) {
        return; // Ya fue respondida
    }
    
    question.user_answer = answer;
    question.is_answered = true;
    
    if (answer === question.correct_answer) {
        score++;
        showToast('✅ ¡Correcto! +1 punto', 'success');
    } else {
        showToast('❌ Incorrecto. La respuesta era: ' + question.correct_answer, 'error');
    }
    
    questionsAnswered++;
    updateCounters();
    
    // Actualizar todas las cards para mostrar el progreso
    displayAllQuestions();
    
    // Si es modo quiz, verificar si está completo
    if (isQuizMode) {
        updateQuizNavigation();
        
        // Verificar si todas las preguntas están respondidas
        const allAnswered = currentQuestions.every(q => q.is_answered);
        if (allAnswered) {
            setTimeout(() => {
                showToast('🎉 ¡Quiz completado! Revisa tus respuestas y finaliza cuando estés listo.', 'info');
            }, 1000);
        }
    } else {
        // Mostrar acciones para pregunta individual
        elements.quickActions.classList.remove('hidden');
    }
}

// Navegación del quiz simplificada (ya no necesaria con grid)
function navigateQuestion(direction) {
    // Con el nuevo diseño de grid, la navegación es visual
    // Scroll automático a la card de progreso si existe
    const progressCard = document.querySelector('.progress-card');
    if (progressCard) {
        progressCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Actualizar navegación del quiz
function updateQuizNavigation() {
    const answeredCount = currentQuestions.filter(q => q.is_answered).length;
    elements.questionProgress.textContent = `${answeredCount} / ${totalQuestions} respondidas`;
    
    // Ocultar botones de navegación individual ya que ahora tenemos grid
    elements.prevQuestionBtn.style.display = 'none';
    elements.nextQuestionBtn.style.display = 'none';
    
    // Mostrar botón finalizar si todas las preguntas están respondidas
    const allAnswered = currentQuestions.every(q => q.is_answered);
    if (allAnswered) {
        elements.finishQuizBtn.classList.remove('hidden');
        elements.finishQuizBtn.textContent = '🏆 Ver Resultados Finales';
    } else {
        elements.finishQuizBtn.classList.add('hidden');
    }
}

// Finalizar quiz
function finishQuiz() {
    elements.quizNavigation.classList.add('hidden');
    elements.quickActions.classList.remove('hidden');
    
    // Mostrar resumen
    showQuizSummary();
}

// Mostrar resumen del quiz
function showQuizSummary() {
    const correctAnswers = currentQuestions.filter(q => q.user_answer === q.correct_answer).length;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    elements.charactersGrid.innerHTML = `
        <div class="quiz-summary" style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
            <div class="summary-icon" style="font-size: 4rem; margin-bottom: 1rem;">
                ${percentage >= 80 ? '🏆' : percentage >= 60 ? '👏' : percentage >= 40 ? '👍' : '📚'}
            </div>
            <h2 style="color: var(--primary-cyan); margin-bottom: 1rem;">¡Quiz Completado!</h2>
            <div class="score-display" style="font-size: 2rem; color: var(--accent-yellow); margin-bottom: 1rem;">
                ${correctAnswers} / ${totalQuestions} (${percentage}%)
            </div>
            <p style="color: var(--text-light); margin-bottom: 1.5rem;">
                ${percentage >= 80 ? '¡Excelente trabajo! Eres un maestro de la trivia.' :
                  percentage >= 60 ? '¡Muy bien! Tienes buenos conocimientos.' :
                  percentage >= 40 ? 'No está mal, pero puedes mejorar.' :
                  'Sigue practicando, ¡la práctica hace al maestro!'}
            </p>
            <div style="background: rgba(0, 255, 255, 0.1); padding: 1rem; border-radius: 10px; border: 1px solid rgba(0, 255, 255, 0.3);">
                <h4 style="color: var(--primary-magenta); margin-bottom: 0.5rem;">Estadísticas del Quiz</h4>
                <p style="color: var(--text-muted);">Respuestas correctas: ${correctAnswers}</p>
                <p style="color: var(--text-muted);">Respuestas incorrectas: ${totalQuestions - correctAnswers}</p>
                <p style="color: var(--text-muted);">Porcentaje de acierto: ${percentage}%</p>
            </div>
        </div>
    `;
}

// Mostrar detalles de pregunta en modal
function showQuestionDetails(question, index) {
    const difficultyColors = {
        easy: '#4CAF50',
        medium: '#FF9800',
        hard: '#F44336'
    };
    
    const difficultyColor = difficultyColors[question.difficulty] || '#68A090';
    
    elements.modalBody.innerHTML = `
        <div class="modal-question-header">
            <div class="modal-question-info">
                <h2>${question.question}</h2>
                <div class="question-meta">
                    <span class="difficulty-badge" style="background-color: ${difficultyColor}">
                        ${question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
                    </span>
                    <span class="category-badge">${question.category}</span>
                    <span class="type-badge">${question.type === 'multiple' ? 'Opción múltiple' : 'Verdadero/Falso'}</span>
                </div>
            </div>
        </div>
        
        <div class="modal-question-details">
            <div class="answers-section">
                <h3>Respuestas</h3>
                <div class="answers-list">
                    <div class="answer-item correct">
                        <span class="answer-icon">✅</span>
                        <span class="answer-text"><strong>Correcta:</strong> ${question.correct_answer}</span>
                    </div>
                    ${question.incorrect_answers.map(answer => `
                        <div class="answer-item incorrect">
                            <span class="answer-icon">❌</span>
                            <span class="answer-text"><strong>Incorrecta:</strong> ${answer}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            ${question.is_answered ? `
                <div class="user-answer-section">
                    <h3>Tu Respuesta</h3>
                    <div class="user-answer ${question.user_answer === question.correct_answer ? 'correct' : 'incorrect'}">
                        <span class="answer-icon">${question.user_answer === question.correct_answer ? '✅' : '❌'}</span>
                        <span class="answer-text">${question.user_answer}</span>
                    </div>
                </div>
            ` : ''}
        </div>
    `;
    
    elements.modal.classList.remove('hidden');
}

// Funciones de acción
function saveResults() {
    const results = {
        score: score,
        total: totalQuestions,
        percentage: Math.round((score / totalQuestions) * 100),
        date: new Date().toISOString(),
        questions: currentQuestions
    };
    
    const savedResults = JSON.parse(localStorage.getItem('triviaResults')) || [];
    savedResults.push(results);
    localStorage.setItem('triviaResults', JSON.stringify(savedResults));
    
    showToast('💾 Resultados guardados exitosamente');
}

function shareResults() {
    const percentage = Math.round((score / totalQuestions) * 100);
    const text = `¡Completé un quiz de trivia con ${score}/${totalQuestions} respuestas correctas (${percentage}%)! 🧠✨`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Mis resultados de Trivia',
            text: text,
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(text).then(() => {
            showToast('📋 Resultados copiados al portapapeles');
        });
    }
}

function startNewQuiz() {
    currentQuestions = [];
    currentQuestionIndex = 0;
    userAnswers = [];
    score = 0;
    totalQuestions = 0;
    isQuizMode = false;
    
    updateCounters();
    showWelcomeMessage();
    
    elements.resultsInfo.classList.add('hidden');
    elements.quizNavigation.classList.add('hidden');
    elements.quickActions.classList.add('hidden');
}

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    // Iconos según el tipo
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-times-circle',
        info: 'fa-info-circle',
        warning: 'fa-exclamation-triangle'
    };
    
    const icon = icons[type] || icons.info;
    
    toast.innerHTML = `
        <i class="fas ${icon}"></i>
        <span class="toast-message">${message}</span>
    `;
    
    // Estilos según el tipo
    const styles = {
        success: { bg: '#4CAF50', border: '#45a049' },
        error: { bg: '#f44336', border: '#da190b' },
        info: { bg: '#2196F3', border: '#0b7dda' },
        warning: { bg: '#ff9800', border: '#e68900' }
    };
    
    const style = styles[type] || styles.info;
    
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${style.bg};
        border: 2px solid ${style.border};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        z-index: 10000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 500;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        max-width: 350px;
        word-wrap: break-word;
    `;
    
    document.body.appendChild(toast);
    
    // Animación de entrada
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Animación de salida
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 300);
    }, 4000);
}

function closeModal() {
    elements.modal.classList.add('hidden');
}