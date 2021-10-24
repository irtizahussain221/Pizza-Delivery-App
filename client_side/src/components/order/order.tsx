import { orderProps } from "../../interfaces/interfaces";

function Order({ order }: orderProps) {
  return (
    <div
      className="col-md-4 row-eq-height m-2 p-1 aos-init aos-animate"
      style={{ backgroundColor: "red", color: "white" }}
    >
      <div className="flex-container">
        <div className="text-center w-100 m-1">
          <h2 style={{ fontSize: "25px" }}>Items</h2>
          <hr />
          {order.orderItems.map((items, key) => {
            return (
              <div key={key}>
                <p>
                  {items.name} [{items.variant}] * {items.quantity} ={" "}
                  {items.price}
                </p>
              </div>
            );
          })}
        </div>
        <div className="text-center w-100 m-1">
          <h2 style={{ fontSize: "25px" }}>Order Info</h2>
          <hr />
          <p>Order Amount : {order.orderAmount}</p>
          <p>Date : {new Date(order.createdAt).toDateString()}</p>
          <p>Order Id : {order._id}</p>
        </div>
      </div>
    </div>
  );
}

export default Order;
