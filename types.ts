export type Product = {
  id: string;
  name: string;
  description: string;
  category: 'meats' | 'drinks' | 'bakery' | 'snacks';
  price: number;
  image: string;
};
