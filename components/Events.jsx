import Image from "next/image"
import Link from "next/link"
import ArticleLink from "./ArticleLink"
import ArticleImg from '../public/images/article-img.jpg'


const Events = () => {
    return (
        <section className="flex flex-col gap-10 justify-center max-w-5xl mx-auto py-10">
            <div className="px-5 md:px-0">
                <ArticleLink
                    link={''}
                    tag={'upcoming'}
                    title={'2023 Women Conference'}
                    date={'30th November, 2023'}
                    time={'10AM'}
                    loc={'Conference Hall, Sardauna Memorial Foundation'}
                    ArticleImg={ArticleImg}

                />
                <ArticleLink
                    link={''}
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

export default Events