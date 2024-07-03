import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Contacts() {
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
    <div className="container mx-auto p-5 flex bg-blue-gray-200">
      <div className="w-3/12">
        <h1 className="font-black md:text-xl sticky top-10 ">CONTACTS</h1>
      </div>
      <div className="w-full px-5">
        <div className="flex items-center justify-center p-10 flex-col gap-10">
          {contacts.map((con) => (
            <div
              key={con.link}
              className="lg:w-3/4 hover:bg-gray-400 md:p-2 rounded-xl">
              <h1 className="md:text-2xl font-bold">{con.media_name}</h1>
              <div className="py-5 space-y-4">
                <code className="text-xs hidden lg:block md:text-2xl">
                  {con.link}
                </code>
                <a
                  target="_blank"
                  className="inline-block"
                  href={`${con.link}`}>
                  <Button>Click to open</Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
