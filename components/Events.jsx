import Image from "next/image"
import img from '../public/images/img-4.jpg'

const Events = () => {
    return (
        <div className="flex justify-center mt-24">
            <div className="flex max-w-2xl">
                <div>
                    <Image src={img} width={200} height={200} alt="Event Image" />
                </div>
                <div className="ml-10">
                    <h2 className="mb-2 text-2xl text-gray-800">Women in Politics</h2>
                    <p className="mb-2 text-sm text-gray-700">November | 9AM - 5Pm</p>
                    <p className="mb-2 text-gray-800">Join us as we celebrate trendsetters, women leaders and mother of tommorrow</p>
                </div>
            </div>
        </div>
    )
}

export default Events