import { Question } from './types';

export const questions: Question[] = [
  // SELECCIÓN ÚNICA
  {
    id: 'q1',
    type: 'multiple-choice',
    question: 'Una estudiante camina por San Isidro de León Cortés y observa montañas, terrenos elevados, pendientes y valles. ¿Cuál característica del relieve identifica mejor a la Zona de Los Santos?',
    options: [
      'A. Grandes llanuras completamente planas.',
      'B. Relieve montañoso con pendientes, valles y terrenos elevados.',
      'C. Desiertos con grandes extensiones de arena.',
      'D. Terrenos costeros con playas extensas.'
    ],
    correctAnswer: 'B. Relieve montañoso con pendientes, valles y terrenos elevados.',
    explanation: 'La Zona de Los Santos se caracteriza por su topografía accidentada y montañosa, ideal para cultivos como el café.'
  },
  {
    id: 'q2',
    type: 'multiple-choice',
    question: '¿Qué entendemos por región?',
    options: [
      'A. Un espacio geográfico que comparte determinadas características.',
      'B. Un lugar donde solamente existen viviendas.',
      'C. Una división que únicamente sirve para separar provincias.',
      'D. Un territorio que siempre tiene exactamente el mismo clima.'
    ],
    correctAnswer: 'A. Un espacio geográfico que comparte determinadas características.',
    explanation: 'Una región es una zona territorial que se agrupa porque sus partes comparten elementos en común, ya sean físicos, económicos o sociales.'
  },
  {
    id: 'q3',
    type: 'multiple-choice',
    question: 'Un grupo de estudiantes clasifica un territorio tomando en cuenta la temperatura, las lluvias y otras condiciones atmosféricas. ¿Según cuál elemento están identificando una región?',
    options: [
      'A. Económico.',
      'B. Arqueológico.',
      'C. Climático.',
      'D. Educativo.'
    ],
    correctAnswer: 'C. Climático.',
    explanation: 'La temperatura y las lluvias son elementos meteorológicos que determinan el clima de una región.'
  },
  {
    id: 'q4',
    type: 'multiple-choice',
    question: 'En una comunidad existen numerosas fincas de café, beneficios, productores, recolectores y comercios relacionados con esta actividad. ¿Qué elemento permite caracterizar principalmente esta región?',
    options: [
      'A. Económico-productivo.',
      'B. Arqueológico.',
      'C. Climático.',
      'D. Educativo.'
    ],
    correctAnswer: 'A. Económico-productivo.',
    explanation: 'Las actividades relacionadas con el cultivo y procesamiento del café son actividades productivas que generan economía.'
  },
  {
    id: 'q5',
    type: 'multiple-choice',
    question: 'San Isidro pertenece al cantón de León Cortés Castro, ubicado en la Zona de Los Santos. ¿A cuál región socioeconómica pertenece León Cortés?',
    options: [
      'A. Región Brunca.',
      'B. Región Chorotega.',
      'C. Región Central.',
      'D. Región Huetar Norte.'
    ],
    correctAnswer: 'C. Región Central.',
    explanation: 'La Zona de Los Santos (Dota, Tarrazú y León Cortés) forma parte de la Región Central de Costa Rica.'
  },
  {
    id: 'q6',
    type: 'multiple-choice',
    question: '¿Cuál de las siguientes opciones presenta correctamente las regiones socioeconómicas de Costa Rica?',
    options: [
      'A. Central, Brunca, Chorotega, Pacífico Central, Huetar Norte y Huetar Caribe.',
      'B. Norte, Sur, Este, Oeste, Central y Costera.',
      'C. San José, Alajuela, Cartago, Heredia, Limón y Puntarenas.',
      'D. Valle Central, Zona Norte, Zona Sur y Zona Atlántica.'
    ],
    correctAnswer: 'A. Central, Brunca, Chorotega, Pacífico Central, Huetar Norte y Huetar Caribe.',
    explanation: 'Costa Rica se divide oficialmente en 6 regiones socioeconómicas establecidas por MIDEPLAN.'
  },
  {
    id: 'q7',
    type: 'multiple-choice',
    question: 'El cultivo y producción de café han tenido gran importancia en la Zona de Los Santos. ¿Cuál es una razón que explica esta importancia?',
    options: [
      'A. Es una región dedicada principalmente a la pesca.',
      'B. El café ha sido una actividad productiva importante para muchas familias y para la economía regional.',
      'C. La región no posee terrenos adecuados para la agricultura.',
      'D. La principal actividad económica de la región siempre ha sido la minería.'
    ],
    correctAnswer: 'B. El café ha sido una actividad productiva importante para muchas familias y para la economía regional.',
    explanation: 'El café de esta zona (reconocido mundialmente) es el principal motor económico y fuente de sustento de las familias.'
  },
  {
    id: 'q8',
    type: 'multiple-choice',
    question: 'En 1969 ocurrió un acontecimiento que tuvo gran importancia para las comunidades de la Zona de Los Santos. ¿Cuál fue?',
    options: [
      'A. Se creó el cantón de León Cortés.',
      'B. Llegó la electricidad a la Zona de Los Santos.',
      'C. Costa Rica declaró su independencia.',
      'D. Se fundó la primera escuela de Costa Rica.'
    ],
    correctAnswer: 'B. Llegó la electricidad a la Zona de Los Santos.',
    explanation: 'En 1969, la llegada de COOPELESCA/COOPESANTOS trajo la electrificación, impulsando el desarrollo.'
  },
  {
    id: 'q9',
    type: 'multiple-choice',
    question: '¿Por qué la llegada de la electricidad fue importante para las comunidades de la Zona de Los Santos?',
    options: [
      'A. Porque permitió mejorar diferentes actividades de la vida cotidiana, productivas y sociales.',
      'B. Porque eliminó completamente la agricultura.',
      'C. Porque convirtió la región en una zona costera.',
      'D. Porque hizo desaparecer las montañas.'
    ],
    correctAnswer: 'A. Porque permitió mejorar diferentes actividades de la vida cotidiana, productivas y sociales.',
    explanation: 'La electricidad permitió el uso de maquinaria en los beneficios de café y mejoró la calidad de vida en los hogares.'
  },
  {
    id: 'q10',
    type: 'multiple-choice',
    question: 'En 1910 ocurrieron fuertes terremotos en Costa Rica que provocaron daños en diferentes comunidades. ¿Qué nos permite comprender este acontecimiento?',
    options: [
      'A. Que los fenómenos naturales pueden afectar la vida de las personas y transformar las comunidades.',
      'B. Que los terremotos solamente afectan las zonas costeras.',
      'C. Que los terremotos no producen daños en las construcciones.',
      'D. Que los acontecimientos naturales no forman parte de la historia de una región.'
    ],
    correctAnswer: 'A. Que los fenómenos naturales pueden afectar la vida de las personas y transformar las comunidades.',
    explanation: 'Los fenómenos naturales son parte de la historia porque cambian la infraestructura y la forma en que viven las personas.'
  },

  // VERDADERO O FALSO
  {
    id: 'q11',
    type: 'true-false',
    question: 'La Zona de Los Santos está formada únicamente por el cantón de León Cortés.',
    correctAnswer: false,
    explanation: 'Falso. La Zona de Los Santos está conformada por tres cantones: León Cortés, Tarrazú y Dota.'
  },
  {
    id: 'q12',
    type: 'true-false',
    question: 'León Cortés Castro forma parte de la Región Central de Costa Rica.',
    correctAnswer: true,
    explanation: 'Verdadero. Toda la Zona de Los Santos está ubicada geográficamente en la Región Central.'
  },
  {
    id: 'q13',
    type: 'true-false',
    question: 'El cultivo y producción de café constituyen actividades económicas importantes en la Zona de Los Santos.',
    correctAnswer: true,
    explanation: 'Verdadero. Es la principal actividad económica de la región.'
  },
  {
    id: 'q14',
    type: 'true-false',
    question: 'Una región solamente puede definirse utilizando límites políticos.',
    correctAnswer: false,
    explanation: 'Falso. Una región puede definirse por el clima, relieve, cultura, o actividades económicas, no solo por límites políticos.'
  },
  {
    id: 'q15',
    type: 'true-false',
    question: 'Las características del relieve pueden influir en las actividades que realizan las personas de una comunidad.',
    correctAnswer: true,
    explanation: 'Verdadero. Por ejemplo, el relieve montañoso de la zona favorece el cultivo del café pero dificulta el transporte.'
  },
  {
    id: 'q16',
    type: 'true-false',
    question: 'La llegada de la electricidad a la Zona de Los Santos en 1969 fue un acontecimiento sin importancia para el desarrollo de la región.',
    correctAnswer: false,
    explanation: 'Falso. Fue un acontecimiento de gran importancia porque mejoró los procesos productivos y la calidad de vida.'
  },

  // COMPLETAR Y RESPUESTA CORTA
  {
    id: 'q17',
    type: 'short-answer',
    question: 'Menciona dos características del relieve que podemos encontrar en la Zona de Los Santos.',
    description: 'Escribe una palabra clave en cada espacio (ej. montañas, valles, pendientes).',
    inputs: [
      { label: 'Característica 1', correctAnswers: ['montaña', 'montañas', 'montañoso', 'valle', 'valles', 'pendiente', 'pendientes', 'elevado', 'elevados', 'terreno elevado', 'terrenos elevados'] },
      { label: 'Característica 2', correctAnswers: ['montaña', 'montañas', 'montañoso', 'valle', 'valles', 'pendiente', 'pendientes', 'elevado', 'elevados', 'terreno elevado', 'terrenos elevados'] }
    ],
    explanation: 'El relieve de la Zona de Los Santos es montañoso, caracterizado por valles y pendientes.'
  },
  {
    id: 'q18',
    type: 'short-answer',
    question: 'Secuencia territorial: Completa la siguiente secuencia.',
    description: 'San Isidro → _________ → Zona de Los Santos → _________ → Costa Rica',
    inputs: [
      { label: 'Cantón', correctAnswers: ['león cortés', 'leon cortes', 'leon', 'león'] },
      { label: 'Región socioeconómica', correctAnswers: ['central', 'región central', 'region central'] }
    ],
    explanation: 'San Isidro pertenece al cantón de León Cortés. La Zona de Los Santos forma parte de la Región Central de Costa Rica.'
  },

  // RELACIONE (MATCHING)
  {
    id: 'q19',
    type: 'matching',
    question: 'Relaciona los conceptos con sus definiciones correctas.',
    pairs: [
      { concept: 'Región climática', definition: 'Se establece considerando elementos como temperatura, precipitaciones y clima.' },
      { concept: 'Región arqueológica', definition: 'Se relaciona con sitios, restos y evidencias de sociedades del pasado.' },
      { concept: 'Región educativa', definition: 'Se relaciona con instituciones, centros educativos y la educación.' },
      { concept: 'Región económica-productiva', definition: 'Toma en cuenta las actividades económicas y productivas que predominan.' },
      { concept: 'Región socioeconómica', definition: 'Divide el territorio tomando en cuenta características económicas y sociales.' },
      { concept: 'Región', definition: 'Espacio geográfico que comparte determinadas características.' },
      { concept: 'Relieve', definition: 'Características de la superficie terrestre, como montañas, valles y llanuras.' },
      { concept: 'Historia regional', definition: 'Estudia acontecimientos importantes ocurridos en un territorio y su impacto.' }
    ],
    explanation: 'Identificar los diferentes tipos de regiones y conceptos geográficos es clave para entender cómo se organiza y estudia el territorio nacional.'
  }
];
