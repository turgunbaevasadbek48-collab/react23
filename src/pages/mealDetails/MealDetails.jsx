import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

const MealDetails = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/recipes/${id}`)
      .then(res => setMeal(res.data));
  }, [id]);
  if (!meal) return <h2>Hello</h2>;
  return (
    <div style={{
      width: 600,
      
    }}>
      <img style={{
        width: 300,
        height: 300,
      }} src={meal.image} alt="" />
      <h2>{meal.name}</h2>
      <p>{meal.ingredients}</p>
      <b>{meal.instructions}</b>
    </div>
  );
};

export default MealDetails;