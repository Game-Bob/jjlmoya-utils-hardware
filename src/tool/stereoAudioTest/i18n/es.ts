import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StereoAudioTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'prueba-de-audio-estereo';
const title = 'Prueba de audio estéreo';
const description = 'Comprueba los canales izquierdo y derecho de los altavoces, el balance estéreo, la dirección del cableado y la imagen de los auriculares con tonos de prueba generados por el navegador.';

const faqData = [
  {
    question: '¿Cómo pruebo los altavoces izquierdo y derecho en línea?',
    answer: 'Comienza con volumen bajo, pulsa Izquierda y luego Derecha. El tono izquierdo debe sonar solo por el altavoz o auricular izquierdo, y el tono derecho solo por el lado derecho. Usa Centro para confirmar que ambos lados suenan equilibrados.',
  },
  {
    question: '¿Por qué suenan ambos altavoces durante la prueba izquierda o derecha?',
    answer: 'Algunos dispositivos, sistemas operativos, altavoces Bluetooth, modos mono, ajustes de accesibilidad o mejoras de audio convierten el estéreo a mono. Revisa el balance del sistema, los ajustes de audio mono, el cableado y los efectos de audio de las aplicaciones.',
  },
  {
    question: '¿Puede esto diagnosticar cables de altavoz intercambiados?',
    answer: 'Sí. Si el botón Izquierda suena por el altavoz derecho y el botón Derecha suena por el izquierdo, la ruta de salida está invertida en algún punto entre el ordenador, cable, amplificador, altavoces o auriculares.',
  },
  {
    question: '¿Es seguro un tono sinusoidal para altavoces y auriculares?',
    answer: 'Un tono sinusoidal corto a volumen moderado normalmente es seguro. Evita el volumen alto, sesiones largas o frecuencias muy altas, especialmente con auriculares, altavoces pequeños de portátil o amplificadores desconocidos.',
  },
  {
    question: '¿Afecta el navegador a la prueba estéreo?',
    answer: 'La herramienta usa el StereoPannerNode de la Web Audio API. Es fiable en navegadores modernos, pero la salida final sigue dependiendo del enrutamiento del sistema operativo, controladores, códecs Bluetooth, DACs externos y el cableado de los altavoces.',
  },
];

