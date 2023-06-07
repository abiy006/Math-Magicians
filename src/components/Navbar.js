import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h1>Math Magicians</h1>
    <div className="links">
      <Link
        to="/"
        style={{
          color: 'white',
          backgroundColor: '#f1356d',
          borderRadius: '8px',
        }}
      >
        Home
      </Link>
      <Link
        to="/calculator"
        style={{
          color: 'white',
          backgroundColor: '#f1356d',
          borderRadius: '8px',
        }}
      >
        Calculator
      </Link>
      <Link
        to="/quote"
        style={{
          color: 'white',
          backgroundColor: '#f1356d',
          borderRadius: '8px',
        }}
      >
        Quote
      </Link>
    </div>
  </nav>
);

export default Navbar;
