import Link from "next/link"
import Image from "next/image"
import ArticleImg from '../public/images/article-img.jpg'


const SectionOne = () => {
    return (
        <section className="border-b mx-auto max-w-6xl pb-10 px-5 lg:px-0 mb-5">
            <h2 className="text-3xl font-bold text-white py-1 px-2 bg-pink-500 mb-6">Events</h2>

            <div className="">
                <Link href={'/articles/awards'}>
                    <div className="pb-4 flex justify-between w-full cursor-pointer hover:opacity-75 transition ease-in max-w-4xl py-3">
                        <div className="">
                            <h3 className="capitalize bg-pink-500 font-bold border-b w-fit text-white px-1 py-1 text-xs">upcoming event</h3>

                            <h2 className="text-xl xl:text-2xl text-gray-800 capitalize">Award ceremony for women political aspirants.</h2>
                            <p className="mt-1 text-gray-600 text-base">26th November, 2022 | 10AM<br></br>Unity Hall, Halal Hotel</p>
                        </div>
                        <div>
                            <Image className="rounded-lg" alt="" src={ArticleImg} width={130} height={100} />
                        </div>
                    </div>
                </Link>
                <Link href={'/articles/awards'}>
                    <div className="flex justify-between w-full cursor-pointer hover:opacity-75 transition ease-in max-w-4xl py-3">
                        <div className="">
                            <h3 className="capitalize bg-Moody-blue font-bold border-b w-fit text-white px-1 py-1 text-xs">past event</h3>

                            <h2 className="text-xl xl:text-2xl text-gray-800 capitalize">Award ceremony for women political aspirants.</h2>
                            <p className="mt-1 text-gray-600 text-base">26th November, 2022 | 10AM<br></br>Unity Hall, Halal Hotel</p>
                        </div>
                        <div>
                            <Image className="rounded-lg" alt="" src={ArticleImg} width={130} height={100} />
                        </div>
                    </div>
                </Link>


            </div>
        </section>
    )
}

export default SectionOne