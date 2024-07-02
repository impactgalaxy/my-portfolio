import "animate.css";
export default function Intro() {
  return (
    <div className="flex items-center justify-center border flex-col">
      <div className="p-5 lg:p-12 w-full md:w-3/4 text-center">
        <div className="flex items-center justify-center gap-3">
          <p className="loading loading-ring loading-xs bg-green-700 text-green-700"></p>
          <p className="font-bold text-[#7A7A7A]">AVAILABLE ON FREELANCING</p>
        </div>
        <p>
          {/*  */}
          <span
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            className="text-3xl lg:text-8xl font-bold">
            NUR
          </span>
        </p>
        <p>
          <span
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            className="text-3xl lg:text-8xl font-bold">
            MOHAMMAD
          </span>
        </p>
        <p>
          <span
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            className="text-3xl lg:text-8xl font-bold">
            PALASH
          </span>
        </p>
      </div>
      <div className="flex justify-between flex-col md:flex-row items-center w-full px-2 lg:px-10">
        <h1 className="md:text-lg font-bold">DHAKA, BANGLADESH</h1>
        <h1 className="md:text-lg font-bold">MERN STACK WEBDEVELOPER</h1>
      </div>
    </div>
  );
}
