export type Product = {
  slug: string;
  name: string;
  image: string;
  alt: string;
  price: string | null;
  variants: string[];
  purchaseUrl: string | null;
  featured: boolean;
};

export const products: Product[] = [
  {
    slug: 'heal-me',
    name: 'Heal Me',
    image: '/images/merch-heal-me.png',
    alt: 'Love Lost Heal Me shirt artwork with hands and a crescent moon',
    price: null,
    variants: [],
    purchaseUrl: null,
    featured: true,
  },
  {
    slug: 'round-eye',
    name: 'Round Eye',
    image: '/images/merch-round-eye.png',
    alt: 'Black Love Lost shirt with a radial eye graphic',
    price: null,
    variants: [],
    purchaseUrl: null,
    featured: true,
  },
  {
    slug: 'snake-bust',
    name: 'Snake Bust',
    image: '/images/merch-snake-bust.png',
    alt: 'Love Lost classical bust and snake shirt artwork in black, red, and green',
    price: null,
    variants: [],
    purchaseUrl: null,
    featured: true,
  },
  {
    slug: 'soft-spine',
    name: 'Soft Spine',
    image: '/images/merch-soft-spine.png',
    alt: 'Love Lost Soft Spine back print artwork',
    price: null,
    variants: [],
    purchaseUrl: null,
    featured: false,
  },
];
