const MobileNav = () => {
  return (
    <div
      id="menu"
      className="absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 lg:hidden drop-shadow-md"
    >
      <a href="#">Pricing</a>
      <a href="#">Product</a>
      <a href="#">About Us</a>
      <a href="#">Careers</a>
      <a href="#">Community</a>
    </div>
  );
};

export default MobileNav;
