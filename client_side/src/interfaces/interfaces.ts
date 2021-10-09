export interface Props {
    pizza: {
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
};

export interface Pizzas {
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
};