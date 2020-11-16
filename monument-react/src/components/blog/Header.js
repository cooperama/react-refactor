import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="vertical-center">
      <div>
        <h1>
          <Link to="/">Monument</Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
