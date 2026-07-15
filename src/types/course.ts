export interface TCourse {
  _id?: string;
  id?: string;
  title: string;
  category: string;
  description: string;
  image: string;
  instructor: string;
  price: number;
  rating: number;
  stock?: number;
  featured?: boolean;
}