const Newsletter = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-s py-32 mt-24">
            <p className="mb-8 text-3xl font-semibold">Never miss a post or an important piece of news.</p>
            <form action="" className='flex gap-x-4 max-w-3xl '>
                <div className='w-[70%]'>
                    <input type="text" placeholder='First Name' className='border transition ease-in-out border-Sail rounded px-1 py-2 w-full leading-tight focus:outline-none focus:border-Moody-blue focus:border-1' />
                </div>
                <div className='w-[100%]'>
                    <input type="text" placeholder='Email' className='border transition ease-in-out border-Sail rounded px-1 py-2 w-full leading-tight focus:outline-none focus:border-Moody-blue focus:border-1' />
                </div>
                <div className=''>
                    <input type="submit" value='SUBSCRIBE' className='border border-Sail px-4 h-full rounded cursor-pointer transition ease-in-out bg-Moody-blue text-white hover:text-black hover:bg-white duration-300' />
                </div>
            </form>
        </div>
    )
}

export default Newsletter