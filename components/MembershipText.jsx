
const MembershipText = () => {
    return (
        <div className="mb-24">
            <section className="grid justify-center">
                <div className="max-w-3xl my-20 grid">
                    <h2 className="text-3xl text-center font-medium leading-[40px] mx-3 sm:mx-5 md:mx-0">We help activists, advocates, specialists, and organizations by amplifying their voices. </h2>
                    <div className="max-w-xl leading-8 justify-self-center mt-4 mx-5 md:mx-0">
                        <p className="mb-4">We help people striving to improve gender equality, human rights, and social justice via membership.</p>
                        <p className="mb-4">We intend to form an organization that will represent all parts of the country.</p>
                        <p>Our memberships help visionaries and organizations get awareness, improve their material, and make a stronger impact.</p>
                    </div>
                </div>
            </section>
            <section className="flex flex-col gap-y-10 md:flex-row gap-x-10 mx-5 md:mx-20">
                <div className="min-h-[420px] border-4 px-8 py-10 border-gray-400 text-center">
                    <h2 className="text-2xl text-gray-900">Full Time Contributor</h2>
                    <p className="text-xl text-gray-900 mb-4">No membership fee</p>
                    <p className="mb-2 text-gray-900">Publish up to 6 posts per year on womenmentorsfoundation.org*</p>
                    <p className="mb-2 text-gray-900">Editorial support, including SEO and promotion on social media and email for posts published</p>
                    <p className="mb-2 text-gray-900">Profile with your publication archive and links</p>
                    <p className="mb-2 text-gray-900 italic">*these posts should be your own stories, opinions or articles and unaffiliated with an organization</p>
                    <button className="border-2 bg-Moody-blue p-2 border-Moody-blue text-white hover:bg-Sail hover:border-Sail hover:text-black transition duration-150 ease-out mt-6">APPLY NOW</button>
                </div>
                <div className="min-h-[420px] border-4 px-8 py-10 border-gray-400 text-center">
                    <h2 className="text-2xl text-gray-900">Sponsor Organization</h2>
                    <p className="text-xl text-gray-900 mb-4">Starting from ₦7900 per year*</p>
                    <p className="mb-2 text-gray-900">Publish up to 15 posts per year on womenmentorsfoundation.org*</p>
                    <p className="mb-2 text-gray-900">Editorial support, including SEO and promotion on social media and email for posts published</p>
                    <p className="mb-2 text-gray-900">Profile with your publication archive and links</p>
                    <p className="mb-2 text-gray-900">Organization details / Individual details page</p>
                    <button className="border-2 bg-Moody-blue p-2 border-Moody-blue text-white hover:bg-Sail hover:border-Sail hover:text-black transition duration-150 ease-out mt-6">APPLY NOW</button>
                </div>
            </section>
        </div>
    )
}

export default MembershipText