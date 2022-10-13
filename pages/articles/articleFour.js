import Image from "next/image"

const articleFour = () => {
    return (
        <div>
            <div className="relative grid justify-center">
                <Image src={`https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGJsYWNrJTIwd29tZW4lMjB3b3JraW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`} width={600} height={300} />
                <h1 className="absolute justify-self-center top-1/2 text-white mx-2 text-2xl underline bottom-2 sm:max-w-lg sm:px-5">Women in the workspace</h1>
            </div>
            <div className="my-20 mx-5 md:mx-0 flex justify-center">
                <div className="max-w-xl">
                    <p className="mb-6">Women are often the minority in the workplace. They are also underrepresented in leadership positions. For this reason, women mentoring is important.</p>
                    <p className="mb-6">There are many reasons why women mentoring is important. Women often have to work harder than men to get the same recognition, and they have to be more assertive than men when they want a promotion or raise. Women also have a tendency to avoid conflict and can be passive when it comes to their career goals and objectives. Mentorship can help women overcome these challenges both in the workplace and outside of it.
                    </p>
                    <p className="mb-6">Women mentors can help women develop skills that will help them succeed in the workplace by teaching them how to negotiate for raises, promotions, or new opportunities at their job. Mentors can also teach them how to balance family life with work life so that they don't feel like they're putting all their eggs into one basket by focusing on just one area of their lives.</p>
                    <p>There are many opportunities for women in the leadership field. Whether they want to lead a company or an entire country, there is no limit to what they can achieve. It is important for young girls to see women in leadership positions and understand that anything is possible.</p>
                </div>

            </div>
        </div>
    )
}

export default articleFour