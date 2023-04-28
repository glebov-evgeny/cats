import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {

  return (
    <header className="header">
      <div className="header__container container">
        <nav className="header__nav">
          <NavLink to='/' className="header__nav-link">Все</NavLink>
          <NavLink to='/favorite' className="header__nav-link">Лучшие</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
