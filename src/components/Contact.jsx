
// Contact component definition
const Contact = () => {
    return (
        // Main container with background gradient, full width, full screen height, padding, and text color
        <div name='contact' className='w-full h-screen bg-gradient-to-b from-slate-900 to-indigo-900 p-4 text-slate-400'>
            {/* Inner container with flexbox layout, padding, centered content, maximum width, and full height */}
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                {/* Section title and description */}
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-slate-500'>
                        Contact
                    </p>
                    <p className='py-6 text-xl'>
                        Submit the form below to get in touch with me
                    </p>
                </div>

                {/* Form container with flexbox layout for centering */}
                <div className='flex justify-center items-center'>
                    {/* Form element with action URL, POST method, and responsive layout */}
                    <form action="https://getform.io/f/2180efb7-4add-48e5-b7cf-be8549f6d8bf" method='POST' className='flex flex-col w-full md:w-1/2'>
                        {/* Input field for name */}
                        <input type="text" name="name" placeholder='Enter your name' required className='p-2 bg-transparent border-2 rounded-md text-slate-400 border-slate-400 focus:outline-none' />

                        {/* Input field for email */}
                        <input type="email" name="email" placeholder='Enter your email' required className='my-4 p-2 bg-transparent border-2 rounded-md text-slate-400 border-slate-400 focus:outline-none ' />

                        {/* Textarea for message */}
                        <textarea name="message" placeholder='Enter your message' rows="10" required className='p-2 bg-transparent border-2 rounded-md text-slate-400 border-slate-400 focus:outline-none'></textarea>

                        {/* Submit button with styling for gradient background, padding, margin, and hover effect */}
                        <button className='text-white bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                            Lets Talk
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
