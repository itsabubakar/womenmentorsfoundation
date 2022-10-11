

const SectionTwo = ({ bg, text, title }) => {
    return (
        <div className={`${bg} mt-20 flex justify-center items-center py-20 px-20`}>
            <div className="bg-white max-w-[800px] p-10 rounded">
                <h2 className="text-2xl text-center font-semibold text-gray-800">{title}</h2>
                <p className="mt-5 text-gray-800 text-center font-medium">{text}</p>
            </div>
        </div>
    )
}

export default SectionTwo