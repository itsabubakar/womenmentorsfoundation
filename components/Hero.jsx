import Image from 'next/image'
import hero from '../public/images/hero.jpg'
import hb from '../public/images/hb.jpeg'
import hbOne from '../public/images/hb-1.jpeg'
import hbTwo from '../public/images/hb-2.jpeg'
import { BsArrowDownShort } from 'react-icons/bs'

const Hero = () => {
    return (
        <div className='grid'>
            <div className='lg:flex-row flex-col flex justify-center gap-x-24 items-center pt-10'>
                <div className='max-w-lg mx-5'>
                    <h1 className='uppercase text-center pb-2 text-3xl font-bold text-gray-800'>women models & mentors foundation (WMM) </h1>
                    <h2 className='mt-4 lg:mt-2 font-medium text-gray-900 text-xl text-center'>-A breeding ground for character modification and shaping the minds of young girls and women alike.</h2>
                    <h2 className='mt-4 font-medium text-gray-900 text-xl text-center'>-The foundation for women&apos;s rights, human rights, social justice, and environmental sustainability..</h2>


                </div>
                <div className='pt-20 lg:pt-0 px-5 lg:px-0'>
                    <Image src={hbTwo} width={500} height={500} className='rounded' alt='hero img' />
                    <div className=' py-1 border-l-2 border-blue-900 mt-5'>
                        <h3 className='text-xl  pl-3 pb-1'>Hajiya Bilkisu Abba Ibrahim</h3>
                        <p className=' pl-3 italic pb-1'>Founder/President</p>
                        <p className=' pl-3'>Women Models & Mentors Foundation</p>
                    </div>
                </div>
            </div>
            <BsArrowDownShort className='justify-self-center mt-14 text-gray-700' size={30} />
        </div>

    )
}

export default Hero