import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import nextjs from '../assets/nextjs.png'
import firebase from '../assets/firebase.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import python from '../assets/python.png'

// Experience component definition
const Experience = () => {

    // Array of technologies with id, image source, title, and shadow style
    const techs = [
        { id: 1, src: html, title: 'HTML', style: 'shadow-orange-500' },
        { id: 2, src: css, title: 'CSS', style: 'shadow-blue-500' },
        { id: 3, src: javascript, title: 'JavaScript', style: 'shadow-yellow-500' },
        { id: 4, src: reactImage, title: 'React', style: 'shadow-blue-600' },
        { id: 5, src: tailwind, title: 'Tailwind', style: 'shadow-sky-400' },
        { id: 6, src: nextjs, title: 'Next JS', style: 'shadow-white' },
        { id: 7, src: firebase, title: 'Firebase', style: 'shadow-yellow-700' },
        { id: 8, src: github, title: 'GitHub', style: 'shadow-gray-400' },
        { id: 9, src: python, title: 'Python', style: 'shadow-lime-400' },
    ]

    return (
        // Main container with background gradient and full screen height
        <div name='experience' className='bg-gradient-to-b from-indigo-900 to-slate-900 w-full h-screen'>

            {/* Inner container with max width, centered content, and responsive padding */}
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-slate-400'>

                {/* Section title and description */}
                <div>
                    <p className='text-4xl font-bold border-b-4 border-slate-500 p-2 inline'>
                        Experience
                    </p>
                    <p className='py-6 text-xl'>
                        These are the technologies I have worked with
                    </p>
                </div>

                {/* Grid container for technology items */}
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {/* Mapping over the techs array to create individual technology items */}
                    {techs.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            {/* Technology icon */}
                            <img src={src} alt={title} className='w-20 mx-auto' />
                            {/* Technology title */}
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience;
