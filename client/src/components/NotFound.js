import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <h2>We don't know any restaurants by that name</h2>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
