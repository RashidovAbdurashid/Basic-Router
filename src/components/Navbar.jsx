import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/libery">Libery</Link>
      </nav>
    </div>
  );
}

export default Navbar;
