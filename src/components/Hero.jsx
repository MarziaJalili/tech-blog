import HeroImage from "../assets/images/illustration-intro.svg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 xl:px-40"
    >
      {/* left item */}
      <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
        <h1 className="max-w-lg text-4xl font-bold text-center md:text-5xl md:text-left xl:text-6xl xl:w-full">
          Bring everyone together to build better products
        </h1>
        <p className="max-w-sm text-center md:text-left text-Dark-Grayish-Blue ">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <div className="flex justify-center md:justify-start">
          <button>
            <a
              href="#"
              className="dark-btn p-3 px-6 text-white font-medium bg-Bright-Red rounded-full baseline hover:bg-Bright-Red-Sup-Light transition-colors duration-300"
            >
              Get Started
            </a>
          </button>
        </div>
      </div>

      {/* image */}
      <img src={HeroImage} alt="hero image" className="md:w-2/4" />
    </section>
  );
};

export default Hero;
