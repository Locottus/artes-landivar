import { ContactExtension, SocialLink } from '../models/content';

// TODO: reemplazar correo, teléfono, extensiones y redes con los datos oficiales del CVP.
export const SITE = {
  name: 'Centro Virtual del Patrimonio',
  shortName: 'CVP',
  institution: 'Universidad Rafael Landívar',
  institutionUrl: 'https://principal.url.edu.gt/',
  tagline:
    'Arte, historia y patrimonio cultural de Guatemala y de la Universidad Rafael Landívar, al alcance de todos.',
  contact: {
    email: 'correo@url.edu.gt',
    phone: '+502 0000-0000',
    extensions: [
      { area: 'Coordinación del CVP', extension: '0000' },
      { area: 'Museo Virtual Landivariano', extension: '0000' },
      { area: 'Centro de Artes Landívar', extension: '0000' },
    ] satisfies readonly ContactExtension[],
  },
  social: [
    { label: 'Facebook', url: 'https://www.facebook.com/' },
    { label: 'Instagram', url: 'https://www.instagram.com/' },
    { label: 'YouTube', url: 'https://www.youtube.com/' },
  ] satisfies readonly SocialLink[],
} as const;
