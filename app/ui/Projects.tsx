import Image from "next/image";

export default function Projects() {
  return (
    <div className="h-screen w-full bg-yellow-50 flex justify-center items-center">
      <div className="flex grow flex-col items-center justify-between 3xl:max-w-3/4">
        <h1 className="font-bold text-4xl mb-20">I Can Prove It, Too.</h1>
        <div className="flex flex-row gap-8 mb-10">
          <div className="py-2 px-6 bg-blue-800 rounded-xl">
            <p className="text-md text-white font-bold">All</p>
          </div>
          <div className="py-2 px-6 bg-blue-800 rounded-xl">
            <p className="text-md text-white font-bold">Websites</p>
          </div>
          <div className="py-2 px-6 bg-blue-800 rounded-xl">
            <p className="text-md text-white font-bold">Mobile Apps</p>
          </div>
          <div className="py-2 px-6 bg-blue-800 rounded-xl">
            <p className="text-md text-white font-bold">Other</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-15">
          <div className="flex flex-col items-center max-w-72">
            <div className="w-[250px] h-[190px] rounded-4xl border relative mb-6">
              <Image
                alt="skill"
                src={"/WebDev.jpg"}
                className="rounded-4xl"
                fill={true}
              />
            </div>
            <p className="mb-2 font-bold">Websites</p>
            <p className="text-center max-w-[200px]">
              Simple, yet effective. A clean site can drive your engagement and
              boost your sales.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-72">
            <div className="w-[250px] h-[190px] rounded-4xl border relative mb-6">
              <Image
                alt="skill"
                src={"/Dashboard.jpg"}
                className="rounded-4xl"
                fill={true}
              />
            </div>
            <p className="mb-2 font-bold">Dashboards</p>
            <p className="text-center max-w-[200px]">
              See your figures in a flash. Make the right business decisions
              using the most up-to-date information.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-72">
            <div className="w-[250px] h-[190px] rounded-4xl border relative mb-6">
              <Image
                alt="skill"
                src={"/MobileDev.webp"}
                className="rounded-4xl"
                fill={true}
              />
            </div>
            <p className="mb-2 font-bold">Mobile Apps</p>
            <p className="text-center max-w-[200px]">
              Mobile apps are the future. Give your business an edge with an
              interactive application.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-72">
            <div className="w-[250px] h-[190px] rounded-4xl border relative mb-6">
              <Image
                alt="skill"
                src={"/WebDev.jpg"}
                className="rounded-4xl"
                fill={true}
              />
            </div>
            <p className="mb-2 font-bold">Websites</p>
            <p className="text-center max-w-[200px]">
              Simple, yet effective. A clean site can drive your engagement and
              boost your sales.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-72">
            <div className="w-[250px] h-[190px] rounded-4xl border relative mb-6">
              <Image
                alt="skill"
                src={"/WebDev.jpg"}
                className="rounded-4xl"
                fill={true}
              />
            </div>
            <p className="mb-2 font-bold">Websites</p>
            <p className="text-center max-w-[200px]">
              Simple, yet effective. A clean site can drive your engagement and
              boost your sales.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-72">
            <div className="w-[250px] h-[190px] rounded-4xl border relative mb-6">
              <Image
                alt="skill"
                src={"/WebDev.jpg"}
                className="rounded-4xl"
                fill={true}
              />
            </div>
            <p className="mb-2 font-bold">Websites</p>
            <p className="text-center max-w-[200px]">
              Simple, yet effective. A clean site can drive your engagement and
              boost your sales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
