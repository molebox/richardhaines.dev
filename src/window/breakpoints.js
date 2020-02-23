export const breakpoints = {
  xs: { min: 0, max: 375 },
  sm: { min: 376, max: 960 },
  md: { min: 961, max: 1400 },
  lg: { min: 1401, max: null }
};

export const PhoneTemplateAreas = `
  'nav      nav     nav     nav'
  'main     main    main    main'
  'footer   footer  footer  footer'
`;

export const TabletTemplateAreas = `
  'nav      nav     nav     nav     nav     nav'
  'main     main    main    main    main    main'
  'footer   footer  footer  footer  footer  footer'
`;

export const DesktopTemplateAreas = `
  '.    nav      nav     nav     nav     nav     nav    .'
  '.    main     main    main    main    main    main   .'
  '.    footer   footer  footer  footer  footer  footer .'
`;
