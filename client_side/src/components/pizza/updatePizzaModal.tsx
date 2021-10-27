import { useFormik } from "formik";
import * as yup from "yup";
import { Modal } from "react-bootstrap";
import { updatePizzaModalProps } from "../../interfaces/interfaces";
import axios from "axios";

function UpdatePizzaModal(props: updatePizzaModalProps) {
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: async (values) => {
      try {
        //updating pizza inside the database
        await axios.put(
          "http://localhost:5000/updatePizza",
          {
            updatedPizza: {
              name: values.name,
            },
            _ids: {
              userid: JSON.parse(localStorage.getItem("currentUser") as string)
                ._id,
              pizzaID: props.pizzaID,
            },
          },
          {
            headers: {
              "auth-token": `${localStorage.getItem("jwt-token")}`,
            },
          }
        );
        alert("Item updated!");
        props.setScreenUpdated(true);
      } catch (e) {
        console.log(e);
      }
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .min(5, "Name is too short!")
        .required("This field is required"),
    }),
  });
  return (
    <Modal show={props.showUpdateModal} onHide={props.handleUpdateModalShow}>
      <Modal.Header closeButton>
        <Modal.Title>Update Pizza</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign: "center" }}>
        <form onSubmit={formik.handleSubmit}>
          <input
            required
            type="text"
            placeholder="Enter the updated name"
            className={
              formik.errors.name
                ? "form-control is-invalid text-center"
                : "form-control text-center"
            }
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name ? (
            <div className="invalid-feedback">{formik.errors.name}</div>
          ) : null}
          <input type="submit" value="Update Pizza" className="btn" />
        </form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export default UpdatePizzaModal;
