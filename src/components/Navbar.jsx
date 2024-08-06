import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

// NavBar component definition
const NavBar = () => {
    // State to handle the visibility of the mobile navigation menu
    const [nav, setNav] = useState(false);

    // Array of links to be displayed in the navigation bar
    const links = [
        { id: 1, link: 'home' },
        { id: 2, link: 'about' },
        { id: 3, link: 'portfolio' },
        { id: 4, link: 'experience' },
        { id: 5, link: 'contact' },
    ];

    return (
        // Navigation bar container
        <div className='flex justify-between items-center w-full h-20 px-4 text-slate-300 bg-slate-900 fixed'>
            {/* Logo or brand name */}
            <div>
                <h1 className='text-5xl font-signature ml-2'>Aditya</h1>
            </div>

            {/* Navigation links for desktop view */}
            <ul className=' hidden md:flex'>
                {links.map(({ id, link }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium text-slate-400 hover:scale-105 duration-200'>
                        {/* Smooth scroll link */}
                        <Link to={link} smooth offset={-165} duration={500}>{link}</Link>
                    </li>
                ))}
            </ul>

            {/* Hamburger menu icon for mobile view */}
            <div onClick={() => setNav(!nav)} className=' cursor-pointer pr-4 z-10 text-slate-500 md:hidden'>
                {/* Toggle between hamburger and close icon */}
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {/* Mobile navigation menu */}
            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-slate-900 to-indigo-900'>
                    {links.map(({ id, link }) => (
                        <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                            {/* Smooth scroll link and close menu on click */}
                            <Link onClick={() => setNav(!nav)} to={link} smooth offset={-80} duration={500}>{link}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default NavBar;
