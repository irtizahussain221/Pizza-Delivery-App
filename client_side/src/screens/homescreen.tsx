import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPizzas } from './../redux/actions/pizzaAction';
import Pizza from '../components/pizza/pizza';
import { RootState } from '../redux/store';
import {Pizzas} from './../interfaces/interfaces';

function Homescreen() {

  const pizzas: Pizzas[] = useSelector((state: RootState) => state.allPizzas.pizzas);
  const dispatch = useDispatch();

  function getPizzas() {
    axios.get('http://localhost:5000/getPizzas')
      .then((res) => { dispatch(setPizzas(res.data)) })
      .catch(console.log);
  };

  useEffect(() => {
    getPizzas();
  }, [])

  return (
    <div className="row">
      {pizzas.map((pizza, key) => {
        return <div className="col-md-4 row-eq-height" key={key}>
          <Pizza pizza={pizza} />
        </div>
      })}
    </div>
  )
}

export default Homescreen;