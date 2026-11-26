export const SITE_CONFIG = {
  siteUrl: 'https://arnite.me',
  projectUrl: 'https://arnx.me',
  name: 'The Studio ArnX',
  tagline: 'Logic in every layer',
  personName: 'Arnav Agarwal',
  description: 'Arnav Agarwal is a student, young entrepreneur, programmer, and technology enthusiast interested in software development, cybersecurity, artificial intelligence, and creative technology.',
  school: 'Surendranath Centenary School, Ranchi',
};

export const SOCIAL_LINKS = {
  github: { label: 'GitHub', url: 'https://github.com/justarnavscs' },
  x: { label: 'X', url: 'https://x.com/the_studio_arnx' },
  instagramStudio: { label: 'The Studio ArnX on Instagram', url: 'https://www.instagram.com/studio.arnet/' },
  instagramArnav: { label: 'Arnav Agarwal on Instagram', url: 'https://www.instagram.com/just_arnav_19/' },
  // Set this only after confirming the destination from the business card QR code.
  linkedin: { label: 'LinkedIn', url: 'https://www.linkedin.com/qr/AQCc0MruHHwvhSNoL3GQhpeSKdwWlDvM_B7Ldc6Bi4Nnj_xKA9K_dOYoxnNvWeXl7ySp0KDFjTWwXvzpiw0YPqjtPrYQ_KTyPnA' },
};

export const PUBLISHED_BOOKS = [
  { title: 'Rewire Your Mind: Brain Wash', publicationUrl: '' },
  { title: 'JARVIS AI: Logic in Every Layer', publicationUrl: '' },
  { title: 'The Elite Output Matrix', publicationUrl: '' },
  { title: 'Bound to Ashes, Sworn to Crowns', publicationUrl: '' },
  { title: 'The Dopamine of Seduction', publicationUrl: '' },
  { title: 'AI, The Silicon Generation', publicationUrl: '' },
  { title: 'The Only Protocol', publicationUrl: '' },
  { title: 'The Universal Ledger', publicationUrl: '' },
  { title: 'The HTML Protocol', publicationUrl: '' },
  { title: 'The Synch Protocol: The Echo Bureau', publicationUrl: '' },
];

export const ACTIVE_SOCIAL_LINKS = Object.values(SOCIAL_LINKS).filter(({ url }) => url);
