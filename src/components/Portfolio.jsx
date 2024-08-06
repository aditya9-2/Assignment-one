import HealthZoid from '../assets/portfolio/healthzoid.jpg'
import PgLife from '../assets/portfolio/pgLife.jpg'
import boxOffice from '../assets/portfolio/box.jpg'
import Rportfolio from '../assets/portfolio/rp.jpg'
import tictactoe from '../assets/portfolio/TicTacToe.jpg'
import goloc from '../assets/portfolio/GOLOC.png'

// Portfolio component definition
const Portfolio = () => {

    // Array of portfolio items with id, image source, link, and title
    const portfolios = [
        { id: 1, src: HealthZoid, href: 'https://github.com/aditya9-2/Healthzoid', title: 'Healthzoid' },
        { id: 2, src: PgLife, href: 'https://github.com/aditya9-2/pgLife', title: 'pgLife' },
        { id: 3, src: boxOffice, href: 'https://github.com/aditya9-2/box-office', title: 'boxOffice' },
        { id: 4, src: goloc, href: 'https://github.com/aditya9-2/GOLOC', title: 'GOLOC' },
        { id: 5, src: Rportfolio, href: 'https://github.com/aditya9-2/react-portfolio', title: 'ReactPortfolio' },
        { id: 6, src: tictactoe, href: 'https://github.com/aditya9-2/tictactoe', title: 'TicTacToe' },
    ]

    return (
        // Main container with background gradient, full width, and text color
        <div name="portfolio" className='bg-gradient-to-b from-slate-900 to-indigo-900 w-full text-slate-400 md:h-screen'>
            {/* Inner container with max width, padding, centered content, and responsive height */}
            <div className='max-w-screen-lg pt-32 p-4 mx-auto flex flex-col justify-center w-full h-1/2'>
                {/* Section title and description */}
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-slate-400'>Portfolio</p>
                    <p className='py-6 text-xl'>
                        Checkout some of my work over here
                    </p>
                </div>

                {/* Grid container for portfolio items */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {/* Mapping over the portfolios array to create individual portfolio items */}
                    {portfolios.map(({ id, src, href, title }) => (
                        <div key={id} className='shadow-md shadow-teal-600 rounded-lg'>
                            {/* Image with hover effect */}
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                            {/* Button linking to the project repository */}
                            <div className='flex items-center justify-center'>
                                <a href={href} target="_blank" rel="noreferrer">
                                    <button className='w-1/2 px-6 py-3 m-4'>{title}</button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
