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

export type { Salad, Category };
