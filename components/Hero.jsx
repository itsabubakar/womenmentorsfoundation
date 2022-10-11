import Image from 'next/image'
import hero from '../public/images/hero.jpg'

const Hero = () => {
    return (
        <div>
            <div className='flex justify-center gap-x-24 items-center mt-[100px]'>
                <div className='max-w-[500px]'>
                    <h1 className='leading-tight uppercase text-[2.8rem] text-center font-bold text-gray-800'>Welcome to women mentors foundation</h1>
                    <h2 className='mt-2 font-medium text-gray-900 text-[1.5rem] text-center'>The foundation for women's rights, human rights, social justice, and environmental sustainability.</h2>
                    <h2 className='mt-4 font-medium text-gray-900 text-[1.5rem] text-center'>We provide a foundation for women and girls to excel. </h2>
                    <div>
                        <form action="" className='flex mt-20'>
                            <div className='grow-[1]'>
                                <input type="text" placeholder='First Name' className='border border-gray-400 rounded px-1 py-2 w-full' />
                            </div>
                            <div className='grow-[2]'>
                                <input type="text" placeholder='Email' className='border border-gray-400 rounded px-1 py-2 w-full' />
                            </div>
                            <div className='grow-[1]'>
                                <input type="submit" value='Submit' className='border border-gray-400 rounded px-1 py-2 w-full' />
                            </div>
                        </form>
                    </div>
                </div>
                <div className='rounded-full'>
                    <Image src={hero} width={500} height={400} className='rounded' />
                </div>
            </div>

        </div>

    )
}

export default Hero