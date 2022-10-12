import Article from "./_child/ArticleLink"
import getPost from "../lib/helper"

const SectionThree = () => {
    getPost().then(res => console.log(res))
    return (
        <div className="mt-20 grid grid-cols-3 mx-20 gap-x-10 gap-y-20">

        </div>
    )
}

export default SectionThree