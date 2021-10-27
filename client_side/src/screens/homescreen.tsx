import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPizzas } from "./../redux/actions/pizzaAction";
import Pizza from "../components/pizza/pizza";
import { RootState } from "../redux/store";
import { Pizzas } from "./../interfaces/interfaces";

function Homescreen() {
  const pizzas: Pizzas[] = useSelector(
    (state: RootState) => state.allPizzas.pizzas
  );
  const dispatch = useDispatch();
  const [categoryPizzas, setCategoryPizzas] = useState([] as Pizzas[]);
  const [isLoaded, setLoaded] = useState(false);
  const [category, selectedCategory] = useState("all");
  const [isScreenUpdated, setScreenUpdated] = useState(false);

  //getting pizzas fromn database
  function getPizzas() {
    axios
      .get("http://localhost:5000/getPizzas")
      .then((res) => {
        dispatch(setPizzas(res.data));
        setScreenUpdated(false);
      })
      .catch((e) => {
        console.log(e);
        setLoaded(true);
      });
  }

  useEffect(() => {
    getPizzas();
  }, [isScreenUpdated]);

  //handling the filter functionality based on pizzas being veg, nonveg or all
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    selectedCategory(e.currentTarget.value);
    if (e.currentTarget.value === "veg" || "nonveg") {
      setCategoryPizzas(
        pizzas.filter((pizza) => {
          return pizza.category === e.currentTarget.value;
        })
      );
    }
  };

  if (!pizzas[0] && !isLoaded) {
    return (
      <div className="d-flex mt-5 justify-content-center">
        <div className="spinner-border" role="status"></div>
      </div>
    );
  }

  if (!pizzas[0])
    return (
      <div className="alert alert-danger" role="alert">
        Oops! unable to load data! Maybe, you have lost your internet connection
      </div>
    );

  return (
    <>
      <div className="container">
        <div className="row mt-5 bg-white rounded shadow-lg p-3 mb-5 justify-content-center">
          <div className="col-md-4 m-3">
            <select
              className="form-select"
              onChange={(e) => {
                handleChange(e);
              }}
            >
              <option value="all">All</option>
              <option value="veg">Veg</option>
              <option value="nonveg">Non Veg</option>
            </select>
          </div>
        </div>
        <div className="row">
          {category === "all"
            ? pizzas.map((pizza, key) => {
                return (
                  <div
                    className="col-md-6 row-eq-height"
                    data-aos="fade-up"
                    key={key}
                  >
                    <Pizza pizza={pizza} setScreenUpdated={setScreenUpdated} />
                  </div>
                );
              })
            : categoryPizzas.map((pizza, key) => {
                return (
                  <div
                    className="col-md-6 row-eq-height"
                    data-aos="fade-up"
                    key={key}
                  >
                    <Pizza pizza={pizza} setScreenUpdated={setScreenUpdated} />
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
}

export default Homescreen;
