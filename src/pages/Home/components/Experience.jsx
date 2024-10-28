export default function Experience() {
  const experience = [
    {
      title: "CLAVER STUDIO",
      class: "Senior photographer",
      starting_day: "2020",
      ending_day: "2021",
      description: "I was a professional photographer at CLAVER STUDIO",
    },
    {
      title: "Ibn sina diagnostic and consultation center , Mirpur",
      class: "Doctor attendant",
      starting_day: "2020",
      ending_day: "Present",
      description: "Doctor attendant",
    },
    {
      title: "Ibn sina diagnostic and consultation center , Mirpur",
      class: "Computer operator",
      starting_day: "2024",
      ending_day: "Present",
      description: "I have started a new journey as computer operator.",
    },
  ];
  return (
    <div className="p-5 flex dark:bg-blue-gray-200">
      <div className="w-3/12">
        <h1 className="font-black md:text-xl sticky top-24 dark:text-white ">
          EXPERIENCE
        </h1>
      </div>
      <div className="w-full px-5 *:border-b-2 lg:*:p-5">
        {experience.map((exp) => (
          <article key={exp.class}>
            <h1 className="font-black text-xl">{exp.title}</h1>
            <div>
              <div className="flex items-center justify-between py-5">
                <h1 className="font-black text-xl">{exp.class}</h1>
                <h1 className="font-black text-xl">
                  {`From ${exp.starting_day} - ${exp.ending_day}`}
                </h1>
              </div>
              <p className="font-bold text-lg text-gray-700">
                {exp.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