const howToData = [
  {
    name: 'Establece un volumen inicial bajo',
    text: 'Baja el volumen del sistema y usa el control deslizante de volumen de la herramienta antes de reproducir cualquier tono de prueba.',
  },
  {
    name: 'Prueba cada lado',
    text: 'Pulsa Izquierda y Derecha. Cada tono debe estar claramente aislado en el altavoz o auricular correspondiente.',
  },
  {
    name: 'Comprueba el balance central',
    text: 'Pulsa Centro. El tono debe aparecer centrado entre ambos altavoces, sin inclinarse mucho hacia un lado.',
  },
  {
    name: 'Usa el barrido',
    text: 'Ejecuta Barrido para escuchar el movimiento a través del campo estéreo y detectar caídas, cableado invertido o imagen desigual.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<StereoAudioTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Prueba de altavoz izquierdo y derecho en línea',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Usa esta prueba de audio estéreo en línea para comprobar si tus altavoces izquierdo y derecho, auriculares, cascos, barra de sonido, DAC, amplificador o monitores están enrutados correctamente. La herramienta reproduce tonos generados por el navegador a través del canal izquierdo, canal derecho, ambos canales o un barrido estéreo móvil para que puedas detectar rápidamente canales invertidos, salida mono, altavoces débiles, problemas de balance y errores de cableado sin instalar software de audio.',
    },
    {
      type: 'paragraph',
      html: 'Una configuración estéreo correcta preserva la dirección: el tono de prueba izquierdo debe salir solo del altavoz o auricular izquierdo, el tono derecho solo del lado derecho, y el tono central debe sonar igualmente equilibrado entre ambos lados. Si el sonido aparece en el lado equivocado, en ambos lados a la vez, o mucho más fuerte en un lado, el problema suele estar en los ajustes de salida, el modo de accesibilidad mono, el cableado, el enrutamiento Bluetooth, la ubicación de los altavoces o el software de mejora de audio.',
    },
    {
      type: 'table',
      headers: ['Botón', 'Lo que deberías escuchar', 'Úsalo para diagnosticar'],
      rows: [
        ['Izquierda', 'Tono solo del altavoz izquierdo, auricular izquierdo o cascos izquierdos.', 'Cables invertidos, ubicación incorrecta de altavoces, salida mono o reasignación de canales.'],
        ['Derecha', 'Tono solo del altavoz derecho, auricular derecho o cascos derechos.', 'Salidas intercambiadas, cableado de adaptador incorrecto o efectos de controlador que cambian el orden de los canales.'],
        ['Centro', 'El tono aparece en el centro porque ambos canales suenan equilibrados.', 'Desplazamiento del balance del sistema, un altavoz débil, malla de auricular obstruida o ganancia desigual del amplificador.'],
        ['Barrido', 'El tono se mueve suavemente por la imagen estéreo de lado a lado.', 'Caídas, enlaces Bluetooth inestables, problemas de fase, artefactos de sonido envolvente virtual o imagen desigual.'],
      ],
    },
    {
      type: 'title',
      text: 'Problemas estéreo más comunes que encuentra esta prueba',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Los canales izquierdo y derecho están invertidos: el botón izquierdo suena por el lado derecho, o el botón derecho suena por el lado izquierdo.',
        'El estéreo se ha colapsado a mono: izquierda, derecha y centro suenan casi idénticos por ambos altavoces.',
        'Un lado suena más bajo: el audio central se inclina hacia un altavoz incluso cuando el control de balance del sistema parece centrado.',
        'Los auriculares están mal cableados o colocados: los pasos de juegos, el paneo de música y las videollamadas se sienten espacialmente confusos.',
        'El audio Bluetooth o USB se está procesando: barras de sonido, docks, auriculares y modos de TV pueden convertir o virtualizar la señal.',
        'La ubicación de los altavoces es engañosa: un altavoz demasiado cerca de una pared, bloqueado por muebles o más alejado puede hacer que la imagen central se desplace.',
      ],
    },
    {
      type: 'title',
      text: 'Cómo arreglar el audio izquierdo y derecho invertido',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Para altavoces con cable, intercambia los conectores izquierdo y derecho en el amplificador, interfaz de audio, DAC o salida del ordenador.',
        'Para altavoces pasivos, confirma que el altavoz izquierdo está conectado a los terminales izquierdos del amplificador y el altavoz derecho a los terminales derechos.',
        'Para auriculares, comprueba que se llevan en la orientación correcta y prueba sin adaptadores, cables de extensión o divisores.',
        'En Windows o macOS, revisa el balance de salida y desactiva el audio mono en los ajustes de accesibilidad o sonido.',
        'Para altavoces Bluetooth y barras de sonido, desactiva el sonido envolvente virtual, modo fiesta, audio dual, corrección de sala o modos de sonido de TV durante la prueba.',
        'Para interfaces de audio, DAWs y mezcladores, revisa el enrutamiento de canales, controles de panorama, ajustes de mezcla de monitor y cualquier mezclador de software del fabricante.',
      ],
    },
    {
      type: 'title',
      text: 'Cómo interpretar la prueba del altavoz central',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El tono central no es un altavoz central físico separado en una configuración normal de dos canales. Es la misma señal enviada uniformemente a izquierda y derecha. En auriculares debe sentirse centrado dentro de la cabeza; en altavoces debe formar un centro fantasma entre ellos. Si se inclina a izquierda o derecha, revisa el balance del sistema, la distancia de los altavoces, el ángulo de los altavoces, los controles de volumen, el ajuste del amplificador, el ajuste de los auriculares, el polvo en la rejilla del driver y si un altavoz está parcialmente bloqueado o fallando.',
    },
    {
      type: 'table',
      headers: ['Qué sucede', 'Causa probable', 'Siguiente paso'],
      rows: [
        ['Izquierda suena por ambos lados', 'Audio mono, mezcla descendente o procesamiento de audio espacial.', 'Desactiva la salida mono y el sonido envolvente virtual, luego prueba de nuevo.'],
        ['Izquierda suena por el lado derecho', 'Los canales están intercambiados en algún punto de la cadena de reproducción.', 'Intercambia los cables o cambia el enrutamiento de canales en el controlador, mezclador o amplificador.'],
        ['El centro suena más fuerte en un lado', 'Balance, ubicación, daño del driver, ajuste del oído o rejilla del altavoz bloqueada.', 'Compara con otro par de auriculares o altavoces e inspecciona la ubicación física.'],
        ['El barrido salta o desaparece', 'Inestabilidad Bluetooth, artefactos de mejora de audio o un cable/conector defectuoso.', 'Prueba con salida por cable u otro cable para aislar el punto débil.'],
      ],
    },
    {
      type: 'title',
      text: 'Prueba izquierda derecha para auriculares y cascos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Para auriculares y cascos, la prueba izquierda/derecha es especialmente útil antes de jugar, editar audio, ver películas o unirse a llamadas. Ponte los auriculares normalmente, comienza con volumen bajo, pulsa Izquierda y Derecha, y confirma que cada tono llega al oído correcto. Si ambos lados suenan igual, tu dispositivo puede estar usando audio mono. Si un lado suena apagado o más bajo, limpia la malla del auricular, recoloca la almohadilla, revisa el cable y compara con otro dispositivo de salida.',
    },
    {
      type: 'title',
      text: 'Consejos para pruebas de audio seguras',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Comienza con volumen bajo del sistema, especialmente con auriculares.',
        'Usa Bucle hasta parar solo cuando necesites activamente sonido continuo para rastreo de cables, ubicación o ajuste de balance.',
        'Mantén los tonos de prueba cortos con altavoces pequeños; las ondas sinusoidales continuas pueden volverse incómodas rápidamente.',
        'Evita la ganancia máxima en altavoces pequeños de portátil y amplificadores desconocidos.',
        'No te pongas los auriculares en las orejas hasta que hayas confirmado que el volumen es seguro.',
        'Después de cambiar cables o ajustes, repite las pruebas izquierda, derecha, centro y barrido en ese orden.',
        'Para calibración de estudio o cine en casa, combina esta prueba rápida con un medidor SPL o la rutina de calibración del receptor.',
      ],
    },
    {
      type: 'title',
      text: 'Diagnóstico rápido',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Si izquierda y derecha están intercambiados, inspecciona primero el cableado físico, ya que es la solución más rápida para altavoces de escritorio, amplificadores e interfaces de audio. Si ambos botones suenan por ambos lados, busca salida mono, audio espacial, sonido envolvente virtual o un dispositivo que intencionalmente convierta estéreo a mono. Si el centro está descentrado pero izquierda y derecha están correctamente enrutados, el problema suele ser de balance, ubicación, ajuste de los auriculares, rejillas bloqueadas o salida desigual de los altavoces.',
    },
  ],
  ui: {
    left: 'Izquierda',
    center: 'Centro',
    right: 'Derecha',
    sweep: 'Barrido',
    stop: 'Parar',
    volume: 'Volumen',
    duration: 'Duración',
    infiniteMode: 'Bucle hasta parar',
    infiniteModeHint: 'Mantén cualquier canal reproduciéndose para pruebas continuas.',
    secondsUnit: 's',
    hertzUnit: 'Hz',
    tone: 'Tono',
    balance: 'Balance',
    activeIdle: 'Listo',
    activeLeft: 'Reproduciendo canal izquierdo',
    activeCenter: 'Reproduciendo tono centrado',
    activeRight: 'Reproduciendo canal derecho',
    activeSweep: 'Barriendo el campo estéreo',
    safety: 'Empieza bajo. Los tonos de prueba pueden ser fuertes a través de auriculares, amplificadores y altavoces pequeños de portátil.',
    leftSpeaker: 'Altavoz izquierdo',
    rightSpeaker: 'Altavoz derecho',
    centerLine: 'Campo estéreo',
  },
};
