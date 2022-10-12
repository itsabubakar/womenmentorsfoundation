import Events from "../components/Events"
import OtherHeader from "../components/OtherHeader"

const events = () => {
    return (
        <div>
            <OtherHeader text={"Upcoming Events"} bg={'event-bg'} />
            <Events />
            <Events />
            <Events />
            <Events />
        </div>
    )
}

export default events