import { faEdit, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pizzaItemProps } from "../../interfaces/interfaces";

function PizzaItem(props: pizzaItemProps) {
  return (
    <>
      <div onClick={() => props.handleShow()} className="hover-item">
        <h1>{props.pizza.name}</h1>
        <img
          src={props.pizza.image}
          alt={props.pizza.name}
          className="img-fluid"
          style={{ height: "200px", width: "200px" }}
        />
      </div>
      <div className="flex-container">
        <div className="m-1 w-100">
          <p>Variants</p>
          <select
            className="form-control"
            value={props.variant}
            onChange={(e) => {
              props.setVariant(
                e.currentTarget.value as "small" | "medium" | "large"
              );
            }}
          >
            {props.pizza.variant.map((option: string, key: number) => {
              return <option key={key}>{option}</option>;
            })}
          </select>
        </div>
        <div className="m-1 w-100">
          <p>Quantity</p>
          <select
            className="form-control"
            value={props.quantity}
            onChange={(e) => {
              props.setQuantity(Number(e.currentTarget.value));
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((quantity, key) => {
              return <option key={key}>{quantity}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-1">
            Price : {props.pizza.prices[0][props.variant] * props.quantity}
          </h1>
        </div>
        <div className="m-1 w-100">
          <button
            className="btn"
            onClick={() => {
              props.addToCart(props.pizza);
              alert("Added to Cart!");
            }}
          >
            ADD TO CART
          </button>
        </div>
      </div>
      {JSON.parse(localStorage.getItem("isAdmin") as string) ? (
        <div className="flex-container">
          <div className="m-1 w-100">
            <FontAwesomeIcon
              icon={faTrashAlt}
              style={{ color: "red" }}
              className="hover-item"
              onClick={() => {
                props.deletePizza();
              }}
            />
          </div>
          <div className="m-1 w-100">
            <FontAwesomeIcon
              icon={faEdit}
              style={{ color: "green" }}
              className="hover-item"
              onClick={() => {
                props.handleUpdateModalShow();
              }}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default PizzaItem;
