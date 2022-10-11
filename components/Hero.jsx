import Image from 'next/image'
import hero from '../public/images/hero.jpg'
import { BsArrowDownShort } from 'react-icons/bs'

const Hero = () => {
    return (
        <div className='grid'>
            <div className='flex justify-center gap-x-24 items-center mt-[100px]'>
                <div className='max-w-[500px]'>
                    <h1 className='leading-tight uppercase text-[2.8rem] text-center font-bold text-gray-800'>Welcome to women <span className='border-b-4 border-b-Moody-blue'>mentors</span> foundation</h1>
                    <h2 className='mt-2 font-medium text-gray-900 text-[1.5rem] text-center'>The foundation for women's rights, human rights, social justice, and environmental sustainability.</h2>
                    <h2 className='mt-4 font-medium text-gray-900 text-[1.5rem] text-center'>We provide a foundation for women and girls to excel. </h2>
                    <div>
                        <form action="" className='flex mt-20 gap-x-2'>
                            <div className='w-[70%]'>
                                <input type="text" placeholder='First Name' className='border transition ease-in-out border-gray-400 rounded px-1 py-2 w-full leading-tight focus:outline-none focus:border-Moody-blue focus:border-1' />
                            </div>
                            <div className='w-[100%]'>
                                <input type="text" placeholder='Email' className='border transition ease-in-out border-gray-400 rounded px-1 py-2 w-full leading-tight focus:outline-none focus:border-Moody-blue focus:border-1' />
                            </div>
                            <div className=''>
                                <input type="submit" value='SUBSCRIBE' className='border border-gray-400 px-4 h-full rounded cursor-pointer transition ease-in-out bg-Moody-blue text-white hover:text-black hover:bg-white duration-300' />
                            </div>
                        </form>
                    </div>
                </div>
                <div className='rounded-full'>
                    <Image src={hero} width={500} height={400} className='rounded' />
                </div>
            </div>
            <BsArrowDownShort className='justify-self-center mt-14 text-gray-700' size={30} />
        </div>

    )
}

export default Hero