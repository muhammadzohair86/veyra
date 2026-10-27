import productImage from '../assets/img/headset-product.png';
import inUseImage from '../assets/img/headset-in-use.jpg';

export const BRAND = {
  name: 'Veyra',
  tagline: 'Step inside the picture',
  credit: 'Website designed and built by Zohair.',
};

export const NAV_LINKS = [
  { label: 'Highlights', href: '#highlights' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Design', href: '#design' },
  { label: 'Specifications', href: '#specs' },
  { label: 'FAQ', href: '#faq' },
];

export const HERO = {
  eyebrow: 'Virtual reality headset',
  title: ['Step inside', 'the picture.'],
  body:
    'Veyra is a virtual reality headset shaped around the face: a padded fit, a head strap and a wide front visor, with everything else kept out of the way.',
  primaryCta: { label: 'Explore the Headset', href: '#gallery' },
  secondaryCta: { label: 'View Specifications', href: '#specs' },
  facts: ['Head-mounted', 'Padded face fit', 'Side control pad'],
  image: {
    src: productImage,
    width: 960,
    height: 717,
    alt: 'Veyra VR headset shown at an angle, with a dark front visor, a light frame and a grey head strap.',
  },
};

export const HIGHLIGHTS = {
  eyebrow: 'Highlights',
  title: 'Four details, one clear idea.',
  intro:
    'Everything on the headset is there to hold it comfortably in front of your eyes. These are the details visible in the product imagery.',
  items: [
    {
      id: 'visor',
      title: 'Wide front visor',
      text: 'A broad, dark front housing gives the headset a clean, uninterrupted face.',
      icon: 'visor',
    },
    {
      id: 'fit',
      title: 'Padded face fit',
      text: 'A cushioned face interface with a nose cut-out rests against the face.',
      icon: 'cushion',
    },
    {
      id: 'strap',
      title: 'Head strap',
      text: 'A strap runs around the head to hold the headset in position.',
      icon: 'strap',
    },
    {
      id: 'pad',
      title: 'Side control pad',
      text: 'A rounded pad is set into the side of the housing.',
      icon: 'pad',
    },
  ],
};

export const GALLERY = {
  eyebrow: 'Gallery',
  title: 'See it from two angles.',
  intro: 'Two views of the same headset: on its own, and in use.',
  views: [
    {
      id: 'product',
      tab: 'Product view',
      caption: 'The headset on its own: wide front housing, light frame and head strap.',
      src: productImage,
      width: 960,
      height: 717,
      alt: 'Veyra VR headset on a plain background, shown from the front left.',
      fit: 'contain',
    },
    {
      id: 'in-use',
      tab: 'In use',
      caption: 'Worn in use, with the padded face fit sitting around the nose and eyes.',
      src: inUseImage,
      width: 675,
      height: 716,
      alt: 'A person looking upward while wearing the Veyra VR headset and over-ear headphones, lit in warm red light.',
      fit: 'cover',
    },
  ],
};

// Each detail is a real crop of the product image: no new artwork, no distortion.
// zoom = source width / crop width. x and y are the crop's top-left corner as a
// percentage of the full image.
export const DESIGN = {
  eyebrow: 'Design and comfort',
  title: 'Designed around the face.',
  intro:
    'Three parts of the headset do most of the work. Each one below is a close-up taken from the product image.',
  note: 'Materials, weight and strap adjustment range have not been specified.',
  details: [
    {
      id: 'strap',
      title: 'Head strap',
      text: 'A single strap runs over and around the head.',
      crop: { zoom: 1.85, x: 0, y: 0 },
    },
    {
      id: 'pad',
      title: 'Side pad',
      text: 'A rounded pad is set into the side of the housing.',
      crop: { zoom: 2.4, x: 17.7, y: 46 },
    },
    {
      id: 'front',
      title: 'Front housing',
      text: 'A wide, dark front panel framed by a light surround.',
      crop: { zoom: 1.78, x: 43.75, y: 37.7 },
    },
  ],
  image: {
    src: productImage,
    width: 960,
    height: 717,
  },
};

export const SPECS = {
  eyebrow: 'Specifications',
  title: 'What is confirmed, and what is not.',
  intro:
    'This page lists only what the product imagery shows. Technical figures have not been supplied, so they are marked as unspecified rather than estimated.',
  confirmed: {
    title: 'Visible in the product imagery',
    rows: [
      ['Product type', 'Virtual reality headset'],
      ['Wearing style', 'Head-mounted, held by a head strap'],
      ['Face interface', 'Padded cushion with a nose cut-out'],
      ['Front housing', 'Wide, dark visor-style panel with a light surround'],
      ['Side housing', 'Includes a rounded pad'],
      ['Pictured configuration', 'Photographed with a smartphone seated at the front'],
      ['Colors shown', 'Dark front, light frame, grey strap'],
    ],
  },
  unspecified: {
    title: 'Not yet specified',
    rows: [
      'Display',
      'Resolution',
      'Refresh rate',
      'Field of view',
      'Tracking',
      'Audio',
      'Controls',
      'Battery',
      'Weight',
      'Materials',
      'Connectivity',
      'Compatibility',
      'Price',
      'Availability',
    ],
  },
};

export const FAQ = {
  eyebrow: 'FAQ',
  title: 'Questions, answered plainly.',
  items: [
    {
      id: 'what',
      q: 'What is Veyra?',
      a: 'Veyra is a head-mounted virtual reality headset. It combines a wide front visor, a padded face fit and a head strap.',
    },
    {
      id: 'compat',
      q: 'Which devices and apps does it work with?',
      a: 'Compatibility has not been specified. The product photograph shows a smartphone seated at the front of the headset, but no supported device list has been provided.',
    },
    {
      id: 'specs',
      q: 'Why are so many specifications marked as unspecified?',
      a: 'Because no verified figures were supplied. Showing a guess for something like field of view or battery life would be misleading, so those rows stay marked as unspecified.',
    },
    {
      id: 'colors',
      q: 'Does the headset come in other colors?',
      a: 'The product images show one design: a dark front panel, a light frame and a grey strap. No other variants have been specified.',
    },
    {
      id: 'buy',
      q: 'Can I order a Veyra headset here?',
      a: 'No. This is a demonstration website. The reserve form checks your input in the browser, but nothing is sent, stored or processed, and no order is placed.',
    },
  ],
};

export const RESERVE = {
  eyebrow: 'Reserve your interest',
  title: 'Be first in line when details land.',
  body:
    'This is a demo form. It checks your email address in the browser, then shows a confirmation message. Nothing is sent or saved.',
  label: 'Email address',
  placeholder: 'you@example.com',
  button: 'Reserve my interest',
  errors: {
    empty: 'Please enter your email address.',
    invalid: 'Please enter a valid email address, such as name@example.com.',
  },
  success: 'Thank you. This is a demo, so nothing was sent or stored and no order was placed.',
};

export const FOOTER = {
  blurb: 'A virtual reality headset shaped around the face.',
  legal: 'Concept product website for portfolio demonstration. No products are sold here.',
};
