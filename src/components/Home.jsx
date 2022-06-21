/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import kanika from "../assets/3.jpg";
import { ImArrowRight2 } from "react-icons/im";

const Home = () => {
  return (
    // name can be used for smooth scroll, h-screen(height of screen),w(widt)
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      {/* Means we  have to background should be gradient from black /betweeen black and last point must ne gray */}
      {/* md:flex-row is used  for responsiveness llike if width is medium then display item in flex grow direction */}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
		  {/* sm:text-7xl is the text  for the smaller screen  */}
            I'm a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md ">
            I have 1.5+ years of Experience building and deiging software.
            Currently I am working as an Associate Software Developer .I Love to
            work on Web Applications using Tech nologies like React, Redux,
            JavaScript and I am passionate to learn new Technologies
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex  items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <ImArrowRight2 size={25} />
                {/* group on button and group-hover on the spam */}
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={kanika}
            alt="kanika image"
            className="rounded-2xl mx-auto md:w-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
