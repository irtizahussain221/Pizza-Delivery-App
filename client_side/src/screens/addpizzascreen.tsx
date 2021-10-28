import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";

function AddPizza() {
  let formik = useFormik({
    initialValues: {
      name: "",
      smallPrice: 0,
      mediumPrice: 0,
      largePrice: 0,
      category: "",
      image: "",
      description: "",
    },
    onSubmit: async (values) => {
      let pizzaData = {
        name: values.name,
        variant: ["small", "medium", "large"],
        prices: [
          {
            small: values.smallPrice,
            medium: values.mediumPrice,
            large: values.largePrice,
          },
        ],
        category: values.category,
        image: values.image,
        description: values.description,
        userid: JSON.parse(localStorage.getItem("currentUser") as string)._id,
      };
      try {
        await axios.post("http://localhost:5000/addPizza", pizzaData, {
          headers: {
            "auth-token": `${localStorage.getItem("jwt-token")}`,
          },
        });
        alert("Pizza Added!");
      } catch (e) {
        alert("Something bad happened!");
        console.log(e);
      }
    },
    validationSchema: yup.object({
      name: yup.string().required().min(3, "Minimum 3 characters required"),
      smallPrice: yup.number().min(10).required(),
      mediumPrice: yup.number().min(10).required(),
      largePrice: yup.number().min(10).required(),
      category: yup.string().oneOf(["veg", "nonveg"]).required(),
      image: yup.string().url().required(),
      description: yup.string().required(),
    }),
  });

  return (
    <div className="row justify-content-center mt-5">
      <div
        className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white-rounded"
        style={{ backgroundColor: "white" }}
      >
        <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
          Add Pizza
        </h2>
        <form onSubmit={formik.handleSubmit}>
          <input
            className={
              formik.errors.name ? "form-control is-invalid" : "form-control"
            }
            type="text"
            required
            id="name"
            value={formik.values.name}
            placeholder="Enter pizza name"
            onChange={formik.handleChange}
          />
          {formik.errors.name ? (
            <div className="invalid-feedback">{formik.errors.name}</div>
          ) : null}
          <br />
          <input
            type="text"
            required
            className={
              formik.errors.category
                ? "form-control is-invalid"
                : "form-control"
            }
            id="category"
            placeholder="Enter category"
            value={formik.values.category}
            onChange={formik.handleChange}
          />
          {formik.errors.category ? (
            <div className="invalid-feedback">{formik.errors.category}</div>
          ) : null}
          <br />
          <input
            type="text"
            required
            className={
              formik.errors.description
                ? "form-control is-invalid"
                : "form-control"
            }
            id="description"
            placeholder="Enter description"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
          {formik.errors.description ? (
            <div className="invalid-feedback">{formik.errors.description}</div>
          ) : null}
          <br />
          <input
            type="text"
            placeholder="Enter pizza image's url"
            required
            className={
              formik.errors.image ? "form-control is-invalid" : "form-control"
            }
            id="image"
            value={formik.values.image}
            onChange={formik.handleChange}
          />
          {formik.errors.image ? (
            <div className="invalid-feedback">{formik.errors.image}</div>
          ) : null}
          <div className="flex-container">
            <div className="w-100 text-center">
              <input
                type="number"
                placeholder="Small Price"
                required
                className={
                  formik.errors.smallPrice
                    ? "form-control is-invalid"
                    : "form-control"
                }
                id="smallPrice"
                value={formik.values.smallPrice}
                onChange={formik.handleChange}
              />
              {formik.errors.smallPrice ? (
                <div className="invalid-feedback">
                  {formik.errors.smallPrice}
                </div>
              ) : null}
            </div>
            <div className="w-100 text-center">
              <input
                type="number"
                placeholder="Medium Price"
                required
                className={
                  formik.errors.mediumPrice
                    ? "form-control is-invalid"
                    : "form-control"
                }
                id="mediumPrice"
                value={formik.values.mediumPrice}
                onChange={formik.handleChange}
              />
              {formik.errors.mediumPrice ? (
                <div className="invalid-feedback">
                  {formik.errors.mediumPrice}
                </div>
              ) : null}
            </div>
            <div className="w-100 text-center">
              <input
                type="number"
                placeholder="Large Price"
                required
                className={
                  formik.errors.largePrice
                    ? "form-control is-invalid"
                    : "form-control"
                }
                id="largePrice"
                value={formik.values.largePrice}
                onChange={formik.handleChange}
              />
              {formik.errors.largePrice ? (
                <div className="invalid-feedback">
                  {formik.errors.largePrice}
                </div>
              ) : null}
            </div>
          </div>
          <input type="submit" value="ADD PIZZA" className="btn" />
        </form>
      </div>
    </div>
  );
}

export default AddPizza;
