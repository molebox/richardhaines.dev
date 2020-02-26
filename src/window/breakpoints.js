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

export const PhoneAboutMeTemplateAreas = `
'name      name     name    name'
'role      role     role    role'
'email     site     github  phone'
'about     about    about   about'
'location  location location  location';
`;

export const TabletAboutMeTemplateAreas = `
'name      name     name     name   name     name'
'role      role     role     role   role     role'
'email     site     github   phone  .        .'
'about     about    about    about  about    about'
'location  location location location location location';
`;

export const DesktopAboutMeTemplateAreas = `
  'name      name     name     name     name    name    name    name'
  'role      role     role     role     role    role    role    role'
  'email     email    site     site     github  github  phone   phone'
  'about     about    about    about    about   about   about   about'
  'location  location location location location location location location';
`;
