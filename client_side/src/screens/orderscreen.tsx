import axios from "axios";
import { useEffect, useState } from "react";
import Order from "../components/order/order";
import { order } from "../interfaces/interfaces";

function OrderScreen() {
  let [ordersList, setOrders] = useState([] as any);

  //getting list of all of user's orders
  const getOrders = () => {
    let userid = JSON.parse(localStorage.getItem("currentUser") as string)._id;
    axios
      .post(
        "http://localhost:5000/getOrders",
        { userid },
        {
          headers: {
            "auth-token": `${localStorage.getItem("jwt-token")}`,
          },
        }
      )
      .then((res) => {
        setOrders(res.data);
      })
      .catch((e) => {
        console.log(e);
        alert("Something bad happened!");
      });
  };
  useEffect(() => {
    getOrders();
  }, []);

  if (!ordersList[0]) {
    return <>...Loading</>;
  }

  return (
    <div>
      <h2 className="text-center mt-5 mb-3" style={{ fontSize: "35px" }}>
        My Orders
      </h2>
      <hr />
      <div className="row justify-content-center">
        {ordersList.map((order: order, key: number) => {
          return <Order order={order} key={key} />;
        })}
      </div>
    </div>
  );
}

export default OrderScreen;
