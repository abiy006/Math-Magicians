import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="not-found">
    <h1>Page not found!</h1>
    <p>That page You are looking for cannot be found</p>
    <Link to="/">Back to the homepage...</Link>
  </div>
);

export default NotFound;
