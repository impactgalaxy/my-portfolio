import "animate.css";
import { ImQuotesLeft } from "react-icons/im";

export default function Intro() {
  return (
    <div className="p-4 dark:bg-blue-gray-900">
      {/* <p className="loading loading-ring loading-xs bg-green-700 text-green-700 size-20"></p> */}
      <h1 className="text-[#2a384d] dark:text-light-green-600 text-base font-medium tracking-tight animate__animated animate__backInLeft animate__slow">
        Most welcome to visit
      </h1>
      <h1 className="text-[#2a384d] dark:text-gray-300 font-black tracking-tight text-2xl lg:text-4xl animate__animated animate__backInLeft animate__slower">
        Nur Mohammad Palash
      </h1>
      <div className=" p-4 md:p-8">
        <div className="w-full md:w-1/2 mx-auto space-y-6">
          <h1 className="dark:text-gray-300 text-xl md:text-2xl animate__animated animate__fadeInDown">
            Hello, everyone
          </h1>
          <p className="dark:text-gray-400 font-medium text-lg animate__animated animate__fadeInUp">
            <ImQuotesLeft />
            As a full-stack web developer with expertise in both front-end and
            back-end development, I’m passionate about crafting seamless,
            dynamic web applications. I specialize in the MERN stack (MongoDB,
            Express.js, React, Node.js), which allows me to build scalable and
            responsive solutions from scratch. I’m skilled in designing user
            interfaces, managing databases, and creating efficient APIs that
            enhance the user experience. Driven by curiosity and a love for
            problem-solving, I thrive on learning new technologies and am
            committed to building applications that make an impact.
          </p>
        </div>
      </div>
    </div>
  );
}
