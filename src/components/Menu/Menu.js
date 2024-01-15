import "./Menu.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

const Menu = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  
  return (
    <header className="menu">
      <div className="menu-logo">
        <a href="/"><img src={process.env.PUBLIC_URL + "/img/logo-1.png"} alt="logo" /></a>
      </div>
        <nav ref={navRef}>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Skills</a>
            <a href="/">Projects</a>
            <a href="/">Contact</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes></FaTimes>
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Menu;
