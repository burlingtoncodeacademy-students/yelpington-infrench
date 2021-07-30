// imports Link from react router dom
import { Link } from "react-router-dom";

const Header = () => {
  return (
    // link to home page when title in header is clicked
    <Link to="/">
      <h1 className="title">Yelpington</h1>
    </Link>
  );
};

export default Header;
