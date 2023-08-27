import Ciencia from './assets/Ciencia.png'
import Deportes from './assets/Deportes.png'
import Filosofia from './assets/filosofía.png'
import Geografia from './assets/geografía.png'
import Historia from './assets/Historia.png'
import Literatura from './assets/Literatura.png'
import Tecnologia from './assets/tecnología.png'

export const categories = [
  {
    name: 'Ciencia',
    img: Ciencia,
    gradientColor: 'from-purple-400 via-pink-500 to-red-500'
  },
  {
    name: 'Deportes',
    img: Deportes,
    gradientColor: 'from-green-400 via-blue-500 to-purple-500'
  },
  {
    name: 'Filosofía',
    img: Filosofia,
    gradientColor: 'from-yellow-400 via-red-500 to-pink-500'
  },
  {
    name: 'Geografía',
    img: Geografia,
    gradientColor: 'from-blue-400 via-green-500 to-yellow-500'
  },
  {
    name: 'Historia',
    img: Historia,
    gradientColor: 'from-red-400 via-purple-500 to-blue-500'
  },
  {
    name: 'Literatura',
    img: Literatura,
    gradientColor: 'from-pink-400 via-yellow-500 to-green-500'
  },
  {
    name: 'Tecnología',
    img: Tecnologia,
    gradientColor: 'from-purple-400 via-blue-500 to-green-500'
  }
]

