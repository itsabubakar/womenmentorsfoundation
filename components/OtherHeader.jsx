import Image from "next/image"
import { BsArrowDownShort } from 'react-icons/bs'

// import img from '../public/images/img-2.jpg'

const OtherHeader = ({ bg, text, size }) => {
    return (
        <div className={bg}>
            <div className="bg-[#00000050] w-full h-full flex justify-center items-center">
                <div className="max-w-4xl my-24 text-center flex flex-col items-center pt-4">
                    <h2 className={`mx-2 md:mx-0 text-white ${size ? size : 'text-5xl leading-[60px] xl:text-7xl'} font-semibold`}>{text}</h2>
                    <BsArrowDownShort className="mt-5 justify-self-center text-white" size={70} />
                </div>
            </div>
        </div>
    )
}

export default OtherHeader