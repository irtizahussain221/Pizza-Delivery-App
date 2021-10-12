import { actionTypes } from "../constants/action-types.js";

export const setPizzas = (pizzas) => {
  return {
    type: actionTypes.SET_PIZZAS,
    payload: pizzas,
  };
};
