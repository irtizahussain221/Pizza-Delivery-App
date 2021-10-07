import React from "react";
import { Modal } from "react-bootstrap";
import "./pizza.css";

interface Props {
    pizza: {
        name: string;
        variant: string[];
        prices: {
            small: number;
            medium: number;
            large: number;
        }[];
        category: string;
        image: string;
        description: string;
    }
}

class Pizza extends React.Component<Props> {
    state = {
        variant: "small" as "small" | "medium" | "large",
        quantity: 1,
        show: false
    }
    handleShow = () => {
        this.setState({ show: !this.state.show });
    }

    render() {
        return (
            <div style={{ margin: "70px", textAlign: "center" }} className="shadow-lg p-3 mb-5 bg-white rounded">
                <div onClick={() => this.handleShow()}>
                    <h1>{this.props.pizza.name}</h1>
                    <img src={this.props.pizza.image} alt={this.props.pizza.name} className="img-fluid" style={{ height: "200px", width: "200px" }} />
                </div>
                <div className="flex-container">
                    <div className="m-1 w-100">
                        <p>Variants</p>
                        <select className="form-control" value={this.state.variant} onChange={(e) => { this.setState({ variant: e.currentTarget.value }) }}>
                            {this.props.pizza.variant.map((option: string, key: number) => {
                                return <option key={key}>{option}</option>
                            })}
                        </select>
                    </div>
                    <div className="m-1 w-100">
                        <p>Quantity</p>
                        <select className="form-control" value={this.state.quantity} onChange={(e) => { this.setState({ quantity: e.currentTarget.value }) }}>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((quantity, key) => {
                                return <option key={key}>{quantity}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className="flex-container">
                    <div className="m-1 w-100">
                        <h1 className="mt-1">Price : {this.props.pizza.prices[0][this.state.variant] * this.state.quantity}</h1>
                    </div>
                    <div className="m-1 w-100">
                        <button className="btn">ADD TO CART</button>
                    </div>
                </div>
                <Modal show={this.state.show} onHide={this.handleShow}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.pizza.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ textAlign: "center" }}>
                        <img src={this.props.pizza.image} alt={this.props.pizza.name} className="img-fluid" style={{ height: "400px" }} />
                        <p>{this.props.pizza.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn" onClick={() => this.handleShow()}>CLOSE</button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
};

export default Pizza;