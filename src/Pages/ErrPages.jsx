import { Link } from 'react-router-dom';

const ErrPages = () => {
  return (
    <div>
      <h2>Opps!!!</h2>
      <Link to={'/'}>
        <button className="btn">Go back</button>
      </Link>
    </div>
  );
};

export default ErrPages;
