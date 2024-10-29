import { Button } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
export default function Contacts() {
  const [display, setDisplay] = useState(false);
  const contacts = [
    {
      media_name: "Facebook",
      link: "https://www.facebook.com/pisacoder",
    },
    {
      media_name: "LinkedIn",
      link: "https://www.linkedin.com/in/nur-mohammad-palash",
    },
  ];

  return (
    <div className={`p-5 flex bg-white/45 dark:bg-blue-gray-900 `}>
      <div className="w-3/12">
        <h1 className="font-black md:text-xl sticky top-24 dark:text-white">
          CONTACTS
        </h1>
      </div>
      <div className="w-full px-5">
        <div className="flex items-center justify-center p-10 flex-col gap-10">
          {contacts.map((con) => (
            <div
              key={con.link}
              className="lg:w-3/4 hover:bg-gray-400 hover:dark:bg-blue-gray-700 duration-700 dark:text-white md:p-2 rounded-xl">
              <h1 className="md:text-2xl font-bold">{con.media_name}</h1>
              <div className="space-y-4">
                <code className="text-xs hidden lg:block md:text-2xl">
                  {con.link}
                </code>
                <a
                  target="_blank"
                  className="inline-block"
                  href={`${con.link}`}>
                  <Button>Follow link</Button>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div
          data-aos="fade-left"
          className={`md:w-1/2 w-full relative bg-white/45 dark:bg-[#1f2937] dark:text-white font-medium p-5 ${
            display ? "hidden" : "block"
          }`}>
          <span
            onClick={() => setDisplay(true)}
            className="absolute right-4 font-black cursor-pointer hover:bg-blue-gray-600 px-3 py-2 rounded top-1">
            X
          </span>
          <h1>Any feedback?</h1>
          <p>Please let me know your valuable feedback</p>
          <button className="btn mt-3">Send Feedback</button>
        </div>
      </div>
    </div>
  );
}
