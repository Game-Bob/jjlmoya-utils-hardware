import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestTecladoUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-klawiatury-online';
const title = 'Online Test Klawiatury i Detektor Ghostingu';
const description = 'Sprawdź, czy Twoja klawiatura cierpi na Ghosting lub Key Jamming. Wizualizacja klawiszy w czasie rzeczywistym i licznik N-Key Rollover.';

const faqData = [
  {
    question: 'Co to jest Ghosting w klawiaturze?',
    answer: 'To defekt występujący, gdy naciskasz wiele klawiszy naraz, a komputer nie rejestruje niektórych z nich. Wynika to z ograniczeń w wewnętrznej matrycy elektrycznej klawiatury, która nie może przetworzyć pewnych kombinacji.',
  },
  {
    question: 'Co oznacza N-Key Rollover (NKRO)?',
    answer: 'NKRO oznacza, że klawiatura może zarejestrować tyle klawiszy, ile jesteś w stanie nacisnąć jednocześnie, bez błędu. Jest to funkcja premium, powszechna w wysokiej klasy klawiaturach mechanicznych i gamingowych.',
  },
  {
    question: 'Dlaczego moja klawiatura zawodzi, gdy naciskam 3 klawisze naraz?',
    answer: 'Większość tanich klawiatur biurowych ma rollover na poziomie 2 lub 3 klawiszy. Jest to wystarczające do pisania, ale niewystarczające do intensywnego grania lub złożonych skrótów klawiszowych.',
  },
  {
    question: 'Jak mogę naprawić klawisz, który nie reaguje?',
    answer: 'Jeśli test nie wykrywa naciśnięcia klawisza, może to być brud pod przełącznikiem, awaria styku elektrycznego lub uszkodzony kabel. Spróbuj wyczyścić klawiaturę sprężonym powietrzem przed rezygnacją.',
  },
];

const howToData = [
  {
    name: 'Skupienie na wizualizatorze',
    text: 'Kliknij dowolne miejsce na stronie, aby upewnić się, że przeglądarka jest aktywna i może przechwytywać naciśnięcia klawiszy sprzętowych.',
  },
  {
    name: 'Uruchom test odpowiedzi',
    text: 'Naciskaj po kolei każdy klawisz na klawiaturze. Odpowiadający mu klawisz na ekranie zaświeci się na zielono, jeśli działa poprawnie.',
  },
  {
    name: 'Sprawdź ghosting',
    text: 'Naciśnij popularne klawisze gamingowe (W, A, S, D, Spacja, Shift) jednocześnie, aby zobaczyć, czy się blokują, czy wszystkie się zaświecą.',
  },
  {
    name: 'Zweryfikuj maksymalny rollover',
    text: 'Spróbuj nacisnąć obiema rękami jak najwięcej klawiszy naraz i obserwuj licznik maksymalnej liczby jednocześnie naciśniętych klawiszy.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<TestTecladoUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: 'Test Klawiatury Online: Wykryj Ghosting i N-Key Rollover',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Interaktywne narzędzie do diagnostyki klawiatury. Sprawdź, czy Twoje urządzenie cierpi na ghosting, blokowanie lub ograniczenia rollover. Czytelne wizualnie, ze wsparciem dla wszystkich rodzajów klawiatur.',
    },
    {
      type: 'title',
      text: 'Co to jest Ghosting?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ghosting występuje, gdy naciskasz określoną kombinację klawiszy, a klawiatura rejestruje fantomowe naciśnięcie, którego nie wykonałeś. Wynika to z ograniczeń w wewnętrznej matrycy obwodów.',
    },
    {
      type: 'title',
      text: 'N-Key Rollover i Maksymalny Rollover',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>NKRO (N-Key Rollover):</strong> Pozwala na jednoczesne rejestrowanie wszystkich naciśniętych klawiszy. <strong>6KRO:</strong> Stary limit standardu USB. <strong>2-3KRO:</strong> Typowe dla tanich klawiatur, wystarczające do pisania.',
    },
    {
      type: 'title',
      text: 'Klawiatury Mechaniczne vs Membranowe',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Klawiatury mechaniczne mają indywidualne przełączniki z izolowanymi diodami, co eliminuje ghosting. Klawiatury membranowe współdzielą ścieżki przewodzące, co powoduje błędy przy jednoczesnych kombinacjach.',
    },
  ],
  ui: {
    badge: 'Test Wejścia',
    title: 'Test Klawiatury i Detektor Ghostingu',
    description: 'Zweryfikuj N-Key Rollover i wykryj uszkodzone klawisze.',
    simultaneousLabel: 'Jednoczesne',
    eventLogLabel: 'Log zdarzeń',
    resetBtn: 'Resetuj',
  },
};
