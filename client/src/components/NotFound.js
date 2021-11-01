import { Link } from "react-router-dom";
// this is the 404 not found component
const NotFound = () => {
  return (
    // display 404 not found and link back to home page
    <div>
      <h1>404 - Not Found</h1>
      <h2>We don't know any restaurants by that name</h2>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
