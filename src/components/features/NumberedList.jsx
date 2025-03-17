const NumberedList = () => {
  // data
  const featuresDate = [
    {
      heading: "Track company-wide progress",
      paragraph:
        "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
    },
    {
      heading: "Advanced built-in reports",
      paragraph:
        "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
    },
    {
      heading: "Everything you need in one place",
      paragraph:
        "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
    },
  ];

  // crating an array of the features
  const features = featuresDate.map((feature, index) => {
    return (
      <li
        key={feature.heading}
        className="flex flex-col space-y-3 md:space-y-0 md:place-items-start md:space-x-6 md:flex-row"
      >
        <div className="heading-container rounded-l-full bg-Very-Pale-Red md:bg-transparent flex items-center space-x-2">
          <span className="dark-btn px-5 py-2 text-white rounded-full md:py-l bg-Bright-Red">{`0${
            index + 1
          }`}</span>
          <h3 className="text-base font-bold md:mb-4 md:hidden">
            {feature.heading}
          </h3>
        </div>
        <div>
          <h3 className="hidden mb-4 text-lg font-bold md:block">
            {feature.heading}
          </h3>
          <p className="text-Dark-Grayish-Blue">{feature.paragraph}</p>
        </div>
      </li>
    );
  });

  // rendering the elements
  return (
    <ul className="features flex flex-col space-y-8 md:w-1/2">{features}</ul>
  );
};

export default NumberedList;
