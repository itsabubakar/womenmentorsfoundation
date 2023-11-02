const AboutText = () => {
    return (
        <div className="">
            <section className="grid justify-center">
                <div className="max-w-3xl my-20 justify-self-center">
                    <h2 className="text-3xl text-center font-medium leading-[40px] mx-5 md:mx-0">Women Mentors Foundation is the platform for aspiring women looking to kick start their adventures.</h2>

                    {/* About */}

                    <div className="grid justify-center mt-8">
                        <div className="  mx-5 md:mx-0">
                            <p className="mb-4 text-xl">WOMEN MODELS & MENTORS FOUNDATION is a viable platform for women of all ages, races, classes, creeds, and professions with the primary objective of uplifting women in various positive spheres of life. The Foundation serves as a breeding ground for character modification and shaping the minds of young girls and women alike.</p>
                            <p className="text-xl"> Our foundation is non-governmental, non-partisan and equips women in the areas of entrepreneurship, coaching, skills acquisition, politics, education, marital counselling, capacity building and a host of other areas.</p>
                            <div className="mt-10">
                                <h3 className="text-2xl font-medium mb-4 underline decoration-pink-500 underline-offset-4 decoration-wavy">We Educate</h3>
                                <p className="mb-8 text-xl">We provide digital courses and tailored programs to help aspiring women. As a social enterprise specializing in storytelling, communications, digital movement building, and meaningful entrepreneurship.</p>
                                <h3 className="text-2xl font-medium mb-4 underline decoration-pink-500 underline-offset-4 decoration-wavy">We Connect</h3>
                                <p className="text-xl">Creating connections is a cornerstone of solidarity, which is the driving force behind our WMM. That is why we bridge the gap between grassroots innovators, link innovators and organizations from all around the world, and form cross-sector relationships. We constantly seek to offer possibilities for interaction and cooperation, whether through our digital marketplace or by collaborating at offline events.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                {/* Mission and Vission */}
                <div className="bg-Sail flex justify-center py-14">
                    <div className="max-w-6xl mx-5 md:mx-0 grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-24 text-center">
                        <div>
                            <h2 className="text-center text-3xl font-medium mb-4">Our Mission</h2>
                            <p>Our mission is to promote women and younger ones in Socio-economic phases, and providing opportunity to develop and become more competent in their roles as well as preparing them for growth opportunities in the future.</p>
                        </div>
                        <div>
                            <h2 className="text-center text-3xl font-medium mb-4">Our Vision</h2>
                            <p>Our vision is to serve as a gateway to support women, enabling equal access to scarce resources and opportunities as they develop successful and sustainable careers and business.</p>
                        </div>
                        <div>
                            <h2 className="text-center text-3xl font-medium mb-4">Our Partnerships</h2>
                            <p>As a social venture, we want to collaborate with individuals, organizations, and businesses who share our unwavering beliefs.</p>
                        </div>
                        <div>
                            <h2 className="text-center text-3xl font-medium mb-4">Our Approach</h2>
                            <p>We approach our work in a lively and creative manner, continuously looking for new ideas and forms to improve communication and production.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="">
                <h3 className="text-3xl font-medium text-center my-20">You <span className="underline decoration-pink-500 underline-offset-4 decoration-wavy">matter</span>, your voice <span className="underline decoration-pink-500 underline-offset-4 decoration-wavy">matters</span>.</h3>
            </section>
        </div>
    )
}

export default AboutText