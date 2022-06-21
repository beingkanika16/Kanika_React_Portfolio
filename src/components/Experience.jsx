/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
	const tec=[
		{
			id:1,
			src:html,
			title: 'HTML',
			style: "shadow-orange-500",
		},
		{
			id:2,
			src:css,
			title: 'CSS',
			style: "shadow-blue-500",
		},
		{
			id:3,
			src:javascript,
			title: 'JavaScript',
			style: "shadow-yellow-500",
		},		{
			id:4,
			src:reactImage,
			title: 'React',
			style: "shadow-blue-900",
		},{
			id:5,
			src:github,
			title: 'Git Hub',
			style: "shadow-gray-500",
		},{
			id:6,
			src:'',
			title: 'Many more to come',
			style: "shadow-green-500",
		}
	]
console.log(tec.map(({id, title, src, style}) => {console.log(id, title, src, style)}))
  return (
	<div
	name="experience"
	className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
  >
	<div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
	  <div>
		<p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
		  Experience
		</p>
		<p className="py-6">These are the technologies I've worked with</p>
	  </div>

	  <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
	  		{/* so the mobile will have the 2 cols
		  sm:px-0 smaller device have the padding of 0
		*/}
		{tec.map(({ id, src, title, style }) => (
		  <div
			key={id}
			className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
		  >
			<img src={src} alt="" className="w-20 mx-auto" />
			<p className="mt-4">{title}</p>
		  </div>
		))}
	  </div>
	</div>
  </div>
  );
};

export default Experience;
