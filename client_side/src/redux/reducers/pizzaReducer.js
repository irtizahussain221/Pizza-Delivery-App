import { actionTypes } from "../constants/action-types";

const initialState = {
    pizzas: [],
};

export const pizzaReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_PIZZAS:
            return { ...state, pizzas: payload }
        default:
            return state;
    }
}