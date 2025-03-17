import React from "react";

const Cta = () => {
  return (
    <section className="cta bg-Bright-Red flex flex-col items-center justify-between px-12 w-[100vw] space-y-12 py-12 mt-24 md:py-12 md:flex-row md:space-y-0">
      <h2 className="text-5xl text-white font-bold leading-tight text-center md:text-4xl md:max-w-lg lg:max-w-xl md:text-left">
        Simplify how your team works today.
      </h2>

      <button>
        <a
          href="#"
          className="cta-btn p-3 px-6  font-medium rounded-full baseline bg-white text-Bright-Red transition-colors duration-300"
        >
          Get Started
        </a>
      </button>
    </section>
  );
};

export default Cta;
