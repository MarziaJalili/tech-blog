import Nature from "../assets/images/nature.jpg";
import Life from "../assets/images/life.jpg";
import Tech from "../assets/images/tech.jpg";
const Main = () => {
  return (
    <main className="font-be-vietnam-pro container flex flex-col-reverse justify-between md:flex-row items-center px-6 mx-auto mt-25 mb-5 space-y-12 md:space-y-0 xl:px-40">
      <h1 className="max-w-xl text-heading text-4xl font-bold text-center md:text-6xl md:text-left xl:text-6xl xl:w-full">
        Welcome to Manage! Where You Can Find Blogs about Nature, Tech, and Life
        without Hassle!
      </h1>

      <div className="flex justify-center align-center flex-wrap gap-3 mb-10">
        <img
          src={Nature}
          alt="blog-image"
          className="w-[100px] h-[120px] object-cover rounded-2xl lg:w-[250px] lg:h-[250px]"
        />
        <img
          src={Life}
          alt="blog-image"
          className="w-[100px] h-[120px] object-cover rounded-2xl lg:w-[250px] lg:h-[250px]"
        />
        <img
          src={Tech}
          alt="blog-image"
          className="w-[100px] h-[120px] object-cover rounded-2xl lg:w-[250px] lg:h-[250px]"
        />
      </div>
    </main>
  );
};

export default Main;
