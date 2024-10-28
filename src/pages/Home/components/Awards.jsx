export default function Awards() {
  return (
    <div className="p-5 flex dark:bg-blue-gray-200">
      <div className="w-3/12">
        <h1 className="font-black md:text-xl sticky top-24 dark:text-white ">
          AWARDS
        </h1>
      </div>
      <div className="w-full px-5">
        <div className="flex items-center justify-center p-10">
          <h1 className="text-2xl italic">No awards available</h1>
        </div>
      </div>
    </div>
  );
}
