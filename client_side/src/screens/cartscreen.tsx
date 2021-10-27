import axios from "axios";
import { useState } from "react";
import CartItem from "../components/cart/cartItem";
import { cartItem } from "../interfaces/interfaces";

function CartScreen({ isLoggedIn }: { isLoggedIn: boolean }) {
  let [cartItems, changeItems] = useState<cartItem[]>(
    JSON.parse(localStorage.getItem("cart") as string)
  );
  let totalAmount = 0;

  //updating the total amount based on cart items
  for (let i = 0; i < cartItems.length; i++) {
    totalAmount += cartItems[i].price;
  }

  //this function will remove an item "val" from an array "arr"
  const arrayRemove = (arr: cartItem[], value: cartItem) => {
    return arr.filter(function (ele) {
      return ele !== value;
    });
  };

  //deletes an item from the cart
  const deleteAnItem = (item: cartItem) => {
    changeItems(arrayRemove(cartItems, item));
    cartItems = arrayRemove(cartItems, item);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  //adds the quantity of an item in the cart
  const addQuantity = (item: cartItem) => {
    cartItems = arrayRemove(cartItems, item);
    item.quantity += 1;
    item.price +=
      item.prices[0][(item.variant as "small") || "medium" || "large"];
    cartItems.push(item);
    changeItems(cartItems);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  //reduces the quantity of an item in the cart
  const removeQuantity = (item: cartItem) => {
    cartItems = arrayRemove(cartItems, item);
    item.quantity -= 1;
    item.price -=
      item.prices[0][(item.variant as "small") || "medium" || "large"];
    cartItems.push(item);
    changeItems(cartItems);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  //function to order cart items to the server
  const orderItem = () => {
    if (isLoggedIn === false) return alert("You must be logged in to proceed!");
    let orderedItem = {
      email: JSON.parse(localStorage.getItem("currentUser") as string).email,
      name: JSON.parse(localStorage.getItem("currentUser") as string).name,
      userid: JSON.parse(localStorage.getItem("currentUser") as string)._id,
      orderItems: cartItems,
      orderAmount: totalAmount,
    };
    axios
      .post("http://localhost:5000/postOrders", orderedItem, {
        headers: {
          "auth-token": `${localStorage.getItem("jwt-token")}`,
        },
      })
      .then(() => {
        alert("Your order has been placed!");
      })
      .catch(console.log);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div
        className="row justify-content-center p-2"
        data-aos="fade-down"
        style={{ marginRight: "-15px" }}
      >
        <div className="col-md-6">
          <h2 style={{ fontSize: "40px" }}>My Cart</h2>
          {cartItems.map((item) => {
            return (
              <>
                <div className="flex-container" data-aos="fade-up">
                  <CartItem
                    item={item}
                    deleteAnItem={deleteAnItem}
                    addQuantity={addQuantity}
                    removeQuantity={removeQuantity}
                  />
                </div>
                <hr />
              </>
            );
          })}
        </div>
        <div className="col-md-4 text-right">
          <h2 style={{ fontSize: "45px" }}>Subtotal: Rs. {totalAmount}/-</h2>
          <div>
            <span>
              <button
                className="btn"
                onClick={() => {
                  orderItem();
                }}
              >
                Order now
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartScreen;
