const SectionText = ({ children, title }) => {
    return (
        <div className={` px-5 lg:px-0`}>
            <div className="pb-2">
                <h2 className={`text-3xl font-open-sans font-semibold`}>{title}</h2>
            </div>

            <p className={`text-xl`}>{children}</p>

        </div>
    )
}
export default SectionText