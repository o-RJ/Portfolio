import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Tech from "./component/Tech";
import Project from "./component/Project";
import Contact from "./component/Contact";

function App() {
  return <>
  <div className="fixed -z-10 min-h-screen w-full bg-[#080808]"></div>
  
  
  

    <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
      <Navbar/>
      <Hero/>
      <Tech/>
      <Project/>
      <Contact/>


    </main>
    <footer className="w-full py-8 text-center text-gray-400 text-xl">
      Robert Banks Jr. © 2025
    </footer>
  </>;
}

export default App;
