interface Salad {
  id: string;
  active: boolean;
  name: string;
  image: string;
  price: number;
}

interface Category {
  id: string;
  name: string;
  image: string;
}

export type { Salad, Category };
