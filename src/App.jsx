import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import MealDetails from './pages/mealDetails/MealDetails';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:id" element={<MealDetails />} />    
      </Routes>
    </div>
  )
};

export default App;