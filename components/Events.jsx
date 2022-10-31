import Image from "next/image"
import Link from "next/link"

const Events = () => {
    return (
        <div className="flex justify-center mt-24 mx-5 sm:mx-0">
            <div className="xl:flex-row xl:max-w-2xl flex flex-col items-center">
                <div className="">
                    <Image src="https://images.unsplash.com/photo-1578269174936-2709b6aeb913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXdhcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" width={200} height={200} alt="Event Image" />
                </div>
                <div className="mt-5 xl:ml-10 w-60 sm:w-full">
                    <Link href={'/articles/awards'}><h2 className="mb-6 xl:mb-0 cursor-pointer underline decoration-Moody-blue underline-offset-[9px] text-center text-2xl text-gray-800 hover:decoration-Sail">AWARD CEREMONY FOR WOMEN POLITICAL ASPIRANTS</h2></Link>

                    <p className="mb-2 text-sm text-gray-700 text-center xl:text-left">30th November, 2022 | 10AM | Unity Hall, Halal Hotel</p>
                    <p className="mb-2 text-gray-800 text-center xl:text-left">At the event, special awards will be given to deserving female political aspirants who contested in the last primary elections across all political parties within Kaduna state irrespective of their political party affiliations.</p>
                </div>
            </div>
        </div>
    )
}

export default Events