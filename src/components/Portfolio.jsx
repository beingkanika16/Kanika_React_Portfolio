import React from "react";
import kanika from '../assets/2.jpg';
import { ImArrowRight2 } from "react-icons/im";


const Home = () => {
  return (
    // name can be used for smooth scroll, h-screen(height of screen),w(widt)
  <div name='home' className="h-screen w-full bg-gradient-to-b  from-black to-gray-500"> 
<div className="max-w-screen-lg mx-auto flex-col item-cover justify-center h-full px-4">
  <div>
    <h2>
      I am a Frontend Developer
    </h2>
    <p>
      I have 1.5+ years of Experience building and desiging software.
      Currently I am working as an Associate Software Developer .I 
      Love to work on Web Applications using Technologies like React,
      Redux, JavaScript and I am passionate to learn new Technologies 
    </p>
    <div>
      <button>
        Portfolio 
        <span>
        <ImArrowRight2/>

        </span>
      </button>
    </div>
  </div>
  <div>
    <img src={kanika} alt="Profile" />
  </div>
</div>
  </div>

  );
};

export default Home;
