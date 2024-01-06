import React, { useState } from "react";
import dishesData from "./data/dishesData";

const Dishes = () => {
  const [foodItems, setFoodItems] = useState([...dishesData]);

  function showAll() {
    setFoodItems([...dishesData]);
  }

  function showBreakfast() {
    const breakfastItems = dishesData.filter((item) => item.category === 'breakfast');
    setFoodItems([...breakfastItems]);
  }

  function showLunch (){
    const lunchItems = dishesData.filter((item) => item.category ==='lunch');
    setFoodItems([...lunchItems]);
  }

  function showShakes(){
    const shakesItems = dishesData.filter((item)=> item.category === 'shakes');
    setFoodItems([...shakesItems]);
  }

  console.log(foodItems);

  return (
    <div className="main">
      <h1>Our Menu</h1>
      <div>
        <p onClick={showAll}>All</p>
        <p onClick={showBreakfast}>Breakfast</p>
        <p onClick={showLunch}>Lunch</p>
        <p onClick={showShakes}>Shakes</p>
      </div>
      <div>
        {/* Render your food items here using the foodItems state */}
        {foodItems.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dishes;
