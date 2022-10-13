import Image from "next/image"

const articleThree = () => {
    return (
        <div>
            <div className="relative grid justify-center">
                <Image src={`https://images.unsplash.com/photo-1487546331507-fcf8a5d27ab3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsYWNrJTIwd29tZW4lMjB3b3JraW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`} width={600} height={300} />
                <h1 className="absolute justify-self-center top-1/2 text-white mx-2 text-2xl underline bottom-2 sm:max-w-lg sm:px-5">Who is a mentor</h1>
            </div>
            <div className="my-20 mx-5 md:mx-0 flex justify-center">
                <div className="max-w-xl">
                    <p className="mb-6">—
                        A mentor can be a person who is more experienced in a given field than the person being mentored. The term is often used to describe a professional who provides guidance and advice to the people they are mentoring.
                    </p>
                    <p className="mb-6">A mentor is someone who has been there before and can help you navigate your way through the challenges of your career. Mentors are not only for those in the early stages of their careers, but also for those on top of their game, looking to take their business or expertise to the next level.</p>
                    <p className="mb-6">Women are not given the same opportunities as men in many sectors, especially in the STEM fields. This is because they are often steered away from these areas and are not given the encouragement that they need to pursue their dreams. Women should be encouraged to pursue their passions and to take on leadership roles, which will help them grow in confidence and develop skills that will benefit them in the future.</p>
                    <p>Female mentoring can provide a number of benefits for both women, as well as for those who mentor them. It can help women gain skills that will allow them to move into leadership positions more easily, it can help with confidence building, it can improve self-esteem and it can also provide an opportunity for networking.</p>
                </div>

            </div>
        </div>
    )
}

export default articleThree