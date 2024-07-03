export default function Educations() {
  const educations = [
    {
      degree: "BSc (Bachelor of Science)",
      institution: "Govt. Bangla College",
      from: "FROM 2019",
      to: "- PRESENT",
      description:
        "I am student of Physics department. My Bachelor degree almost near of end",
    },
    {
      degree: "HSC (Higher Secondary School)",
      institution: "Dhaka Udyan Govt. College",
      from: "FROM 2017",
      to: "- 2019",
      description: `I have completed my HSC (Higher Secondary School) from most popular college Dhaka Udyan Govt. College at Mohammadpur.`,
    },
    {
      degree: "SSC (Secondary School Certificate)",
      institution: "Betkhoir High School",
      from: "FROM 2015",
      to: "- 2019",
      description:
        "I am student of Physics department. My Bachelor degree almost near of end",
    },
    {
      degree: "JSC (Junior School Certificate)",
      institution: "Betkhoir High School",
      from: "FROM 2014",
      to: "- 2015",
      description: `My JSC (Junior School Certificate) education completed from same
              college (Betkhoir High School).`,
    },
    {
      degree: "Primary Education",
      institution: "Chadhuli Govt. Primary School",
      from: "Childhood",
      to: "- at certain age",
      description: `First stage of my education life is completed from Chakdholy Govt.
              Primary School that is located near my home at Sherpur in Bogura.`,
    },
  ];

  return (
    <div className="container mx-auto bg-blue-gray-100 p-5 flex">
      <div className="w-3/12">
        <h1 className="font-black md:text-xl sticky top-10 ">EDUCATIONS</h1>
      </div>
      <div className="w-full px-5 *:border-b-2 lg:*:p-5">
        {educations.map((edu) => (
          <article key={edu.degree}>
            <h1 className="font-bold text-xl">{edu.degree}</h1>
            <div>
              <div className="flex items-center justify-between py-5">
                <h1 className="font-bold text-xl">{edu.institution}</h1>
                <h1 className="font-bold text-xl">{`${edu.from} - ${edu.to}`}</h1>
              </div>
              <p className="font-bold text-lg text-gray-700">
                {edu.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
