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
  const [category, selectedCategory] = useState("all");
  const [isScreenUpdated, setScreenUpdated] = useState(false);

  function getPizzas() {
    axios
      .get("http://localhost:5000/getPizzas")
      .then((res) => {
        dispatch(setPizzas(res.data));
        setScreenUpdated(false);
      })
      .catch(console.log);
  }

  useEffect(() => {
    getPizzas();
  }, [isScreenUpdated]);

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

  if (!pizzas[0]) {
    return <>...Loading</>;
  }

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
      </div>
      <div className="row">
        {category === "all"
          ? pizzas.map((pizza, key) => {
              return (
                <div className="col-md-4 row-eq-height" key={key}>
                  <Pizza pizza={pizza} setScreenUpdated={setScreenUpdated} />
                </div>
              );
            })
          : categoryPizzas.map((pizza, key) => {
              return (
                <div className="col-md-4 row-eq-height" key={key}>
                  <Pizza pizza={pizza} setScreenUpdated={setScreenUpdated} />
                </div>
              );
            })}
      </div>
    </>
  );
}

export default Homescreen;
