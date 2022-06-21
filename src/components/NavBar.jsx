/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable array-callback-return */
import React,{useState} from 'react'
import { FaBars , FaTimes} from 'react-icons/fa'
import { Link, animateScroll as scroll } from "react-scroll";
import  logo  from "../assets/logo.png";
const links=[
	{
		id:1,
		link:'home'
	},
	{
		id:2,
		link:'about'
	},
	{
		id:3,
		link:'experience'
	},
	{
		id:4,
		link:'contact'
	}
]
const NavBar = () => {
	const[nav, setNav]=React.useState()
  return (
	<div className='flex justify-between items-center w-full h-20 text-white fixed bg-black px-4'>
	<div>
	<Link duration={500} to='home'>
<img src={logo} className='ml-2 h-20'/>
	</Link>
	</div>
	<ul className='hidden md:flex ' >
	{ links.map(({id, link}) =>
	<li className='px-4 cursor-pointer capitalize font-medium py-6 text-2xl'>
	<Link
                to={link}
                smooth
                duration={500}
              >{link}</Link>

	</li>)}
	</ul>
   <div  onClick={()=>setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500  md:hidden">
	{nav ? <FaTimes size={30}/>: <FaBars size={30}/>}

   </div>
   {nav  && (
	<ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
   )}

	</div>
  )
}
export default  NavBar;