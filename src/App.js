import React from "react";
import PropTypes from 'prop-types';

function App() {
  return (
    <div className="App">
      <p>App Component</p>
      {foods.map(dish => {
        return <Food key={dish.id} name={dish.name} price={dish.price} rating={dish.rating} /> ;
      })}
    </div>
  );
}

const foods = [{
  id: 1,
  name: "김밥",
  price: 5000,
  rating: 3.2
},{
  id: 2,
  name: "국밥",
  price: 4000,
  rating: 1
},{
  id: 3,
  name: "냉면",
  price: 6000,
  rating: 2.1
},{
  id: 4,
  name: "돈까스",
  price: 7000,
  rating: 4.4
}];

function Food({name, price, rating}){
  return (
    <div>
      <h1>I like {name} and its price is {price}.({rating}/5)</h1>
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired
}

export default App;
