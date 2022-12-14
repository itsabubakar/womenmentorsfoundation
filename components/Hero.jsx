import Image from 'next/image'
import hero from '../public/images/hero.jpg'
import hb from '../public/images/hb.jpeg'
import hbOne from '../public/images/hb-1.jpeg'
import hbTwo from '../public/images/hb-2.jpeg'
import { BsArrowDownShort } from 'react-icons/bs'

const Hero = () => {
    return (
        <div className='grid'>
            <div className='xl:flex-row flex-col flex justify-center gap-x-24 items-center mt-[100px]'>
                <div className='max-w-[500px] mx-5'>
                    <h1 className='leading-[45px] xl:leading-tight uppercase text-3xl xl:text-[2.8rem] text-center font-bold text-gray-800'>Welcome to <span className='text-Moody-blue font-serif'>women models & mentors foundation<br />(WMM)</span> </h1>
                    <h2 className='mt-4 xl:mt-2 font-medium text-gray-900 text-2xl xl:text-[1.5rem] text-center'>-A breeding ground for character modification and shaping the minds of young girls and women alike.</h2>
                    <h2 className='mt-4 font-medium text-gray-900 text-2xl xl:text-[1.5rem] text-center'>-The foundation for women&apos;s rights, human rights, social justice, and environmental sustainability..</h2>
                    <div>
                        <form action="" className='block xl:flex mt-20 xl:gap-x-2'>
                            <div className='w-full mb-4 xl:w-[70%]'>
                                <input type="text" placeholder='First Name' className='border transition ease-in-out border-gray-400 rounded px-1 py-2 w-full leading-tight focus:outline-none focus:border-Moody-blue focus:border-1' />
                            </div>
                            <div className='w-full mb-4 xl:w-[100%]'>
                                <input type="text" placeholder='Email' className='border transition ease-in-out border-gray-400 rounded px-1 py-2 w-full leading-tight focus:outline-none focus:border-Moody-blue focus:border-1' />
                            </div>
                            <div className='mb-4'>
                                <input type="submit" value='SUBSCRIBE' className='border border-gray-400 px-4 h-full rounded cursor-pointer transition ease-in-out bg-Moody-blue text-white hover:text-black hover:bg-white duration-300 py-2 xl:py-0' />
                            </div>
                        </form>
                    </div>
                </div>
                <div className=''>
                    <Image src={hbTwo} width={500} height={500} className='xl:rounded' alt='hero img' />
                    <div className='pt-5'>
                        <h3 className='text-2xl border-l-2 border-blue-900 pl-5'>Hajiya Bilkisu Abba Ibrahim</h3>
                        <p className='text-lg pl-5 italic'>Founder/President</p>
                        <p className='text-lg pl-5'>Women Models & Mentors Foundation</p>
                    </div>
                </div>
            </div>
            <BsArrowDownShort className='justify-self-center mt-14 text-gray-700' size={30} />
        </div>

    )
}

export default Hero