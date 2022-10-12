import Article from "./_child/ArticleLink"
import Link from "next/link"

const SectionOne = () => {
    return (
        <div className="flex mt-20 flex-wrap xl:flex-nowrap gap-y-10 justify-center mb-14">
            <Link href={'/events'}><Article img={`https://images.unsplash.com/photo-1573167627769-e201a7ddf409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80`} title={'Women making difference in their workplace'} author={'Grace Jacobs'} /></Link>

            <Article img={`https://images.unsplash.com/photo-1573164574397-dd250bc8a598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjB3b21lbiUyMHdvcmtpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`} />
            <Article img={`https://images.unsplash.com/photo-1487546331507-fcf8a5d27ab3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsYWNrJTIwd29tZW4lMjB3b3JraW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`} />
            <Article img={`https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGJsYWNrJTIwd29tZW4lMjB3b3JraW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`} />
        </div>
    )
}

export default SectionOne