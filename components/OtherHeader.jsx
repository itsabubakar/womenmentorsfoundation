import Image from "next/image"
import { BsArrowDownShort } from 'react-icons/bs'

// import img from '../public/images/img-2.jpg'

const OtherHeader = ({ text }) => {
    return (
        <div className={`border-b border-2 border-b-gray-300 pt-14 pb-10`}>
            <div className=" w-full h-full flex justify-center items-center">
                <div className="max-w-4xl text-center flex flex-col items-center">
                    <h2 className={`mx-2 md:mx-0 text-3xl  xl:text-5xl font-semibold text-gray-800`}>{text}</h2>
                    <BsArrowDownShort className="mt-5 justify-self-center text-pink-700" size={70} />
                </div>
            </div>
        </div>
    )
}

export default OtherHeader