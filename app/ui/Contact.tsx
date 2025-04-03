export default function Contact() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-yellow-200 to-yellow-50 flex justify-center items-center relative">
      {/* Decorative Background Elements */}
      <div className="absolute w-16 h-16 bg-blue-300 rounded-full top-12 left-10 animate-pulse"></div>
      <div className="absolute w-20 h-20 bg-blue-400 rounded-full bottom-16 right-16 animate-bounce"></div>
      <div className="absolute w-24 h-24 bg-blue-100 rounded-full top-1/3 left-1/4 opacity-30"></div>

      {/* Main Content */}
      <div className="flex flex-col items-center w-full px-6 sm:px-0 z-10 3xl:max-w-3/5">
        {/* Heading */}
        <h1 className="font-extrabold text-5xl sm:text-7xl text-center text-gray-800 mb-12">
          Get In <span className="text-blue-600">Touch!</span>
        </h1>

        <div className="mt-16 text-center text-gray-700">
          <h2 className="text-lg">
            Are you ready to build the next big thing?
          </h2>
          <p className="text-lg ">
            Reach out via email:{" "}
            <span className="font-bold text-blue-600">
              <a
                href="mailto:hello@jacob.dev"
              >
                jacobhaqq20@gmail.com
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
