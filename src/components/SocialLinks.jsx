import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill, BsInstagram } from 'react-icons/bs'

// SocialLinks component definition
const SocialLinks = () => {

    // Array of social media links and information
    const links = [

        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/aditya-basak-84292b1b7/',
            style: 'rounded-tr-md' // Additional styling for top-right rounded corners
        },

        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/aditya9-2',
        },

        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:adityabasak7031@gmail.com',
        },

        {
            id: 4,
            child: (
                <>
                    Instagram <BsInstagram size={30} />
                </>
            ),
            href: 'https://www.instagram.com/adityaa_basak/',
        },

        {
            id: 5,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/resume.pdf',
            style: 'rounded-br-md', // Additional styling for bottom-right rounded corners
            download: true, // Indicates that this link should trigger a file download
        },
    ]

    return (
        // Container for social media links, hidden on small screens and displayed as a fixed column on larger screens
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {/* Mapping through the links array to create list items */}
                {links.map(({ id, child, href, style, download }) => (
                    <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-indigo-500 ' + style} >
                        {/* Link for each social media with dynamic styling and hover effect */}
                        <a href={href} className='flex justify-between items-center w-full text-white'
                            download={download} // Applies download attribute if needed
                            target="_blank" // Opens link in a new tab
                            rel="noreferrer"> {/* Prevents leaking referrer information */}
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialLinks
