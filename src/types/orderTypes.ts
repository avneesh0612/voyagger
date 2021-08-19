interface orderType {
  id: string;
  amount: number;
  amountShipping: number;
  images: [string];
  timestamp: number;
}

export type { orderType };
