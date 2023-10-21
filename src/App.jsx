import "./App.css"
import foodsJson from "./foods.json"
import FoodBox from "./components/FoodBox.jsx"
import AddFoodForm from "./components/AddFoodForm.jsx"
import { useState } from "react";

function App() {

  const [foodboxes, setFoodboxes] = useState(foodsJson)

  const deleteFoodbox = (id) => {
    setFoodboxes(foodboxes.filter(food => food.id !== id))
  }

  return (
    <div className="App">
      <h1>IronNutrition</h1>
      <div className="cards">
      <AddFoodForm />

      
      {foodboxes.map(food => {
        return <FoodBox key={food.id} food={food} deleteFoodbox={deleteFoodbox} />
      })}
      </div>     

    </div>
  );
}

export default App
