import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Header.css";
import profile_image from "../../assets/me.jpg";

const navLinks = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleZoom = () => setZoomed(!zoomed);

  return (
    <>
      <header className="header-main">
        <div className="header-container">
          <div className="header-content">
            {/* Profile image (clickable) */}
            <img
              src={profile_image}
              alt="Profile"
              className="profile-image"
              onClick={toggleZoom}
            />

            <Link to="/" className="logo">
              Georgi Cholakov
            </Link>

            {/* Desktop nav */}
            <nav className="nav-links-desktop">
              {navLinks.map((link) => (
                <NavLink key={link.name} to={link.path} className="nav-link">
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Resume button */}
            <div className="cta-container-desktop">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                Resume
              </a>
            </div>

            {/* Mobile toggle */}
            <div className="mobile-menu-button-container">
              <button onClick={toggleMenu} className="mobile-menu-button">
                {isOpen ? <X className="icon" /> : <Menu className="icon" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="mobile-menu-dropdown">
            <div className="mobile-menu-links">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={toggleMenu}
                  className="mobile-nav-link"
                >
                  {link.name}
                </NavLink>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button-mobile"
                onClick={toggleMenu}
              >
                View Resume
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Full-screen zoom overlay */}
      {zoomed && (
        <div className="zoom-overlay" onClick={toggleZoom}>
          <img
            src={profile_image}
            alt="Profile enlarged"
            className="zoomed-image"
          />
        </div>
      )}
    </>
  );
};

export default Header;
