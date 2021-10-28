import { useState } from "react";
import { pizzaProps, Pizzas, cartItem } from "./../../interfaces/interfaces";
import PizzaModal from "./pizzaInfoModal";
import axios from "axios";
import PizzaItem from "./pizzaItem";
import UpdatePizzaModal from "./updatePizzaModal";

function Pizza(props: pizzaProps) {
  const [variant, setVariant] = useState<"small" | "medium" | "large">("small");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);
  const [showUpdateModal, setUpdateModal] = useState(false);

  //handle pizza information modal
  const handleShow = () => {
    setShow(!show);
  };

  //handle pizza update modal
  const handleUpdateModalShow = () => {
    setUpdateModal(!showUpdateModal);
  };

  //function to remove an existing element from an array
  const arrayRemove = (arr: cartItem[], value: cartItem) => {
    return arr.filter((ele) => {
      return ele !== value;
    });
  };

  //function to add an element to a cart
  const addToCart = (pizza: Pizzas) => {
    //item to be added
    let cartItem = {
      _id: pizza._id,
      quantity: quantity,
      name: pizza.name,
      image: pizza.image,
      price: pizza.prices[0][variant],
      prices: pizza.prices,
      variant: variant,
    };

    //adding the item
    let allCartItems: cartItem[] = JSON.parse(
      localStorage.getItem("cart") as string
    );

    //checking whether the item already exists
    let alreadyPresentItem = allCartItems.filter((item) => {
      return item._id === cartItem._id && item.variant === cartItem.variant;
    });

    if (alreadyPresentItem.length === 0) {
      //if the current item is not already present in the cart
      allCartItems.push(cartItem);
      localStorage.setItem("cart", JSON.stringify(allCartItems as cartItem[]));
    } else {
      //if current item is present, then avoiding duplication by updating
      cartItem.quantity = alreadyPresentItem[0].quantity + cartItem.quantity;
      cartItem.price = cartItem.quantity * cartItem.price;
      let result = arrayRemove(allCartItems, alreadyPresentItem[0]);
      result.push(cartItem);
      localStorage.setItem("cart", JSON.stringify(result as cartItem[]));
    }
  };

  //function to enable admin to delete pizza from an array permanently
  const deletePizza = () => {
    axios
      .post(
        "http://localhost:5000/deletePizza",
        {
          pizzaID: props.pizza._id,
          userid: JSON.parse(localStorage.getItem("currentUser") as string)._id,
        },
        {
          headers: {
            "auth-token": `${localStorage.getItem("jwt-token")}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Item Deleted");
          props.setScreenUpdated(true);
        }
      })
      .catch((e) => {
        alert("Something bad happened");
        console.log(e);
      });
  };

  return (
    <div
      style={{ margin: "70px", textAlign: "center" }}
      className="shadow-lg p-3 mb-5 bg-white rounded"
    >
      <PizzaItem
        pizza={props.pizza}
        handleShow={handleShow}
        variant={variant}
        setVariant={setVariant}
        quantity={quantity}
        setQuantity={setQuantity}
        addToCart={addToCart}
        deletePizza={deletePizza}
        handleUpdateModalShow={handleUpdateModalShow}
      />
      <PizzaModal
        name={props.pizza.name}
        description={props.pizza.description}
        show={show}
        handleShow={handleShow}
        image={props.pizza.image}
      />
      <UpdatePizzaModal
        pizzaID={props.pizza._id}
        showUpdateModal={showUpdateModal}
        handleUpdateModalShow={handleUpdateModalShow}
        setScreenUpdated={props.setScreenUpdated}
      />
    </div>
  );
}

export default Pizza;
