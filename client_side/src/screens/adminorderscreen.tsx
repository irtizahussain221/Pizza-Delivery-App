import axios from "axios";
import { useEffect, useState } from "react";
import { order } from "../interfaces/interfaces";
import Order from "../components/order/order";

function AllOrders() {
  const [ordersList, setList] = useState([] as order[]);
  const [isListUpdated, setListUpdated] = useState(false);

  //getting all orders from the database for admin
  const getOrders = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/getOrders/${
          JSON.parse(localStorage.getItem("currentUser") as string)._id
        }`,
        {
          headers: {
            "auth-token": `${localStorage.getItem("jwt-token")}`,
          },
        }
      );
      setList(data);
      setListUpdated(false);
    } catch (e) {
      console.log(e);
    }
  };

  //enabling admin to update the delivery status of orders
  const handleClick = async (orderID: string) => {
    let data = {
      orderID,
      userid: JSON.parse(localStorage.getItem("currentUser") as string)._id,
    };
    try {
      await axios.put("http://localhost:5000/updateOrderStatus", data, {
        headers: {
          "auth-token": `${localStorage.getItem("jwt-token")}`,
        },
      });
      alert("Updated!");
      setListUpdated(true);
    } catch (e) {
      console.log(e);
    }
  };

  //updating the order list every time the delivery status is updated
  useEffect(() => {
    getOrders();
  }, [isListUpdated]);

  if (!ordersList[0]) return <div>Loading...</div>;

  return (
    <div>
      {ordersList.map((order, key) => {
        return (
          <div key={key}>
            <div>
              <Order order={order} />
            </div>
            <div className="m-2">
              <button className="btn" onClick={() => handleClick(order._id)}>
                Mark as delivered
              </button>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default AllOrders;
