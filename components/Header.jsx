
const Header = ({ title, text }) => {
    return (
        <div className="mx-5 xl:mx-0 mt-14 flex justify-center">
            <div className="text-center max-w-3xl">
                <h2 className="text-2xl xl:text-4xl font-medium">{title}</h2>
                <p className="text-xl mt-10">{text}</p>
            </div>
        </div>
    )
}

export default Header