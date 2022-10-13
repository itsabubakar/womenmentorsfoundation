

const SectionTwo = ({ bg, text, title, size, underline, mg }) => {
    return (
        <div className={`${bg} ${mg ? mg : ''} flex justify-center items-center xl:py-20 xl:px-20 p-8`}>
            <div className="bg-white max-w-[800px] p-10 rounded">
                <h2 className="text-2xl text-center font-semibold text-gray-800">{title}</h2>
                <p className={`mt-5 text-gray-800 text-center font-medium text-${size} ${underline ? underline : ''}`}>{text}</p>
            </div>
        </div>
    )
}

export default SectionTwo