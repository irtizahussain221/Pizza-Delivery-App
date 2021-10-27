export interface pizzaProps {
  pizza: Pizzas;
  setScreenUpdated: React.Dispatch<React.SetStateAction<boolean>>;
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

export interface order {
  _id: string;
  email: string;
  isDelivered: boolean;
  name: string;
  orderAmount: number;
  userid: string;
  createdAt: string;
  updatedAt: string;
  orderItems: {
    image: string;
    name: string;
    prices: {
      small: number;
      medium: number;
      large: number;
    }[];
    price: number;
    quantity: number;
    variant: string;
    _id: string;
  }[];
}

export interface orderProps {
  order: order;
}

export interface pizzaModalProps {
  name: string;
  image: string;
  show: boolean;
  description: string;
  handleShow: () => void;
}

export interface pizzaItemProps {
  pizza: Pizzas;
  handleShow: () => void;
  variant: "small" | "medium" | "large";
  setVariant: React.Dispatch<
    React.SetStateAction<"small" | "medium" | "large">
  >;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  addToCart: (pizza: Pizzas) => void;
  deletePizza: () => void;
  handleUpdateModalShow: () => void;
}

export interface updatePizzaModalProps {
  pizzaID: string;
  showUpdateModal: boolean;
  handleUpdateModalShow: () => void;
  setScreenUpdated: React.Dispatch<React.SetStateAction<boolean>>;
}
