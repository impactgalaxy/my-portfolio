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
    <div className="container mx-auto">
      <div>
        <h1 className="text-3xl lg:text-7xl font-black">My-</h1>
        <h1 className="text-3xl lg:text-7xl font-black">Expertise</h1>
        <section className="space-y-4">
          {expertise.map((exp, ind) => (
            <CardForExpertise
              key={ind}
              sl={exp.sl}
              title={exp.title}
              description={exp.description}
              price={exp.start_at}
              features={exp.features}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
