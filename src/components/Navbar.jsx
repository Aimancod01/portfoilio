import { NavLink } from "react-router-dom";
import { IoDownload } from "react-icons/io5";
function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/" className="navbar-link">
            About
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to="/portfolio" className="navbar-link">
            Portfolio
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/contact" className="navbar-link">
            Contact
          </NavLink>
        </li>
        <li className="navbar-item">
          <a
            href="https://drive.google.com/file/d/1Nes_Vzij7kiWZxaxCpYcz_1aZ7LMXLLS/view?usp=drive_link"
            className="navbar-link"
          >
            <p className="flex items-center gap-1">
              Resume <IoDownload />
            </p>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
