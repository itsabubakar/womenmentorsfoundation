import Link from "next/link"
import Image from "next/image"
import ArticleImg from '../public/images/article-img.jpg'
import Img1 from '../public/images/img1.jpg'
import Meema from '../public/images/meema4.jpg'
import ArticleLink from "./ArticleLink"


const SectionOne = () => {
    return (
        <section className="border-b mx-auto max-w-6xl pb-10 px-5 lg:px-0 mb-5">
            <h2 className="text-3xl font-bold text-white py-1 px-2 bg-pink-500 mb-6">Events</h2>

            <div className="">
                <ArticleLink
                    link={'/articles/novemberEvent'}
                    tag={'upcoming'}
                    title={'2023 Women Conference'}
                    date={'30th November, 2023'}
                    time={'10AM'}
                    loc={'Conference Hall, Sardauna Memorial Foundation'}
                    ArticleImg={Img1}

                />
                <ArticleLink
                    link={'/articles/munera'}
                    tag={'past'}
                    title={'Women Models & Mentors Foundation team on a courtesy visit to Munira Suleiman Tanimu.'}
                    date={'3rd November, 2023'}
                    ArticleImg={Meema}

                />
                <ArticleLink
                    link={'/articles/awards'}
                    tag={'past'}
                    title={'Award ceremony for women political aspirants.'}
                    date={'26th November, 2022'}
                    time={'10AM'}
                    loc={'Unity Hall, Halal Hotel'}
                    ArticleImg={ArticleImg}

                />




            </div>
        </section>
    )
}

export default SectionOne