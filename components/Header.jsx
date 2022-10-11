
const Header = ({ title, text }) => {
    return (
        <div className="mt-14 flex justify-center">
            <div className="text-center max-w-3xl">
                <h2 className="text-4xl font-medium">{title}</h2>
                <p className="text-xl mt-10">{text}</p>
            </div>
        </div>
    )
}

export default Header