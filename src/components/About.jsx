// About component definition
const About = () => {
    return (
        // Main container with background gradient and full screen height
        <div name="about" className='w-full h-screen bg-gradient-to-b from-indigo-900 to-slate-900 text-slate-400'>

            {/* Inner container with max width, padding, centered content, and full height */}
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

                {/* Section title */}
                <div className='pt-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-slate-500'>
                        About
                    </p>
                </div>

                {/* Paragraph with introduction and background information */}
                <p className='text-xl mt-10 py-2 text-slate-400'>
                    Hi, my name is Aditya Basak and I am a developer with over 2 years of experience building websites and applications for clients all around the world. I am passionate about creating beautiful, responsive websites that solve real-world problems and provide an exceptional user experience.
                </p>

                {/* Paragraph with technical skills and specialization */}
                <p className='text-xl mt-5 text-slate-400'>
                    As a developer, I specialize in using HTML, CSS, and JavaScript to create visually stunning and intuitive websites that are optimized for performance and accessibility. I have experience working with a range of frameworks, including Bootstrap, React, Tailwind, Next JS & Firebase, and I am always eager to learn new tools and techniques to improve my craft.
                </p>

            </div>
        </div>
    )
}

export default About;
