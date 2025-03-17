import Logo from "../Logo";
import MobileNav from "./MobileNav";
import ToggleButton from "./ToggleButton";

import { useState } from "react";

const Header = ({ darkMood, setDarkMood }) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  // toggle the menu button
  const handleClick = () => {
    const btn = document.getElementById("menu-btn");
    btn.classList.toggle("open");

    // toggle and animate the nav
    if (isMenuShown) {
      document.querySelector("#menu").classList.add("fade-nav");
      setTimeout(() => {
        setIsMenuShown(false);
      }, 1000);
    } else {
      setIsMenuShown(true);
    }
  };

  return (
    <header className="relative container mx-auto  p-6 flex items-center justify-between">
      {/* logo image */}
      <Logo darkMood={darkMood} />

      <nav>
        {/* menu items */}
        <ul className="hidden lg:flex space-x-6">
          <li>
            <a
              href="#"
              className="hover:text-Dark-Grayish-Blue transition-colors"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-Dark-Grayish-Blue transition-colors"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-Dark-Grayish-Blue transition-colors"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-Dark-Grayish-Blue transition-colors"
            >
              Careers
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-Dark-Grayish-Blue transition-colors"
            >
              Community
            </a>
          </li>
        </ul>

        {/* toggle button */}
        <ToggleButton darkMood={darkMood} setDarkMood={setDarkMood} />

        {isMenuShown ? <MobileNav /> : null}
      </nav>

      {/* Hamburger Icon */}
      <button
        aria-label="Toggles the Navigation Menu"
        id="menu-btn"
        className="hamburger absolute right-6 transition-all w-[24px] h-[24px] cursor-pointer lg:hidden focus:outline-none"
        onClick={handleClick}
      >
        <span className="hamburger-top absolute top-0 left-0 w-[24px] h-[2px]   bg-Very-Dark-Blue"></span>
        <span className="hamburger-middle translate-y-[7px] absolute top-0 left-0 w-[24px] h-[2px]   bg-Very-Dark-Blue"></span>
        <span className="hamburger-bottom  absolute top-0 left-0 w-[24px] h-[2px]   bg-Very-Dark-Blue"></span>
      </button>

      {/* get started button */}
      <button>
        <a
          href="#"
          className="dark-btn p-3 px-6 font-medium text-white bg-Bright-Red rounded-full baseline hover:bg-Bright-Red-Sup-Light transition-colors duration-300 hidden text-bold lg:block"
        >
          Get Started
        </a>
      </button>
    </header>
  );
};

export default Header;
