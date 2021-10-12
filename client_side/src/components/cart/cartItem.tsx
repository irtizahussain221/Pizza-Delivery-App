import {
  faTrashAlt,
  faPlusSquare,
  faMinusSquare,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cartProps } from "../../interfaces/interfaces";

function CartItem(props: cartProps) {
  return (
    <>
      <div className="text-left m-1 w-100">
        <h1>
          {props.item.name} [{props.item.variant}]
        </h1>
        <h1>
          Price: {props.item.quantity} x{" "}
          {
            props.item.prices[0][
              (props.item.variant as "small") || "medium" || "large"
            ]
          }
        </h1>
        <h1>
          Quantity:{" "}
          <FontAwesomeIcon
            className="hover-item"
            style={{ color: "green" }}
            icon={faPlusSquare}
            onClick={() => {
              props.addQuantity(props.item);
            }}
          />{" "}
          {props.item.quantity}{" "}
          <FontAwesomeIcon
            className="hover-item"
            style={{ color: "red" }}
            icon={faMinusSquare}
            onClick={() => {
              props.removeQuantity(props.item);
            }}
          />
        </h1>
      </div>
      <div className="m-1 w-100">
        <img
          src={props.item.image}
          className="img-fluid"
          alt=""
          style={{ width: "80px", height: "80px" }}
        />
      </div>
      <div className="m-1 w-100">
        <FontAwesomeIcon
          icon={faTrashAlt}
          style={{ color: "red" }}
          className="mt-5 hover-item"
          onClick={() => {
            props.deleteAnItem(props.item);
          }}
        />
      </div>
    </>
  );
}

export default CartItem;
