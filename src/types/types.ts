export type ProductsProps = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  brand: string;
  images: string;
};

export type TodosProps = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};
