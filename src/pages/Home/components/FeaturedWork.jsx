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
        "This is a uncompromising project that is represent volunteer management system.",
      liveLink: " https://assignment-11-3f45a.web.app",
      clientSideCode:
        "https://github.com/impactgalaxy/assignment-11-client-volunteer",
      serverSideCode:
        "https://github.com/impactgalaxy/assignment-11-server-volunteer",
    },
    {
      title: "Abc",
      description: "This is abc",
      liveLink: "Http://abc",
      clientSideCode: "this is client side",
      serverSideCode: "This is server side",
    },
  ];
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="p-5 lg:p-12 w-full md:w-3/4 text-center">
        <p>
          <span className="animate__animated animate__bounceInUp text-3xl lg:text-8xl font-bold animate__delay-2s">
            FEATURED
          </span>
        </p>
        <p>
          <span className="animate__animated animate__bounceInUp text-3xl lg:text-8xl font-bold animate__delay-3s">
            WORK
          </span>
        </p>
      </div>

      <article className="grid grid-cols-1 lg:grid-cols-2 gap-3 place-items-center">
        {props?.map((prop) => (
          <CardDefault
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
