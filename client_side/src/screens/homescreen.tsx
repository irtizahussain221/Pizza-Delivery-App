import React from 'react';
import Pizza from '../components/pizza/pizza';
import pizzas from '../pizzadata';

class Homescreen extends React.Component {
  render() {
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
}

export default Homescreen;