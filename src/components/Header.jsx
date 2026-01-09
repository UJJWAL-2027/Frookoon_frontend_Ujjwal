import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h2>FROOKOON</h2>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
      </nav>
    </header>
  );
};

export default Header;
