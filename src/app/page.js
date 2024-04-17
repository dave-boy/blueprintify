import Image from "next/image";
import Hero from "./component/Hero"; 
import Home from "./component/Home";
import Navbar from "./component/sub-component/Navbar";
import About from "./component/About";
export default function App() {
  return (
  <main className="flex min-h-screen flex-col justify-between  ${styles.responsive}`}">
   {/* <Navbar/> */}
    <Hero/>  
    <Home/>
    <About/>
  </main>
  );
}
