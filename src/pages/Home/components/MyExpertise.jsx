import CardForExpertise from "./layout-card/CardForExpertise";
export default function MyExpertise() {
  const expertise = [
    {
      sl: "(1)",
      title: "APP DESIGN",
      description: "Innovative app design is my favorite work",
      start_at: "$12.5",
      features: [
        "Web application design",
        "Responsive design",
        "Animation effects",
      ],
    },
    {
      sl: "(2)",
      title: "WEB DEVELOPMENT",
      description: "Most powerful and gorgeous ui when sculpting a web",
      start_at: "$19.2",
      features: [
        "Heavy or light web application",
        "Response app",
        "SEO optimization",
      ],
    },
    {
      sl: "(3)",
      title: "BACKEND MASTER",
      description:
        "Data structure and data analysis is very first choice of me",
      start_at: "$22.5",
      features: ["Data analysis", "Data structure", "Data optimization"],
    },
  ];
  return (
    <div className="dark:bg-blue-gray-800">
      <div className="p-5 lg:p-12 w-full md:w-3/4 text-center mx-auto text-base-content">
        <p data-aos="fade-up">
          <span className=" text-3xl lg:text-5xl font-black dark:text-teal-50">
            MY WORK FLOWS
          </span>
        </p>
      </div>
      <div className="relative">
        <p className="text-2xl absolute top-1/2 text-white left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
          Experience
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          fill="#2a384d"
          className="rotate-180">
          <path d="M0 0v4l396.3 84a500.1 500.1 0 0 0 207.4 0L1000 4V0H0Z"></path>
        </svg>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {expertise.map((exp) => (
          <CardForExpertise
            sl={exp.sl}
            title={exp.title}
            description={exp.description}
            price={exp.start_at}
            features={exp.features}
          />
        ))}
      </section>
    </div>
  );
}
