import Header from "../components/Header"
import Newsletter from "../components/Newsletter"
import RightsConc from "../components/RightsConc"

const rights = () => {
    return (
        <div>
            <Header
                title={"Womens' Right"}
                text={"Laws are being reformed to advance gender equality."} />
            <RightsConc />
            <Newsletter />
        </div>
    )
}

export default rights