import { scryRenderedDOMComponentsWithClass } from "react-dom/test-utils";

function App() {
  return (
    <div className="App">
      <p>App Component</p>
      {foods.map(dish => {
        return <Food key={dish.id} name={dish.name} price={dish.price} /> ;
      })}
    </div>
  );
}

const foods = [{
  id: 1,
  name: "김밥",
  price: 5000
},{
  id: 2,
  name: "국밥",
  price: 4000
},{
  id: 3,
  name: "냉면",
  price: 6000
},{
  id: 4,
  name: "돈까스",
  price: 7000
}];

function Food({name, price}){
  return (
    <div>
      <h1>I like {name} and its price is {price}.</h1>
    </div>
  )
}

export default App;
