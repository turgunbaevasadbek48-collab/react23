import { Link } from 'react-router-dom';

const Meals = ({ meal }) => {
  return (
    <div className='left'
      style={{
        width: '280px',
        height: '300px',
    }}>
      <Link to={`/meal/${meal.id}`}>
        <img style={{
          width: '250px',
          height: '300px',
          borderRadius: '20px'
        }} src={meal.thumbnail} alt="image" />
      </Link>
    </div>
  );
};

export default Meals;