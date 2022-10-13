import Image from "next/image"

const articleTwo = () => {
    return (
        <div>
            <div className="relative grid justify-center">
                <Image alt="" src={`https://images.unsplash.com/photo-1573164574397-dd250bc8a598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjB3b21lbiUyMHdvcmtpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`} width={600} height={300} />
                <h1 className="absolute justify-self-center top-1/2 text-white mx-2 text-2xl underline bottom-2 sm:max-w-lg sm:px-5">Building your own mentoring circle</h1>
            </div>
            <div className="my-20 mx-5 md:mx-0 flex justify-center">
                <div className="max-w-xl">
                    <p className="mb-6">Women have been historically underrepresented in the workforce, but that is starting to change. Women are often seen as less capable than their male counterparts. This is due to the fact that they are not given the same opportunities and they don`&apos;t get to learn from their mistakes.</p>
                    <p className="mb-6">Mentoring programs for women have a great impact on the empowerment of women in professional environments. These programs give them an opportunity to learn from their mistakes, and make more informed decisions in the future.</p>
                    <p className="mb-6">The importance of women mentoring other women cannot be overstated. Mentoring is an opportunity to share knowledge and skills in order to empower a younger woman with the tools and confidence she needs to succeed.</p>
                    <p>Many organizations offer mentoring programmes for young female professionals, but this doesn`&apos;t always mean that they are successful. One of the main reasons is that many young women are not aware of these programmes or simply don`&apos;t know how to get involved. The following offers some ideas for how companies can make their mentoring programmes more visible and accessible, as well as some tips on how you can mentor others effectively.</p>
                </div>

            </div>
        </div>
    )
}

export default articleTwo