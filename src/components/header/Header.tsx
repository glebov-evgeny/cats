import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {

  return (
    <header className="header">
      <div className="header__container container">
        <nav className="header__nav">
          <NavLink to='/' className="header__nav-link">Все котики</NavLink>
          <NavLink to='/favorite' className="header__nav-link">Любимые котики</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
