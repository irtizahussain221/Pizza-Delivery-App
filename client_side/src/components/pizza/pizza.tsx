import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Props } from './../../interfaces/interfaces';
import "./pizza.css";

function Pizza(props: Props) {

  const [variant, setVariant] = useState<"small" | "medium" | "large">("small");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  }

  return (
    <div style={{ margin: "70px", textAlign: "center" }} className="shadow-lg p-3 mb-5 bg-white rounded">
      <div onClick={() => handleShow()}>
        <h1>{props.pizza.name}</h1>
        <img src={props.pizza.image} alt={props.pizza.name} className="img-fluid" style={{ height: "200px", width: "200px" }} />
      </div>
      <div className="flex-container">
        <div className="m-1 w-100">
          <p>Variants</p>
          <select className="form-control" value={variant} onChange={(e) => { setVariant(e.currentTarget.value as "small" | "medium" | "large") }}>
            {props.pizza.variant.map((option: string, key: number) => {
              return <option key={key}>{option}</option>
            })}
          </select>
        </div>
        <div className="m-1 w-100">
          <p>Quantity</p>
          <select className="form-control" value={quantity} onChange={(e) => { setQuantity(Number(e.currentTarget.value)) }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((quantity, key) => {
              return <option key={key}>{quantity}</option>
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-1">Price : {props.pizza.prices[0][variant] * quantity}</h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn">ADD TO CART</button>
        </div>
      </div>
      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>{props.pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: "center" }}>
          <img src={props.pizza.image} alt={props.pizza.name} className="img-fluid" style={{ height: "400px" }} />
          <p>{props.pizza.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn" onClick={() => handleShow()}>CLOSE</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
};

export default Pizza;