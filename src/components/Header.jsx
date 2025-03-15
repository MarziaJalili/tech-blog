import Logo from "./Logo";
import ToggleButton from "./ToggleButton";
import { useState } from "react";

const Header = () => {
  const [darkMood, setDarkMood] = useState(false);

  return (
    <header className="font-be-vietnam-pro">
      <nav className="z-100 relative container mx-auto  p-6 flex items-center justify-between">
        {/* logo image */}
        <Logo darkMood={darkMood} />

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

        {/* button */}
        <button>
          <a
            href="#"
            className="get-started-btn p-3 px-6 font-medium text-white bg-Bright-Red rounded-full baseline hover:bg-Bright-Red-Sup-Light transition-colors duration-300 text-bold hidden md:block"
          >
            Get Started
          </a>
        </button>
      </nav>
    </header>
  );
};

export default Header;
