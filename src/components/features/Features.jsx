import NumberedList from "./NumberedList";

const Features = () => {
  return (
    <section
      id="features"
      className="container flex flex-col px-6 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row xl:px-40"
    >
      {/* What's different */}
      <div className="container flex flex-col place-items-center space-y-12  md:w-1/2 md:place-items-start">
        <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
          What's different about Manage?
        </h2>

        <p className="max-w-sm text-center md:text-left text-Dark-Grayish-Blue">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital teams.
        </p>
      </div>

      {/* Numbered List */}
      <NumberedList />
    </section>
  );
};

export default Features;
