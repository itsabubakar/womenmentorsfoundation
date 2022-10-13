const AboutText = () => {
    return (
        <div className="">
            <section className="grid justify-center">
                <div className="max-w-3xl my-20 justify-self-center">
                    <h2 className="text-3xl text-center font-medium leading-[40px] mx-5 md:mx-0">Women Mentors Foundation is the platform for aspiring women looking to kick start their adventures.</h2>

                    {/* About */}

                    <div className="grid justify-center mt-8">
                        <div className="max-w-xl leading-8 mx-5 md:mx-0">
                            <p className="mb-4">Our effort is motivated by solidarity. That is why we link marginalized perspectives to a national audience that spans every state in the country, and why we collaborate with a diverse variety of partners to generate momentum for change movements.</p>
                            <p className="">We believe that everyone has the potential to make a significant difference, which is why we focus on chances to act and the visionaries who inspire us.</p>
                            <div className="mt-20">
                                <h3 className="text-2xl font-medium mb-4">We Educate</h3>
                                <p className="mb-8">As a social enterprise specializing in storytelling, communications, digital movement building, and meaningful entrepreneurship, we provide digital courses and tailored programs to help aspiring women.</p>
                                <h3 className="text-2xl font-medium mb-4">We Create</h3>
                                <p className="mb-8">We employ our imagination and fun approach to provide communications and learning solutions for a diverse variety of partners. We maintain a new and inventive approach with shared principles as our compass, whether it&apos;s bringing young women activists to manage communications at national events or facilitating content creation driven by grassroots visionaries.</p>
                                <h3 className="text-2xl font-medium mb-4">We Connect</h3>
                                <p>Creating connections is a cornerstone of solidarity, which is the driving force behind our organization. That is why we bridge the gap between grassroots innovators, link innovators and organizations from all around the world, and form cross-sector relationships. We constantly seek to offer possibilities for interaction and cooperation, whether through our digital marketplace or by collaborating at offline events.</p>
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
                            <p>To highlight and support entrepreneurs and groups working to improve gender equality, human rights, social justice, and sustainability throughout the nation.</p>
                        </div>
                        <div>
                            <h2 className="text-center text-3xl font-medium mb-4">Our Vision</h2>
                            <p>We envision a sustainable country built on peace and solidarity, free of prejudice, inequality, and violence.</p>
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
                <h3 className="text-3xl font-medium text-center my-20">You <span className="border-b-Moody-blue border-b-4">matter</span>, your voice <span className="border-b-Moody-blue border-b-4">matters</span>.</h3>
            </section>
        </div>
    )
}

export default AboutText