export const questions = [
  {
    id: 1,
    difficulty: 'Fácil',
    question: '¿Qué evento inició la Primera Guerra Mundial?',
    category: 'Historia',
    correctAnswer: 'El asesinato del Archiduque Franz Ferdinand de Austria',
    answers: [
      'El hundimiento del Titanic',
      'La invasión de Polonia por Alemania',
      'La Revolución Francesa',
      'El asesinato del Archiduque Franz Ferdinand de Austria'
    ]
  },
  {
    id: 2,
    difficulty: 'Fácil',
    question: '¿Quién es el autor de "Cien años de soledad"?        ',
    category: 'Literatura',
    correctAnswer: 'Gabriel García Márquez',
    answers: [
      'Julio Cortázar',
      'Gabriel García Márquez',
      'Mario Vargas Llosa',
      'Pablo Neruda'
    ]
  },
  {
    id: 3,
    difficulty: 'Fácil',
    question: '¿En qué deporte se utiliza un disco?',
    category: 'Deportes',
    correctAnswer: 'Hockey sobre hielo',
    answers: ['Hockey sobre hielo', 'Fútbol', 'Baloncesto', 'Béisbol']
  },
  {
    id: 4,
    difficulty: 'Medio',
    question: "¿Qué sustancia es conocida como la 'molécula de la vida'?",
    category: 'Ciencia',
    correctAnswer: 'El ADN',
    answers: ['La glucosa', 'La insulina', 'El ADN', 'La proteína']
  },
  {
    id: 5,
    difficulty: 'Difícil',
    question: '¿Quién es considerado el padre de la filosofía occidental?',
    category: 'Filosofía',
    correctAnswer: 'Sócrates',
    answers: ['Aristóteles', 'Platón', 'Nietzsche', 'Sócrates']
  },
  {
    id: 6,
    difficulty: 'Medio',
    question: '¿En qué año fue fundada la compañía Apple?',
    category: 'Tecnología',
    correctAnswer: '1976',
    answers: ['1984', '1976', '1991', '1967']
  },
  {
    id: 7,
    difficulty: 'Fácil',
    question: '¿Cuál es el río más largo del mundo?',
    category: 'Geografía',
    correctAnswer: 'El Río Amazonas',
    answers: [
      'El Río Nilo',
      'El Río Yangtze',
      'El Río Misisipi',
      'El Río Amazonas'
    ]
  },
  {
    id: 8,
    difficulty: 'Medio',
    question: '¿Cuál es el océano más grande del mundo?',
    category: 'Geografía',
    correctAnswer: 'El Océano Pacífico',
    answers: [
      'El Océano Pacífico',
      'El Océano Atlántico',
      'El Océano Índico',
      'El Océano Ártico'
    ]
  },
  {
    id: 9,
    difficulty: 'Difícil',
    question: '¿Cuál es la obra más famosa de William Shakespeare?',
    category: 'Literatura',
    correctAnswer: 'Hamlet',
    answers: ['Hamlet', 'Romeo y Julieta', 'Macbeth', 'El Rey Lear']
  },
  {
    id: 10,
    difficulty: 'Medio',
    question: '¿Qué es lo que se mide con la escala de Richter?',
    category: 'Ciencia',
    correctAnswer: 'La magnitud de los terremotos',
    answers: [
      'La magnitud de los terremotos',
      'La velocidad del sonido',
      'La intensidad de los huracanes',
      'La temperatura en grados Fahrenheit'
    ]
  },
  {
    id: 11,
    difficulty: 'Fácil',
    question: '¿Qué país ganó el primer Mundial de Fútbol?',
    category: 'Deportes',
    correctAnswer: 'Uruguay',
    answers: ['Brasil', 'Argentina', 'Uruguay', 'Alemania']
  },
  {
    id: 12,
    difficulty: 'Medio',
    question: '¿Qué es el efecto invernadero?',
    category: 'Ciencia',
    correctAnswer: 'Un fenómeno atmosférico que retiene el calor en la Tierra',
    answers: [
      'Un tipo de casa de vidrio para plantas',
      'Un proceso químico para conservar alimentos',
      'Un tipo de sistema de calefacción para edificios',
      'Un fenómeno atmosférico que retiene el calor en la Tierra'
    ]
  },
  {
    id: 13,
    difficulty: 'Medio',
    question:
      '¿En qué año se celebraron los primeros Juegos Olímpicos modernos?',
    category: 'Deportes',
    correctAnswer: '1896',
    answers: ['1900', '1924', '1936', '1896']
  },
  {
    id: 14,
    difficulty: 'Fácil',
    question: '¿Cuál es el planeta más grande del sistema solar?',
    category: 'Ciencia',
    correctAnswer: 'Júpiter',
    answers: ['Saturno', 'Neptuno', 'Urano', 'Júpiter']
  },
  {
    id: 15,
    difficulty: 'Fácil',
    question: "¿Quién escribió la obra 'Don Quijote de la Mancha'?",
    category: 'Literatura',
    correctAnswer: 'Miguel de Cervantes',
    answers: [
      'Federico García Lorca',
      'Miguel de Cervantes',
      'Gabriel García Márquez',
      'Pablo Neruda'
    ]
  },
  {
    id: 16,
    difficulty: 'Medio',
    question: '¿Cuál es el elemento químico más abundante en la Tierra?',
    category: 'Ciencia',
    correctAnswer: 'Oxígeno',
    answers: ['Oxígeno', 'Nitrógeno', 'Hierro', 'Silicio']
  },
  {
    id: 17,
    difficulty: 'Medio',
    question: '¿Cuál es el país más poblado del mundo?',
    category: 'Geografía',
    correctAnswer: 'China',
    answers: ['India', 'Estados Unidos', 'China', 'Brasil']
  },
  {
    id: 18,
    difficulty: 'Medio',
    question: '¿Quién es considerado el padre de la filosofía occidental?',
    category: 'Filosofía',
    correctAnswer: 'Sócrates',
    answers: ['Sócrates', 'Platón', 'Aristóteles', 'Descartes']
  },
  {
    id: 19,
    difficulty: 'Difícil',
    question: '¿Qué científico propuso la teoría del Big Bang?',
    category: 'Ciencia',
    correctAnswer: 'Georges Lemaître',
    answers: [
      'Albert Einstein',
      'Stephen Hawking',
      'Isaac Newton',
      'Georges Lemaître'
    ]
  },
  {
    id: 20,
    difficulty: 'Fácil',
    question: '¿Quién es el autor de la novela "El viejo y el mar"?',
    category: 'Literatura',
    correctAnswer: 'Ernest Hemingway',
    answers: [
      'William Shakespeare',
      'J.K. Rowling',
      'Ernest Hemingway',
      'F. Scott Fitzgerald'
    ]
  },
  {
    id: 21,
    difficulty: 'Fácil',
    question: '¿Cuál es el órgano más grande del cuerpo humano?',
    category: 'Ciencia',
    correctAnswer: 'La piel',
    answers: ['El hígado', 'La piel', 'El corazón', 'Los pulmones']
  },
  {
    id: 22,
    difficulty: 'Medio',
    question: '¿Quién es el creador del sistema operativo Linux?',
    category: 'Tecnología',
    correctAnswer: 'Linus Torvalds',
    answers: ['Linus Torvalds', 'Steve Jobs', 'Bill Gates', 'Mark Zuckerberg']
  },
  {
    id: 23,
    difficulty: 'Medio',
    question: '¿En qué año terminó la Segunda Guerra Mundial?',
    category: 'Historia',
    correctAnswer: '1945',
    answers: ['1939', '1941', '1943', '1945']
  },
  {
    id: 24,
    difficulty: 'Fácil',
    question: '¿Cuál es el planeta más cercano al Sol?',
    category: 'Ciencia',
    correctAnswer: 'Mercurio',
    answers: ['Venus', 'Marte', 'Mercurio', 'Júpiter']
  },
  {
    id: 25,
    difficulty: 'Medio',
    question:
      "¿Qué escritor es conocido por haber escrito 'Cien años de soledad'?",
    category: 'Literatura',
    correctAnswer: 'Gabriel García Márquez',
    answers: [
      'Jorge Luis Borges',
      'Pablo Neruda',
      'Gabriel García Márquez',
      'Julio Cortázar'
    ]
  },
  {
    id: 26,
    difficulty: 'Difícil',
    question: '¿Qué país es el más grande en términos de superficie terrestre?',
    category: 'Geografía',
    correctAnswer: 'Rusia',
    answers: ['Rusia', 'Estados Unidos', 'China', 'Australia']
  },
  {
    id: 27,
    difficulty: 'Medio',
    question: '¿Cuál es la capital de Canadá?',
    category: 'Geografía',
    correctAnswer: 'Ottawa',
    answers: ['Toronto', 'Montreal', 'Vancouver', 'Ottawa']
  },
  {
    id: 28,
    difficulty: 'Fácil',
    question: '¿Qué elemento químico tiene el símbolo H?',
    category: 'Ciencia',
    correctAnswer: 'Hidrógeno',
    answers: ['Helio', 'Hierro', 'Hidrógeno', 'Hormigón']
  },
  {
    id: 29,
    difficulty: 'Medio',
    question:
      '¿Qué jugador de fútbol ha ganado más Balones de Oro en la historia?',
    category: 'Deportes',
    correctAnswer: 'Lionel Messi',
    answers: [
      'Cristiano Ronaldo',
      'Lionel Messi',
      'Johan Cruyff',
      'Diego Maradona'
    ]
  },
  {
    id: 30,
    difficulty: 'Fácil',
    question: '¿En qué año ocurrió la Revolución Francesa?',
    category: 'Historia',
    correctAnswer: '1789',
    answers: ['1848', '1789', '1917', '1492']
  },
  // -------------------
  {
    id: 31,
    difficulty: 'Fácil',
    category: 'Tecnología',
    question: '¿Qué significa la sigla HTML?',
    correctAnswer: 'HyperText Markup Language',
    answers: [
      'HyperText Markup Language',
      'Hyperlinks and Text Markup Language',
      'Home Tool Markup Language',
      'Hyperlinking Text Markup Language'
    ]
  },
  {
    id: 32,
    difficulty: 'Fácil',
    category: 'Tecnología',
    question: '¿Cuál es el navegador web más utilizado en el mundo?',
    correctAnswer: 'Google Chrome',
    answers: ['Safari', 'Firefox', 'Internet Explorer', 'Google Chrome']
  },
  {
    id: 33,
    difficulty: 'Fácil',
    category: 'Tecnología',
    question:
      '¿Qué lenguaje de programación es más utilizado para el desarrollo web?',
    correctAnswer: 'JavaScript',
    answers: ['Python', 'Java', 'C++', 'JavaScript']
  },
  {
    id: 34,
    difficulty: 'Medio',
    category: 'Tecnología',
    question: '¿Qué es un servidor web?',
    correctAnswer: 'Un programa que recibe y procesa solicitudes HTTP',
    answers: [
      'Un programa que recibe y procesa solicitudes HTTP',
      'Un programa que envía correos electrónicos',
      'Un programa que protege la privacidad de los usuarios en línea',
      'Un programa que realiza operaciones matemáticas complejas'
    ]
  },
  {
    id: 35,
    difficulty: 'Medio',
    category: 'Tecnología',
    question: '¿Qué es un ataque de phishing?',
    correctAnswer:
      'Un intento de obtener información confidencial a través de un correo electrónico falso',
    answers: [
      'Un virus que daña los archivos del ordenador',
      'Un tipo de ataque DDoS',
      'Un intento de obtener información confidencial a través de un correo electrónico falso',
      'Un intento de secuestrar el tráfico de internet'
    ]
  },
  {
    id: 36,
    difficulty: 'Medio',
    category: 'Tecnología',
    question: '¿Qué es un archivo CSV?',
    correctAnswer: 'Un archivo de texto con valores separados por comas',
    answers: [
      'Un archivo de audio comprimido',
      'Un archivo de texto con valores separados por comas',
      'Un archivo de imagen en formato vectorial',
      'Un archivo de vídeo de alta definición'
    ]
  },
  {
    id: 37,
    difficulty: 'Difícil',
    category: 'Tecnología',
    question: '¿Qué es un algoritmo de cifrado asimétrico?',
    correctAnswer: 'Un método de cifrado que utiliza dos claves diferentes',
    answers: [
      'Un método de cifrado que utiliza la misma clave para cifrar y descifrar',
      'Un método de cifrado que no utiliza claves',
      'Un método de cifrado que solo se utiliza en aplicaciones militares',
      'Un método de cifrado que utiliza dos claves diferentes'
    ]
  },
  {
    id: 38,
    difficulty: 'Difícil',
    category: 'Tecnología',
    question: '¿Qué es una red privada virtual (VPN)?',
    correctAnswer: 'Una conexión segura a una red privada a través de internet',
    answers: [
      'Una red de computadoras en una organización',
      'Una red de computadoras conectadas a internet',
      'Una red de computadoras que solo utiliza tecnología inalámbrica',
      'Una conexión segura a una red privada a través de internet'
    ]
  },
  {
    id: 39,
    difficulty: 'Difícil',
    question: '¿En qué año se produjo la Guerra de los Cien Años?',
    category: 'Historia',
    correctAnswer: '1337',
    answers: ['1066', '1337', '1415', '1642']
  },
  {
    id: 40,
    difficulty: 'Fácil',
    question: '¿En qué año se produjo el ataque a Pearl Harbor?',
    category: 'Historia',
    correctAnswer: '1941',
    answers: ['1941', '1939', '1942', '1945']
  },
  {
    id: 41,
    difficulty: 'Medio',
    question: '¿Qué tratado dio fin a la Primera Guerra Mundial?',
    category: 'Historia',
    correctAnswer: 'Tratado de Versalles',
    answers: [
      'Tratado de Versalles',
      'Tratado de Tordesillas',
      'Tratado de Westfalia',
      'Tratado de Nankín'
    ]
  },
  {
    id: 42,
    difficulty: 'Difícil',
    question: '¿Quién fue el último emperador de la Dinastía Qing en China?',
    category: 'Historia',
    correctAnswer: 'Puyi',
    answers: ['Puyi', 'Hongwu', 'Wuzong', 'Kangxi']
  },
  {
    id: 43,
    difficulty: 'Fácil',
    question:
      '¿Cuál fue el nombre de la primera expedición de Cristóbal Colón?',
    category: 'Historia',
    correctAnswer: 'La Santa María',
    answers: ['La Pinta', 'La Niña', 'La Santa María', 'La Santísima Trinidad']
  },
  {
    id: 44,
    difficulty: 'Medio',
    question:
      '¿Cuál fue el primer país en enviar un objeto hecho por el hombre a la luna?',
    category: 'Historia',
    correctAnswer: 'Estados Unidos',
    answers: ['Unión Soviética', 'Estados Unidos', 'China', 'Japón']
  },
  {
    id: 45,
    difficulty: 'Difícil',
    question:
      '¿Cuál fue la primera ciudad en el mundo en tener una población de más de un millón de habitantes?',
    category: 'Historia',
    correctAnswer: 'Roma',
    answers: ['Atenas', 'Babilonia', 'Nínive', 'Roma']
  },
  {
    id: 46,
    difficulty: 'Fácil',
    question: '¿Quién fue el primer presidente de los Estados Unidos?',
    category: 'Historia',
    correctAnswer: 'George Washington',
    answers: [
      'Thomas Jefferson',
      'Abraham Lincoln',
      'George Washington',
      'Franklin D. Roosevelt'
    ]
  },
  {
    id: 47,
    difficulty: 'Medio',
    question: '¿Cuál fue la primera dinastía en gobernar en China?',
    category: 'Historia',
    correctAnswer: 'Xia',
    answers: ['Han', 'Xia', 'Tang', 'Song']
  },
  {
    id: 48,
    difficulty: 'Fácil',
    question: '¿Quién escribió la obra "Don Quijote de la Mancha"?',
    category: 'Literatura',
    correctAnswer: 'Miguel de Cervantes',
    answers: [
      'Miguel de Cervantes',
      'Gabriel García Márquez',
      'Jorge Luis Borges',
      'Pablo Neruda'
    ]
  },
  {
    id: 49,
    difficulty: 'Medio',
    question:
      '¿Cuál de las siguientes novelas es escrita por Gabriel García Márquez?',
    category: 'Literatura',
    correctAnswer: 'Cien años de soledad',
    answers: [
      'Rayuela',
      'La ciudad y los perros',
      'La casa de los espíritus',
      'Cien años de soledad'
    ]
  },
  {
    id: 50,
    difficulty: 'Difícil',
    question: '¿Quién escribió "La metamorfosis"?',
    category: 'Literatura',
    correctAnswer: 'Franz Kafka',
    answers: [
      'Virginia Woolf',
      'James Joyce',
      'F. Scott Fitzgerald',
      'Franz Kafka'
    ]
  },
  {
    id: 51,
    difficulty: 'Fácil',
    question: '¿Quién escribió "El retrato de Dorian Gray"?',
    category: 'Literatura',
    correctAnswer: 'Oscar Wilde',
    answers: [
      'Edgar Allan Poe',
      'Emily Bronte',
      'Oscar Wilde',
      'Charles Dickens'
    ]
  },
  {
    id: 52,
    difficulty: 'Medio',
    question:
      '¿Cuál de las siguientes obras no fue escrita por William Shakespeare?',
    category: 'Literatura',
    correctAnswer: 'Moby Dick',
    answers: ['Hamlet', 'Moby Dick', 'Macbeth', 'Otelo']
  },
  {
    id: 53,
    difficulty: 'Difícil',
    question:
      '¿Cuál de las siguientes obras de José Saramago recibió el Premio Nobel de Literatura?',
    category: 'Literatura',
    correctAnswer: 'Ensayo sobre la ceguera',
    answers: [
      'Ensayo sobre la ceguera',
      'La caverna',
      'El evangelio según Jesucristo',
      'Las intermitencias de la muerte'
    ]
  },
  {
    id: 54,
    difficulty: 'Fácil',
    question: '¿Quién escribió la novela "El guardián entre el centeno"?',
    category: 'Literatura',
    correctAnswer: 'J.D. Salinger',
    answers: [
      'J.D. Salinger',
      'F. Scott Fitzgerald',
      'Ernest Hemingway',
      'Tennessee Williams'
    ]
  },
  {
    id: 55,
    difficulty: 'Difícil',
    question: '¿Cuál es el país más grande de África?',
    category: 'Geografía',
    correctAnswer: 'Argelia',
    answers: ['Sudán', 'Libia', 'Argelia', 'República Democrática del Congo']
  },
  {
    id: 56,
    difficulty: 'Fácil',
    question: '¿Cuál es el país más grande del mundo?',
    category: 'Geografía',
    correctAnswer: 'Rusia',
    answers: ['China', 'Rusia', 'Estados Unidos', 'Canadá']
  },
  {
    id: 57,
    difficulty: 'Medio',
    question: '¿En qué continente se encuentra el lago Baikal?',
    category: 'Geografía',
    correctAnswer: 'Asia',
    answers: ['Europa', 'Asia', 'África', 'América del Sur']
  },
  {
    id: 58,
    difficulty: 'Medio',
    question: '¿Cuál es el país más poblado del mundo?',
    category: 'Geografía',
    correctAnswer: 'China',
    answers: ['China', 'India', 'Estados Unidos', 'Indonesia']
  },
  {
    id: 59,
    difficulty: 'Difícil',
    question: '¿Cuál es la montaña más alta del mundo?',
    category: 'Geografía',
    correctAnswer: 'El Monte Everest',
    answers: ['El K2', 'El Mont Blanc', 'El Aconcagua', 'El Monte Everest']
  },
  {
    id: 60,
    difficulty: 'Difícil',
    question: '¿Cuál es el país más pequeño del mundo?',
    category: 'Geografía',
    correctAnswer: 'El Vaticano',
    answers: ['Mónaco', 'Nauru', 'El Vaticano', 'Tuvalu']
  },
  {
    id: 61,
    difficulty: 'Medio',
    question: '¿Cuál es el país más extenso de África?',
    category: 'Geografía',
    correctAnswer: 'Argelia',
    answers: ['Nigeria', 'Egipto', 'Argelia', 'Sudáfrica']
  },
  {
    id: 62,
    difficulty: 'Fácil',
    question: '¿Qué país ganó la Copa Mundial de la FIFA en 2018?',
    category: 'Deportes',
    correctAnswer: 'Francia',
    answers: ['Francia', 'Alemania', 'Brasil', 'Argentina']
  },
  {
    id: 63,
    difficulty: 'Fácil',
    question: '¿Qué deporte se juega en Wimbledon?',
    category: 'Deportes',
    correctAnswer: 'Tenis',
    answers: ['Golf', 'Fútbol', 'Rugby', 'Tenis']
  },
  {
    id: 64,
    difficulty: 'Medio',
    question: '¿Cuántos puntos vale un touchdown en el fútbol americano?',
    category: 'Deportes',
    correctAnswer: '6',
    answers: ['4', '6', '7', '5']
  },
  {
    id: 65,
    difficulty: 'Medio',
    question:
      '¿Cuál es el jugador de baloncesto con más anillos de campeonato en la NBA?',
    category: 'Deportes',
    correctAnswer: 'Bill Russell',
    answers: [
      'Bill Russell',
      'Michael Jordan',
      'Kareem Abdul-Jabbar',
      'LeBron James'
    ]
  },
  {
    id: 66,
    difficulty: 'Medio',
    question: '¿Cuál es el país de origen del futbolista Lionel Messi?',
    category: 'Deportes',
    correctAnswer: 'Argentina',
    answers: ['Brasil', 'España', 'Argentina', 'Portugal']
  },
  {
    id: 67,
    difficulty: 'Difícil',
    question: '¿En qué año se celebraron los Juegos Olímpicos de Beijing?',
    category: 'Deportes',
    correctAnswer: '2008',
    answers: ['2012', '2004', '2008', '2016']
  },
  {
    id: 68,
    difficulty: 'Difícil',
    question:
      '¿Quién es el máximo goleador en la historia de la Liga Española?',
    category: 'Deportes',
    correctAnswer: 'Lionel Messi',
    answers: [
      'Lionel Messi',
      'Cristiano Ronaldo',
      'Telmo Zarra',
      'Hugo Sánchez'
    ]
  },
  {
    id: 69,
    difficulty: 'Difícil',
    question: '¿En qué deporte se utiliza el término "smash"?',
    category: 'Deportes',
    correctAnswer: 'Bádminton',
    answers: ['Voleibol', 'Tenis', 'Squash', 'Bádminton']
  },
  {
    id: 70,
    category: 'Filosofía',
    difficulty: 'Fácil',
    question: '¿Cuál es la obra más conocida de Platón?',
    correctAnswer: 'La República',
    answers: ['El Banquete', 'La República', 'Timeo', 'Fedón']
  },
  {
    id: 71,
    category: 'Filosofía',
    difficulty: 'Medio',
    question: '¿Cuál es el concepto central de la filosofía de Descartes?',
    correctAnswer: 'El cogito ergo sum',
    answers: [
      'El empirismo',
      'El materialismo',
      'El cogito ergo sum',
      'La fenomenología'
    ]
  },
  {
    id: 72,
    category: 'Filosofía',
    difficulty: 'Difícil',
    question: '¿Qué es la dialéctica en la filosofía de Hegel?',
    correctAnswer:
      'El método para llegar a la verdad mediante la contradicción',
    answers: [
      'La creación de un sistema filosófico',
      'La negación de la realidad',
      'El método para llegar a la verdad mediante la contradicción',
      'El análisis de los procesos cognitivos'
    ]
  },
  {
    id: 73,
    category: 'Filosofía',
    difficulty: 'Medio',
    question: '¿Qué es el nihilismo en la filosofía?',
    correctAnswer: 'La negación de todos los valores y creencias',
    answers: [
      'La afirmación de la existencia de un ser superior',
      'La negación de todos los valores y creencias',
      'La creencia en la reencarnación',
      'La negación de la existencia del mundo externo'
    ]
  },
  {
    id: 74,
    category: 'Filosofía',
    difficulty: 'Difícil',
    question: '¿Qué es la deconstrucción en la filosofía de Jacques Derrida?',
    correctAnswer:
      'El análisis crítico de la relación entre los significados y los conceptos',
    answers: [
      'La creación de nuevos conceptos a partir de la combinación de los antiguos',
      'La búsqueda de la verdad absoluta',
      'El análisis crítico de la relación entre los significados y los conceptos',
      'La negación de la existencia del lenguaje'
    ]
  },
  {
    id: 75,
    category: 'Filosofía',
    difficulty: 'Fácil',
    question: '¿Qué es la ética?',
    correctAnswer:
      'La rama de la filosofía que estudia la moral y la conducta humana',
    answers: [
      'La rama de la filosofía que estudia la lógica',
      'La rama de la filosofía que estudia la mente',
      'La rama de la filosofía que estudia la moral y la conducta humana',
      'La rama de la filosofía que estudia el conocimiento'
    ]
  },
  {
    id: 76,
    category: 'Filosofía',
    difficulty: 'Medio',
    question: '¿Qué es el imperativo categórico en la filosofía de Kant?',
    correctAnswer: 'La regla moral que se debe seguir en cualquier situación',
    answers: [
      'La creencia en la existencia de un Dios creador',
      'La negación de la libertad humana',
      'La afirmación de la existencia de una verdad absoluta',
      'La regla moral que se debe seguir en cualquier situación'
    ]
  },
  {
    id: 77,
    difficulty: 'Fácil',
    question: '¿Quién fue el autor de la obra "La República"?',
    category: 'Filosofía',
    correctAnswer: 'Platón',
    answers: ['Platón', 'Aristóteles', 'Sócrates', 'Nietzsche']
  },
  {
    id: 78,
    difficulty: 'Medio',
    question:
      '¿Cuál es el término filosófico para referirse al estudio del conocimiento?',
    category: 'Filosofía',
    correctAnswer: 'Epistemología',
    answers: ['Ontología', 'Metafísica', 'Lógica', 'Epistemología']
  },
  {
    id: 79,
    difficulty: 'Difícil',
    question:
      '¿Quién escribió el libro "El mundo como voluntad y representación"?',
    category: 'Filosofía',
    correctAnswer: 'Arthur Schopenhauer',
    answers: [
      'Arthur Schopenhauer',
      'Friedrich Nietzsche',
      'Immanuel Kant',
      'Jean-Paul Sartre'
    ]
  },
  {
    id: 80,
    difficulty: 'Difícil',
    question: '¿Cuál es la partícula subatómica más pesada?',
    category: 'Ciencia',
    correctAnswer: 'Quark top',
    answers: ['Quark top', 'Electrón', 'Protón', 'Neutrón']
  },
  {
    id: 81,
    category: 'Ciencia',
    difficulty: 'Medio',
    question: '¿Qué es la capa de ozono?',
    correctAnswer:
      'Una capa de gas que protege la Tierra de la radiación ultravioleta del sol',
    answers: [
      'Una capa de nubes en la atmósfera',
      'Una capa de gas que protege la Tierra de la radiación ultravioleta del sol',
      'La capa más externa de la Tierra',
      'Una capa de gases que produce el efecto invernadero'
    ]
  },
  {
    id: 82,
    category: 'Ciencia',
    difficulty: 'Difícil',
    question: '¿Qué es la antimateria?',
    correctAnswer:
      'Una forma de materia que tiene propiedades opuestas a la materia ordinaria',
    answers: [
      'Una forma de materia que no tiene carga eléctrica',
      'Una forma de materia que no tiene masa',
      'Una forma de energía que tiene la capacidad de desintegrar la materia',
      'Una forma de materia que tiene propiedades opuestas a la materia ordinaria'
    ]
  },
  {
    id: 83,
    difficulty: 'Fácil',
    question: '¿Qué es el acrónimo "CPU" en inglés?',
    category: 'Tecnología',
    correctAnswer: 'Central Processing Unit',
    answers: [
      'Computer Personal Unit',
      'Central Processing Unit',
      'Central Personal Unit',
      'Computer Processing Unit'
    ]
  },
  {
    id: 84,
    difficulty: 'Medio',
    question:
      '¿Cuál es el nombre de la primera computadora electrónica digital?',
    category: 'Tecnología',
    correctAnswer: 'ENIAC',
    answers: ['ENIAC', 'UNIVAC', 'COLOSSUS', 'EDSAC']
  }
]
