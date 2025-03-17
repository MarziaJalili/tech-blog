import AvatarAnisha from "../assets/images/avatar-anisha.png";
import AvatarAli from "../assets/images/avatar-ali.png";
import AvatarRichard from "../assets/images/avatar-richard.png";
import AvatarShanai from "../assets/images/avatar-shanai.png";

const Testimonials = () => {
  const testimonialsData = [
    {
      img: {
        src: AvatarAnisha,
        alt: "avatar anisha",
      },
      username: "Anisha Li",
      saying:
        "“Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
    },
    {
      img: {
        src: AvatarAli,
        alt: "avatar ali",
      },
      username: "Ali Bravo",
      saying:
        "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
    },
    {
      img: {
        src: AvatarRichard,
        alt: "avatar richard",
      },
      username: "Richard Watts",
      saying:
        " “Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone I talk to!”",
    },
    {
      img: {
        src: AvatarShanai,
        alt: "avatar shanai",
      },
      username: "Shanai Gough",
      saying:
        "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
    },
  ];

  const testimonialsArray = testimonialsData.map((testimonil, index) => (
    <li
      key={testimonil.username}
      className={`${index === 0 ? "flex" : "hidden"} ${
        index === 1 ? "md:flex" : ""
      } ${index === 2 ? "lg:flex" : ""} ${
        index === 3 ? "xl:flex" : ""
      } flex-col items-center bg-Very-Light-Gray p-6 space-y-6 rounded-lg bg md:w-1/3`}
    >
      <img
        src={testimonil.img.src}
        alt={testimonil.img.alt}
        className="w-16 -mt-14"
      />
      <h5 className="text-lg font-bold">{testimonil.username}</h5>
      <p className="text-sm text-Dark-Grayish-Blue">{testimonil.saying}</p>
    </li>
  ));

  return (
    <section className="max-w-6xl mt-32 px-5 mx-auto text-center xl:max-w-[100vw]">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center">
        What's differnet about Manage?
      </h2>
      {/* Testimonial Container */}
      <ul className="testimonials container mx-auto flex w-full items-center my-24 md:flex-wrap gap-4 md:space-x-6 md:pt-10">
        {testimonialsArray}
      </ul>
      <button>
        <a
          href="#"
          className="dark-btn p-3 px-6 text-white font-medium bg-Bright-Red rounded-full baseline hover:bg-Bright-Red-Sup-Light transition-colors duration-300"
        >
          Get Started
        </a>
      </button>
    </section>
  );
};

export default Testimonials;
