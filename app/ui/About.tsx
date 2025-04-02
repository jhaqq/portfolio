import Image from "next/image";

export default function About() {
  return (
    <div className="h-screen w-full bg-[#FEF6E9] flex justify-center items-center">
      <div className="flex grow flex-col items-center justify-between gap-y-20 3xl:max-w-3/5">
        <h1 className="font-bold text-4xl">
          So... What Should We Build <span className="text-purple-300 italic">Next?</span>
        </h1>
        <div className="p-4 flex flex-row gap-10">
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
              See your figures in a flash. Make the right business decisions using the most up-to-date information.
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
              Mobile apps are the future. Give your business an edge with an interactive application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
