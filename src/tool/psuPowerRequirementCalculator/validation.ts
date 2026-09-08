export const validation = {
  reviewedAt: '2026-09-08',
  methodology:
    'The estimate adds component draw, transient margin, growth headroom, and the installed PSU capacity before comparing the requested load with the available supply.',
  sources: [
    'https://www.intel.com/content/www/us/en/content-details/336521/atx-version-3-multi-rail-desktop-platform-power-supply-design-guide.html',
    'https://edc.intel.com/content/www/us/en/design/products-and-solutions/processors-and-chipsets/alder-lake-s/atx12vo-12v-only-desktop-power-supply-design-guide/2.0/atx12v-specific-guidelines-3-0/atx12v-specific-guidelines/',
  ],
  referenceCases: [
    'A 400 W estimated load with 20% transient margin and 15% growth headroom requires 552 W of recommended capacity.',
  ],
  limitations:
    'The estimate cannot measure real transient behavior, efficiency, thermal derating, or the quality of a specific power supply installation.',
} as const;
