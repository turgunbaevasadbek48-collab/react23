import { Link } from 'react-router-dom';

const Meals = ({ meal }) => {
  return (
    <div style={{
      display: 'grid',
      gap: '30px',
      gridTemplateColumns: 'repeat(3, 1fr)',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        padding: '10px 15px',
        flexDirection: 'column',
        border: '2px solid blue',
        backgroundColor: 'blueviolet',
      }}>
        <img width={200} src={meal.image} alt="image" />
        <h2>{meal.name}</h2>
        <p>{meal.instructions}</p>
        <button style={{
          width: 200,
          height: 50,
          color: 'wheat',
          border: 'none',
          borderRadius: 15,
          backgroundColor: 'black',
        }}>
          <Link to={`/meal/${meal.id}`}>Real More</Link>
        </button>
      </div>
    </div>
  );
};

export default Meals;