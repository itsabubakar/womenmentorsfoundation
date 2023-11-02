import Image from "next/image"
import Link from "next/link"

const ArticleLink = ({ link, tag, title, date, time, loc, ArticleImg }) => {
    return (
        <Link href={link}>
            <div className="border-b border-gray-300 pb-4 flex justify-between w-full cursor-pointer hover:opacity-75 transition ease-in  gap-2 items-center md:gap-0 py-3">
                <div className="">
                    {
                        tag == 'upcoming' && <h3 className="capitalize bg-pink-500 font-bold border-b w-fit text-white px-1 py-1 text-xs mb-1">upcoming event</h3>
                    }
                    {
                        tag == 'past' && <h3 className="capitalize bg-Moody-blue font-bold border-b w-fit text-white px-1 py-1 text-xs mb-1">past event</h3>
                    }

                    <h2 className="text-xl xl:text-2xl text-gray-800 capitalize">{title}</h2>
                    <p className="mt-1 text-gray-600 text-base">{date} | {time}<br></br>{loc}</p>
                </div>

                <div>
                    <Image className="rounded-lg" alt="" src={ArticleImg} width={130} height={100} />
                </div>
            </div>
        </Link>
    )
}
export default ArticleLink