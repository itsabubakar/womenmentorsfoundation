import Article from "./_child/ArticleLink"
import Link from "next/link"
import Image from "next/image"

const SectionOne = () => {
    return (
        <div className="flex mt-20 flex-wrap xl:flex-nowrap gap-y-10 justify-center mb-14">
            <Link href={'/articles/articleOne'}>
                <div className="w-full cursor-pointer hover:opacity-75 transition ease-in">
                    <div>
                        <Image alt="" src={`https://images.unsplash.com/photo-1573167627769-e201a7ddf409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80`} width={500} height={300} />
                    </div>
                    <div className="px-5 py-3">
                        <h2 className="text-xl xl:text-2xl text-gray-800">Leadership women are often seen as the pillars of their organizations.</h2>
                        <p className="mt-4 text-gray-600 text-base">Grace Jacobs</p>
                    </div>
                </div>
            </Link>
            <Link href={'/articles/articleTwo'}>
                <div className="w-full cursor-pointer hover:opacity-75 transition ease-in">
                    <div>
                        <Image alt="" src={`https://images.unsplash.com/photo-1573164574397-dd250bc8a598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjB3b21lbiUyMHdvcmtpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`} width={500} height={300} />
                    </div>
                    <div className="px-5 py-3">
                        <h2 className="text-xl xl:text-2xl text-gray-800">Building Your Own Mentoring Circle of Women</h2>
                        <p className="mt-4 text-gray-600 text-base">Grace Jacobs</p>
                    </div>
                </div>
            </Link>
            <Link href={'/articles/articleThree'}>
                <div className="w-full cursor-pointer hover:opacity-75 transition ease-in">
                    <div>
                        <Image alt="" src={`https://images.unsplash.com/photo-1487546331507-fcf8a5d27ab3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsYWNrJTIwd29tZW4lMjB3b3JraW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`} width={500} height={300} />
                    </div>
                    <div className="px-5 py-3">
                        <h2 className="text-xl xl:text-2xl text-gray-800">Who is a mentor</h2>
                        <p className="mt-4 text-gray-600 text-base">Fahad Bilyamin</p>
                    </div>
                </div>
            </Link>
            <Link href={'/articles/articleFour'}>
                <div className="w-full cursor-pointer hover:opacity-75 transition ease-in">
                    <div>
                        <Image alt="" src={`https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGJsYWNrJTIwd29tZW4lMjB3b3JraW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`} width={500} height={300} />
                    </div>
                    <div className="px-5 py-3">
                        <h2 className="text-xl xl:text-2xl text-gray-800">Women in the workspace</h2>
                        <p className="mt-4 text-gray-600 text-base">Fahad Bilyamin</p>
                    </div>
                </div>
            </Link>

        </div>
    )
}

export default SectionOne