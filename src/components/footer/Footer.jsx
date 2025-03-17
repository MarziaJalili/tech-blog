import { useEffect, useState } from "react";
import Logo from "../Logo";
import SocialIcons from "./SocialIcons";
import ListContainer from "./ListContainer";
import Form from "./Form";
const Footer = ({ darkMood }) => {
  // modify the screen size
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [range, setRange] = useState(windowWidth > 600 ? 50 : 20);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
      setRange((prev) => {
        return windowWidth > 600 ? 50 : 20;
      });
    });
  }, []);

  // determine the total height of the page
  const totalHeight = document.documentElement.scrollHeight;
  const viewportHeight = window.innerHeight;
  const distance = totalHeight - viewportHeight;

  // generate bubbles
  const bubblesData = Array.from(
    { length: windowWidth > 1000 ? 90 : 70 },
    (_, index) => index + 1
  );

  const bubbles = bubblesData.map((number) => {
    const randomNum = Math.floor(Math.random() * range) + 10;
    const style = {
      "--i": randomNum,
      "--height": `-${distance}px`,
    };
    return (
      <span
        style={style}
        key={number}
        className={`animate-move rounded-full relative block w-[20px] h-[20px] ${
          number % 2 === 0 ? "bg-amber-200" : "bg-Bright-Red-Sup-Light"
        }`}
      ></span>
    );
  });

  return (
    <footer className="w-[100vw] bg-Very-Dark-Blue flex flex-col-reverse justify-between px-12 py-10 space-y-8 md:flex-row md:space-y-0">
      <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-center">
        <Logo darkMood={darkMood} />
        <p className="mx-auto my-6 text-center text-white md:hidden">
          Copyright &copy; 2025, All Rights Reserved.
        </p>
        <SocialIcons />
      </div>
      <ListContainer />
      <Form />
      <div
        className={`-z-1 pointer-events-none bubbles fixed flex h-[${totalHeight}] inset-0 gap-1 flex-wrap w-[100vw]`}
      >
        {bubbles}
      </div>
    </footer>
  );
};

export default Footer;
