import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResistorColorCodeUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = "calculadora-codigo-colores-resistencia";
const title = "Calculadora de código de colores de resistencias";
const description = "Descifra las bandas de colores de una resistencia y calcula su valor, tolerancia, rango y coeficiente de temperatura. También puedes trabajar al revés desde un valor objetivo o leer códigos SMD.";

const faqData = [{"question":"¿Cómo se leen las bandas de colores de una resistencia?","answer":"Empieza por el extremo contrario a la banda de tolerancia, que suele estar algo separada. Las dos o tres primeras bandas forman las cifras, después aparece el multiplicador y al final la tolerancia."},{"question":"¿Qué significa un código de cuatro bandas?","answer":"Las dos primeras bandas son cifras significativas, la tercera es el multiplicador y la cuarta indica la tolerancia."},{"question":"¿Qué tolerancia tiene una resistencia de tres bandas?","answer":"Cuando no existe una banda de tolerancia, la interpretación habitual de un código de tres bandas es más o menos 20 por ciento."},{"question":"¿En qué se diferencian las resistencias de cinco y seis bandas?","answer":"Las de cinco bandas usan tres cifras y una tolerancia. La sexta banda añade el coeficiente de temperatura en ppm por grado Celsius."},{"question":"¿Puede leer códigos de resistencias SMD?","answer":"Sí. Introduce un código de tres o cuatro cifras o una notación como 4R7. La letra R representa la coma decimal."},{"question":"¿El resultado demuestra que una resistencia es segura?","answer":"No. Comprueba también potencia, tensión de trabajo, temperatura, tolerancia y requisitos del circuito antes de sustituirla."}];

const howToData = [{"name":"Elige el número de bandas","text":"Selecciona tres, cuatro, cinco o seis bandas según la resistencia que estés examinando."},{"name":"Selecciona cada color","text":"Activa una posición y toca su color en la paleta. El dibujo se actualiza mientras completas el código."},{"name":"Lee el valor calculado","text":"Consulta el valor grande y después la tolerancia, el rango permitido y el coeficiente térmico si existe."},{"name":"Confirma la orientación","text":"Coloca la banda de tolerancia a la derecha cuando sea posible y compara el resultado con el esquema o la hoja de datos."}];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: "es",
};

export const content: ToolLocaleContent<ResistorColorCodeUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [{"type":"title","text":"Calculadora de código de colores de resistencias","level":2},{"type":"paragraph","html":"Descifra resistencias de tres, cuatro, cinco y seis bandas directamente en el navegador. La calculadora convierte cada color en cifras significativas, multiplicador, tolerancia, rango de resistencia y coeficiente de temperatura."},{"type":"title","text":"Cómo leer el código de colores","level":3},{"type":"paragraph","html":"Empieza por el extremo opuesto a la banda de tolerancia. Dos o tres bandas forman las cifras, la siguiente aporta el multiplicador y la banda de tolerancia indica la variación esperada alrededor del valor nominal."},{"type":"table","headers":["Bandas","Cifras significativas","Marca adicional","Uso habitual"],"rows":[["Tres bandas","Dos","Tolerancia predeterminada del 20 por ciento","Identificación general"],["Cuatro bandas","Dos","Tolerancia","Resistencias cableadas comunes"],["Cinco bandas","Tres","Tolerancia","Resistencias de precisión"],["Seis bandas","Tres","Tolerancia y coeficiente térmico","Circuitos de precisión"]]},{"type":"title","text":"Calcula el código desde un valor","level":3},{"type":"paragraph","html":"Usa el modo Trabajar al revés cuando conozcas la resistencia que buscas. La herramienta redondea al valor que puede representarse con el número de bandas elegido y muestra la secuencia resultante."},{"type":"title","text":"Códigos de resistencias SMD","level":3},{"type":"paragraph","html":"Las resistencias SMD suelen usar tres o cuatro cifras. La última cifra representa la potencia de diez aplicada a las cifras iniciales. La R marca la coma decimal, por eso 4R7 significa 4,7 ohmios."},{"type":"title","text":"Verificaciones antes de instalar","level":2},{"type":"list","items":["Compara el resultado con el esquema o la documentación de servicio.","Comprueba tolerancia y potencia en la hoja de datos.","Usa la separación de la banda de tolerancia para confirmar la orientación.","Mide la resistencia aislada si la marca está dañada o es ambigua.","No consideres el código de colores una prueba de seguridad eléctrica."]},{"type":"tip","title":"Consejo","html":"La herramienta identifica la marca del componente. No comprueba resistencia real, potencia, tensión de aislamiento ni fiabilidad a largo plazo."}],
  ui: {"sceneKicker":"Laboratorio del espectro EIA","hint":"Toca una banda y elige un color. La resistencia responde al instante.","decodeMode":"Descifrar bandas","reverseMode":"Trabajar al revés","smdMode":"Descifrar SMD","bandCount":"Número de bandas","bandCount3":"3 bandas","bandCount4":"4 bandas","bandCount5":"5 bandas","bandCount6":"6 bandas","selectBand":"Selecciona una banda","colorPalette":"Paleta de colores","bandLabel":"Banda","resistance":"Resistencia","tolerance":"Tolerancia","range":"Rango permitido","temperatureCoefficient":"Coeficiente de temperatura","noTempco":"No codificado","targetResistance":"Resistencia objetivo en ohmios","targetHint":"Escribe un número como 4700.","targetUnit":"ohmios","toleranceChoice":"Tolerancia objetivo","tolerance20":"20 por ciento","tolerance10":"10 por ciento","tolerance5":"5 por ciento","tolerance2":"2 por ciento","tolerance1":"1 por ciento","smdCode":"Marca SMD","smdHint":"Usa 472 para 4,7 kΩ o 4R7 para 4,7 Ω.","decodeSmd":"Descifrar marca","valueUnit":"Ω","ohms":"ohmios","kiloohms":"kiloohmios","megaohms":"megaohmios","gigaohms":"gigaohmios","minValue":"Mínimo","maxValue":"Máximo","actualValue":"Valor descifrado","requestedValue":"Valor solicitado","status":"Estado","statusReady":"Listo para leer","statusCheck":"Valor representable más cercano","statusInvalid":"Revisa el código","orientationNote":"Pista de orientación: coloca la banda de tolerancia, ligeramente separada, a la derecha. El oro y la plata no son bandas de cifras.","reverseNote":"El modo inverso elige un valor representable y muestra el código de colores resultante.","smdNote":"Esta vista compacta lee la marca SMD, pero el código no incluye la tolerancia.","colorBlack":"Negro","colorBrown":"Marrón","colorRed":"Rojo","colorOrange":"Naranja","colorYellow":"Amarillo","colorGreen":"Verde","colorBlue":"Azul","colorViolet":"Violeta","colorGray":"Gris","colorWhite":"Blanco","colorGold":"Oro","colorSilver":"Plata"},
};
