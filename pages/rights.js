import Header from "../components/Header"
import Newsletter from "../components/Newsletter"
import RightsConc from "../components/RightsConc"

const rights = () => {
    return (
        <div>
            <Header
                title={"Womens' Right"}
                text={"More girls are going to school, fewer girls are forced into early marriage, more women are serving in parliament and positions of leadership, and laws are being reformed to advance gender equality."} />
            <RightsConc />
            <Newsletter />
        </div>
    )
}

export default rights