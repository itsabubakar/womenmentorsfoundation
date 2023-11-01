import Image from "next/image"


const SectionTwo = ({ imgSrc, text, title, frr }) => {
    return (
        <div className={` ${frr ? 'flex-col lg:flex-row-reverse' : 'flex-col lg:flex-row'}  px-5 lg:px-0 flex items-center justify-center gap-16 py-10 `}>
            <div className=" max-w-[528px]">
                <Image src={imgSrc} alt="" className="rounded w-full h-full lg:w-[300px] lg:h-[150px]" />
            </div>

            <div className="max-w-[500px] px-5 lg:px-0">

                <div className="pb-2">
                    <h2 className={`pb-3 text-3xl font-open-sans font-semibold underline decoration-wavy decoration-pink-500 underline-offset-[10px]`}>{title}</h2>
                </div>

                <p className={`text-xl`}>{text}</p>

            </div>

        </div>
    )
}

export default SectionTwo