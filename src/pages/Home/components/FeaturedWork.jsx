import { CardDefault } from "./layout-card/CardDefault";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function FeaturedWork() {
  const props = [
    {
      title: "Battle for supremacy",
      description:
        "This is a supremacy project that is represent Building management system (single building). Owner maintained the website.",
      liveLink: "https://assignment-12-buildnest.web.app",
      clientSideCode:
        "https://github.com/impactgalaxy/assignment-12-client-building",
      serverSideCode:
        "https://github.com/impactgalaxy/assignment-12-server-building",
    },
    {
      title: "Volunteer management system",
      description:
        "This is a project for volunteer management system. It's really fantastic website represent volunteer work and their responsibility.",
      liveLink: " https://assignment-11-3f45a.web.app",
      clientSideCode:
        "https://github.com/impactgalaxy/assignment-11-client-volunteer",
      serverSideCode:
        "https://github.com/impactgalaxy/assignment-11-server-volunteer",
    },
    {
      title: "Northern tour",
      description:
        "It's my first fullStack website. This website represent tourism spot and manage tourist who are come from another country.",
      liveLink: "https://assignment-10-c334a.web.app",
      clientSideCode:
        "https://github.com/impactgalaxy/assignment-10-client-tourism",
      serverSideCode:
        "https://github.com/impactgalaxy/assignment-10-server-tourism",
    },
  ];
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  AOS.init();
  return (
    <div className="flex items-center justify-center flex-col dark:bg-blue-gray-600 p-4">
      <div className="p-5 lg:p-12 w-full md:w-3/4 text-center text-base-content">
        <p data-aos="fade-up">
          <span className=" text-3xl lg:text-5xl font-black dark:text-teal-50">
            MY FEATURED
          </span>
        </p>
        <p data-aos="fade-up" data-aos-delay="500">
          <span className=" text-3xl lg:text-5xl font-black">WORKS</span>
        </p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        fill="#2a384d"
        className="">
        <path d="M0 0v4l396.3 84a500.1 500.1 0 0 0 207.4 0L1000 4V0H0Z"></path>
      </svg>

      <article className="flex items-center justify-center gap-4 flex-wrap">
        {props?.map((prop) => (
          <CardDefault
            key={prop.title}
            title={prop.title}
            description={prop.description}
            link={prop.liveLink}
            client={prop.clientSideCode}
            server={prop.serverSideCode}
          />
        ))}
      </article>
    </div>
  );
}
