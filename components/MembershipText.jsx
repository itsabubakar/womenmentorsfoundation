
const MembershipText = () => {
    return (
        <div className="mb-24">
            <section className="grid justify-center">
                <div className="max-w-3xl my-20 grid">
                    <h2 className="text-3xl text-center font-medium leading-[40px] mx-3 sm:mx-5 md:mx-0">We help activists, advocates, specialists, and organizations by amplifying their voices. </h2>
                    <div className="max-w-xl leading-8 justify-self-center mt-4 mx-5 md:mx-0">
                        <p className="mb-4">Membership is open to girls and women aged 14 and above from all walks of life regardless of races, classes, creeds, and professions.</p>
                        <p className="mb-4">To join, click apply and fill the form.</p>
                        <p>Our membership is categorized into.</p>
                    </div>
                </div>
            </section>
            <section className="flex flex-col gap-y-10 md:flex-row gap-x-10 mx-5 md:mx-20">
                <div className="grid min-h-[420px] border-4 px-8 py-10 border-gray-400 text-center">
                    <h2 className="text-2xl text-gray-900">Corporate membership</h2>
                    <p className="text-xl text-gray-900 mb-4">Membership fee :  ₦68,000 / $100</p>
                    <p className="mb-2 text-gray-900">Corporate membership category is for women organizations/companies</p>
                    <p className="mb-2 text-gray-900">Publish up to 15 posts per year on womenmentorsfoundation.org</p>
                    <p className="mb-2 text-gray-900 italic">*your organization must pass our eligibility criteria.</p>
                    <button className="self-end w-1/2 justify-self-center border-2 bg-Moody-blue p-2 border-Moody-blue text-white hover:bg-Sail hover:border-Sail hover:text-black transition duration-150 ease-out mt-6">APPLY NOW</button>
                </div>
                <div className="grid min-h-[420px] border-4 px-8 py-10 border-gray-400 text-center">
                    <h2 className="text-2xl text-gray-900">Individual membership</h2>
                    <p className="text-xl text-gray-900 mb-4">₦15,000 / $20.</p>
                    <p className="mb-2 text-gray-900">The individual membership category comprises FULL membership.</p>
                    <p className="mb-2 text-gray-900">Publish up to 10 posts per year on womenmentorsfoundation.org*</p>
                    <p className="mb-2 text-gray-900">*your must pass our eligibility criteria.</p>
                    <button className="self-end w-1/2 justify-self-center border-2 bg-Moody-blue p-2 border-Moody-blue text-white hover:bg-Sail hover:border-Sail hover:text-black transition duration-150 ease-out mt-6">APPLY NOW</button>
                </div>
                <div className="grid min-h-[420px] border-4 px-8 py-10 border-gray-400 text-center">
                    <h2 className="text-2xl text-gray-900">Associate member</h2>
                    <p className="text-xl text-gray-900 mb-4"> ₦5000 / $6.</p>
                    <p className="mb-2 text-gray-900">This is the lowest cada of membership suitable for students, young girls, etc </p>
                    <p className="mb-2 text-gray-900">Publish up to 5 posts per year on womenmentorsfoundation.org*</p>
                    <p className="mb-2 text-gray-900">*your must pass our eligibility criteria.</p>
                    <button className="self-end w-1/2 justify-self-center border-2 bg-Moody-blue p-2 border-Moody-blue text-white hover:bg-Sail hover:border-Sail hover:text-black transition duration-150 ease-out mt-6">APPLY NOW</button>
                </div>
            </section>
        </div>
    )
}

export default MembershipText