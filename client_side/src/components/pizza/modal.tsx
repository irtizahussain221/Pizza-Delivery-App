import { Modal } from "react-bootstrap";
import { pizzaModalProps } from "../../interfaces/interfaces";

function PizzaModal(props: pizzaModalProps) {
  return (
    <Modal show={props.show} onHide={props.handleShow}>
      <Modal.Header closeButton>
        <Modal.Title>{props.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign: "center" }}>
        <img
          src={props.image}
          alt={props.name}
          className="img-fluid"
          style={{ height: "400px" }}
        />
        <p>{props.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn" onClick={props.handleShow}>
          CLOSE
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default PizzaModal;
