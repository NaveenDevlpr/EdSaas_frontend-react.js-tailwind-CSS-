
import { useState } from "react";
import { GrLanguage } from "react-icons/gr";
import { FaXmark,FaBars } from "react-icons/fa6";
import {Link} from 'react-scroll'
import logo from '../assets/logo.png'
const Navbar = () => {

    const [isMenuOpen,setisMenuOpen]=useState(false);

    const toggleMenu=()=>{
        setisMenuOpen(!isMenuOpen)   
    }
    const navLinks=[
        {
        link:'Overview',
        path:'home'
        },
        {
            link:'Feature',
            path:'feature'
            },
            {
                link:'Pricing',
                path:'pricing'
                },
                {
                    link:'About',
                    path:'about'
                    },
    ]
  return (
    <>
        <nav className='bg-white md:px-14 py-5 max-w-screen-2xl mx-auto border-b text-primary fixed top-0 right-0 left-0 px-4'>
            <div className='text-xl flex justify-between container mx-auto items-center font-medium'>
                <div className='flex items-center space-x-16'>
                    <a className='text-2xl flex items-center space-x-2 font-semibold text-primary' href="#">
                        <img src={logo} alt="" className="w-10 inline-block items-center "/><span>SkillUp</span>
                    </a>
                    <ul className="md:flex space-x-7 hidden">
                        {
                            navLinks.map((e,index)=>{
                                return(
                                    <Link className='block hover:text-secondary ' to={e.path} spy={true} smooth={true} offset={-80} href={e.path} key={index}>
                                        {e.link}
                                    </Link>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className='space-x-10 hidden md:flex items-center'>
                    <a href="#" className='hidden lg:flex items-center hover:text-secondary'><GrLanguage className='mr-2'/>Language</a>
                    <button className='bg-secondary text-white rounded-md px-4 py-2 transition-all duration-300 hover:text-white hover:bg-indigo-600'>Sign Up</button>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300 '>
                        {
                            isMenuOpen?<FaXmark className="w-6 h-6 text-primary"/>:<FaBars className="w-6 h-6 text-primary"/>
                        }
                    </button>
                </div>
            </div>
        </nav>

        <div className={`md:hidden space-y-10 px-4 pt-20 pb-5 text-xl  bg-secondary ${isMenuOpen?'block fixed top-0 right-0 left-0':'hidden'}`}>
                         {
                            navLinks.map((e,index)=>{
                                return(
                                    <Link className='block text-white ' to={e.path} spy={true} smooth={true} offset={-80} href={e.path} key={index} onClick={toggleMenu}>
                                        {e.link}
                                    </Link>
                                )
                            })
                        }
        </div>
    </>
  )
}

export default Navbar