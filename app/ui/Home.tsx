import Header from "./header";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full h-screen bg-yellow-50">
      <div className="flex flex-1 w-3/5 justify-around items-center ">
        <div className="flex flex-col w-72 3xl:max-w-1/2 p-5 border relative top-[-50px] bg-white">
          <h1 className="text-4xl">Hey! I'm Jacob</h1>
          <p className="text-xl mb-4">
            I'm a Full Stack Developer who loves to build.
          </p>
          <p className="text-xl">Check out what I can do!</p>
        </div>
        <div className="w-128 h-128 rounded-full p-5 border relative top-[-50px] bg-white"></div>
      </div>
    </div>
  );
}
