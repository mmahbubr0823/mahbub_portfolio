import { NavLink } from "react-router-dom";
import { FaHome, FaTrophy,  FaUser, FaUserGraduate ,  } from "react-icons/fa";
import { IoListOutline } from "react-icons/io5";
import { AiFillCarryOut } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";



const NavBar = () => {
    const navItems = <>
        <li className="flex items-center"> <NavLink to="/" className={({ isActive }) => isActive ? 'underline text-green-400 flex items-center gap-2' : 'hover:text-green-600 flex items-center gap-2'}>
        <FaHome className="text-xl"></FaHome> Home
        </NavLink></li>
        <li ><NavLink className={({ isActive }) => isActive ? 'underline text-green-400 flex items-center gap-2' : 'hover:text-green-600 flex items-center gap-2'} to="/about"><FaUser className="text-xl"></FaUser>About</NavLink></li>
        <li ><NavLink className={({ isActive }) => isActive ? 'underline text-green-400 flex items-center gap-2' : 'hover:text-green-600 flex items-center gap-2'} to="/service"><IoListOutline></IoListOutline> Services</NavLink></li>
        <li ><NavLink className={({ isActive }) => isActive ? 'underline text-green-400 flex items-center gap-2' : 'hover:text-green-600 flex items-center gap-2'} to="/skills"><FaTrophy></FaTrophy>Skills</NavLink></li>
       
        <li className="lg:mr-0 mb-2 lg:mb-0"><NavLink className={({ isActive }) => isActive ? 'underline text-green-400 flex items-center gap-2' : 'hover:text-green-600 flex items-center gap-2'} to="/projects"><AiFillCarryOut></AiFillCarryOut>Projects</NavLink></li>
        <li className="lg:mr-0 mb-2 lg:mb-0"><NavLink className={({ isActive }) => isActive ? 'underline text-green-400 flex items-center gap-2' : 'hover:text-green-600 flex items-center gap-2'} to="/contact"><AiFillMessage></AiFillMessage>Contact</NavLink></li>
    </>
    return (
        <div>
            <nav className=" w-full h-[100vh] max-w-screen-x bg-[#3c393c] bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-10">
                <div>
                    <div className="container mx-auto flex flex-col justify-between text-gray-900">
                        <a
                            href="#"
                            className="mr-4 block cursor-pointer py-1.5 font-sans text-sm font-normal leading-normal text-inherit antialiased"
                        >
                            <span className="uppercase text-3xl text-white font-bold">MAH<span className="text-[#20c997]">B</span>U<span className="text-[#20c997]">B</span></span>
                        </a>
                        <div className="mt-36">
                            <ul className="hidden gap-6 lg:flex flex-col text-white text-left">
                                {
                                    navItems
                                }

                            </ul>

                        </div>
                        <button
                            className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                            data-collapse-target="navbar"
                        >
                            <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div
                        className="block h-0 w-full basis-full overflow-hidden text-blue-gray-900 transition-all duration-300 ease-in lg:hidden"
                        data-collapse="navbar"
                    >
                        <div className="container mx-auto pb-2">
                            <ul className="mt-2 mb-4 flex flex-col gap-2">
                                {
                                    navItems
                                }                        </ul>
                            <button
                                className="middle none center mb-2 block w-full rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                data-ripple-light="true"
                            >
                                <span>Buy Now</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;