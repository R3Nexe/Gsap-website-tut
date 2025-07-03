import gsap from "gsap";
import { ScrollTrigger,SplitText } from "gsap/all";
import React from "react";

gsap.registerPlugin(ScrollTrigger,SplitText );// to make sure both plugins can be used globally
const App=()=>{
  return(
    <div className="flex-center h-[100vh]">
      <h1 className="text-3xl text-indigo-300">Hello, Web!</h1>
    </div>
  )
}
export default App
