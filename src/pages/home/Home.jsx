import axios from 'axios';
import { useEffect, useState } from "react";
import Meals from '../../components/meals/Meals';

const Home = () => {
  const [meals, setMeal] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get('https://dummyjson.com/recipes/search?q=chicken')
      .then(res => {
      setMeal(res.data.recipes);
      setLoading(false);
});
  }, []);
  if (loading) return <h2>Hello</h2>;
  return (
    <div>
      <h1>Meals Menu</h1>
      {meals.map(item => (
        <Meals key={item.id} meal={item} />
      ))}
    </div>
  );
};

export default Home;