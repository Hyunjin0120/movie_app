function App() {
  return (
    <div className="App">
      <p>App Component</p>
      {foods.map(food=>{
        return <Food name={food.name} price={food.price} />;
      })}
    </div>
  );
}

const foods = [{
  name: "김밥",
  price: 5000
},{
  name: "국밥",
  price: 4000
},{
  name: "냉면",
  price: 6000
},{
  name: "돈까스",
  price: 7000
}];

function Food({name, price}){
  return (
    <h1>I like {name} and its price is {price}.</h1>
  )
}

export default App;
