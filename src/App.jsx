import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import MealDetails from './pages/mealDetails/MealDetails';
import Category from './pages/category/Category';
import Cart from './pages/cart/Cart';
import './index.css'
import 'swiper/css';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:id" element={<MealDetails />} />
        <Route path='/cate/:id' element={<Category />} />
        <Route path='/cart/:id' element={<Cart />} />
      </Routes>
    </div>
  )
};

export default App;