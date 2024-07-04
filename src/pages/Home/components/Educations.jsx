import { Button } from "@chakra-ui/react";

export default function Educations() {
  const educations = [
    {
      degree: "BSc (Bachelor of Science)",
      institution: "Govt. Bangla College",
      from: "FROM 2019",
      to: "- PRESENT",
      description: `I am student of Physics department. My Bachelor degree almost near of end`,
      web_link: "https://sarkaribanglacollege.gov.bd",
    },
    {
      degree: "HSC (Higher Secondary School)",
      institution: "Dhaka Udyan Govt. College",
      from: "FROM 2017",
      to: "- 2019",
      description: `I have completed my HSC (Higher Secondary School) from most popular college Dhaka Udyan Govt. College at Mohammadpur.`,
      web_link: "https://dugc.edu.bd",
    },
    {
      degree: "SSC (Secondary School Certificate)",
      institution: "Betkhoir High School",
      from: "FROM 2015",
      to: "- 2019",
      description:
        "I am student of Physics department. My Bachelor degree almost near of end",
      web_link: "https://www.facebook.com/betkhoirhighschool/photos",
    },
    {
      degree: "JSC (Junior School Certificate)",
      institution: "Betkhoir High School",
      from: "FROM 2014",
      to: "- 2015",
      description: `My JSC (Junior School Certificate) education completed from same
              college (Betkhoir High School).`,
      web_link: "https://www.facebook.com/betkhoirhighschool/photos",
    },
    {
      degree: "Primary Education",
      institution: "Chadhuli Govt. Primary School",
      from: "Childhood",
      to: "- at certain age",
      description: `First stage of my education life is completed from Chakdholy Govt.
              Primary School that is located near my home at Sherpur in Bogura.`,
      web_link: "Not hosted yet",
    },
  ];

  return (
    <div className="container mx-auto bg-blue-gray-100 p-5 flex">
      <div className="w-3/12">
        <h1 className="font-black md:text-xl sticky top-10 ">EDUCATIONS</h1>
      </div>
      <div className="w-full px-5 *:border-b-2 lg:*:p-5 last:border-b-0">
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
              <a
                target="_blank"
                className="inline-block mt-5"
                href={`${edu.web_link}`}>
                <Button bg="green.200">Click to visit</Button>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
