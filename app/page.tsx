import About from "./ui/About";
import Home from "./ui/Home";
import Projects from "./ui/Projects";

export default function Page() {
  return (
    <div className="flex flex-col overflow-auto">
      <Home />
      <About />
      <Projects />
    </div>
  );
}
