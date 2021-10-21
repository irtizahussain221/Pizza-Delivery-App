export interface pizzaProps {
  pizza: Pizzas;
}

export interface cartProps {
  item: cartItem;
  deleteAnItem: (item: cartItem) => void;
  addQuantity: (item: cartItem) => void;
  removeQuantity: (item: cartItem) => void;
}

export interface Pizzas {
  _id: string;
  name: string;
  variant: string[];
  prices: {
    small: number;
    medium: number;
    large: number;
  }[];
  category: string;
  image: string;
  description: string;
}

export interface cartItem {
  _id: string;
  quantity: number;
  name: string;
  image: string;
  price: number;
  prices: {
    small: number;
    medium: number;
    large: number;
  }[];
  variant: string;
}

export interface loginStatusProps {
  isLoggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}
