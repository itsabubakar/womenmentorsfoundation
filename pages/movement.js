import Newsletter from "../components/Newsletter"
import OtherHeader from "../components/OtherHeader"

const movement = () => {
    return (
        <div>
            <OtherHeader text={"Together we will create ripples of change"} size={"text-7xl"} />
            <section className="text-2xl flex justify-center mt-28">
                <div className="max-w-3xl">
                    <p className="mb-4">We think that by providing equitable opportunities for women and girls to study, grow, and interact with others, they will be able to reach their full economic potential.</p>
                    <p className="mb-4">Every opinion is valuable and every idea counts.</p>
                    <p>We can help build a better future for everybody by working together.</p>

                </div>
            </section>
            <Newsletter />
        </div>
    )
}

export default movement