import { useState } from "react";
import CartItem from "../components/cart/cartItem";
import { cartItem } from "../interfaces/interfaces";

function CartScreen() {
  let [cartItems, changeItems] = useState<cartItem[]>(
    JSON.parse(localStorage.getItem("cart") as string)
  );
  let totalAmount = 0;

  for (let i = 0; i < cartItems.length; i++) {
    totalAmount += cartItems[i].price;
  }

  const arrayRemove = (arr: cartItem[], value: cartItem) => {
    return arr.filter(function (ele) {
      return ele !== value;
    });
  };

  const deleteAnItem = (item: cartItem) => {
    changeItems(arrayRemove(cartItems, item));
    cartItems = arrayRemove(cartItems, item);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  const addQuantity = (item: cartItem) => {
    cartItems = arrayRemove(cartItems, item);
    item.quantity += 1;
    item.price +=
      item.prices[0][(item.variant as "small") || "medium" || "large"];
    cartItems.push(item);
    changeItems(cartItems);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  const removeQuantity = (item: cartItem) => {
    cartItems = arrayRemove(cartItems, item);
    item.quantity -= 1;
    item.price -=
      item.prices[0][(item.variant as "small") || "medium" || "large"];
    cartItems.push(item);
    changeItems(cartItems);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div
        className="row justify-content-center p-2 aos-init aos-animate"
        data-aos="fade-down"
        style={{ marginRight: "-15px" }}
      >
        <div className="col-md-6">
          <h2 style={{ fontSize: "40px" }}>My Cart</h2>
          {cartItems.map((item) => {
            return (
              <>
                <div className="flex-container">
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
              <button className="btn">Pay now</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartScreen;
