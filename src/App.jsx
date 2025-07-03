import gsap from "gsap";
import { ScrollTrigger,SplitText } from "gsap/all";
import React from "react";
import Navbar from './components/Navbar.jsx'
import Hero from "./components/Hero.jsx";
import Cocktals from "./components/Cocktails.jsx";

gsap.registerPlugin(ScrollTrigger,SplitText );// to make sure both plugins can be used globally
const App=()=>{
  return(
    <main>
      <Navbar/>
      <Hero/>
      <Cocktals/>
    </main>
  )
}
export default App

