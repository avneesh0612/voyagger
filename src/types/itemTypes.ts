interface Salad {
  id: string;
  active: boolean;
  name: string;
  image: string;
  price: number;
  category: string;
  description: string;
}

interface Category {
  id: string;
  name: string;
  image: string;
}
interface Medicines {
  image: string;
  name: string;
  price: number;
  id: string;
}

export type { Salad, Category, Medicines };
