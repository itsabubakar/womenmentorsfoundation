import Image from 'next/image'
import CoverImg from '../../public/images/meema1.jpg'
import Img1 from '../../public/images/meema2.jpg'
import Img2 from '../../public/images/meema3.jpg'

const Muneera = () => {
    return (
        <section>
            <div className="max-w-5xl mx-auto px-5 lg:px-0 py-10">
                <div className='pb-5 max-w-xl  mx-auto'>
                    <Image className='w-full' src={CoverImg} alt="uneera" />
                </div>
                <p className="pb-4">In a heartening display of recognition and appreciation, Munira Suleiman Tanimu, the Deputy Majority Leader of the Kaduna State House of Assembly, was recently honored by the Women Models & Mentors Foundation. The foundation, dedicated to empowering women and girls, paid a courtesy visit to Tanimu to extend their congratulations and confer upon her the distinguished title of Honorary Fellow.</p>
                <p className="pb-4">The purpose of the visit transcended mere formality; it was a heartfelt acknowledgment of Tanimu&lsquo;s significant contributions in the realm of empowering women and girls throughout the nation. As a beacon of leadership and advocacy, Tanimu&lsquo;s commitment has not gone unnoticed, and the prestigious Honorary Fellow Award stands as a testament to the impact she has made in her role.</p>
                <div className='pb-5 flex gap-2 mx-auto'>
                    <Image className='w-full h-60' src={Img1} alt="uneera" />
                    <Image className='w-full h-60' src={Img2} alt="uneera" />
                </div>
                <p className="pb-4">Expressing her gratitude for the recognition, Tanimu underscored the importance of empowering women and girls, a cause she has championed with unwavering dedication. As the Deputy Majority Leader in the Kaduna State House of Assembly, her influence and efforts have played a pivotal role in advancing the status and rights of women.</p>
                <p className="pb-4">The Women Models & Mentors Foundation, in conferring this honor, not only celebrates Tanimu&lsquo;s individual achievements but also emphasizes the collective responsibility to uplift and empower women in society. The award serves as a symbol of inspiration for others to follow suit and actively contribute to the cause of gender equality.</p>
                <p className="pb-4">As Tanimu continues to lead and inspire, her recognition by the Women Models & Mentors Foundation serves as a reminder that positive change is possible through dedicated individuals who prioritize the empowerment of women and girls. The ripple effect of such recognition is felt not only by the recipient but by the countless lives positively impacted by their tireless efforts. In honoring Tanimu, the foundation not only applauds her past endeavors but also encourages her to forge ahead in her mission to create a more inclusive and equitable society for all.

                </p>

            </div>
        </section>
    )
}

export default Muneera