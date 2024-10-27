import { CardDefault } from "./layout-card/CardDefault";

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
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="p-5 lg:p-12 w-full md:w-3/4 text-center text-base-content">
        <p>
          <span className="animate__animated animate__bounceInUp text-3xl lg:text-7xl font-black animate__delay-2s">
            FEATURED
          </span>
        </p>
        <p>
          <span className="animate__animated animate__bounceInUp text-3xl lg:text-7xl font-black animate__delay-3s">
            WORK
          </span>
        </p>
      </div>

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
