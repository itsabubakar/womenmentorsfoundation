const Newsletter = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-s py-32 mt-24 px-5 md:px-0">
            <p className="mb-8 text-3xl font-semibold text-center">Never miss a post or an important piece of news.</p>
            <form action="" className='block md:flex gap-x-4 max-w-3xl '>
                <div className='w-full xl:w-[70%] mb-3 md:mb-0'>
                    <input type="text" placeholder='First Name' className='border transition ease-in-out border-Sail rounded px-1 py-2 w-full leading-tight focus:outline-none focus:border-Moody-blue focus:border-1' />
                </div>
                <div className='w-full xl:w-[100%] mb-3 md:mb-0'>
                    <input type="text" placeholder='Email' className='border transition ease-in-out border-Sail rounded px-1 py-2 w-full leading-tight focus:outline-none focus:border-Moody-blue focus:border-1' />
                </div>
                <div className='w-full'>
                    <input type="submit" value='SUBSCRIBE' className='py-2 md:py-0 border border-Sail px-4 h-full rounded cursor-pointer transition ease-in-out bg-Moody-blue text-white hover:text-black hover:bg-white duration-300' />
                </div>
            </form>
        </div>
    )
}

export default Newsletter