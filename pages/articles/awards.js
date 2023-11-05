import Image from 'next/image'
import CoverImg from '../../public/images/img21.jpg'
import Img1 from '../../public/images/img19.jpg'
import Img2 from '../../public/images/img11.jpg'

const awards = () => {
    return (
        <section>
            <div className="max-w-5xl mx-auto px-5 lg:px-0 py-10">
                <div className='pb-5 max-w-3xl mx-auto'>
                    <Image className='w-full h-60' src={CoverImg} alt="Awards" />
                </div>
                <p className="pb-4">In a remarkable display of diversity and empowerment, a multitude of accomplished women have emerged as formidable candidates in the political landscape. These women, hailing from various parties and vying for different positions, collectively showcase the strength and capability that women bring to the forefront of governance.</p>
                <p className="pb-4">Hajiya Talatu Shehu, seeking a senatorial position under the PDP banner, exemplifies the dedication and experience that women contribute to the political sphere. Her counterparts, including Hon. Hadiza Ladi Yahuza, Hon. Rahila Mohammed, and Hon. Murna Ambason, mirror this commitment as they navigate the intricacies of the House of Representatives, each representing distinct constituencies.</p>
                <div className='pb-5 flex gap-2 mx-auto'>
                    <Image className='w-full h-60' src={Img1} alt="Awards" />
                    <Image className='w-full h-60' src={Img2} alt="Awards" />
                </div>
                <p className="pb-4">The diversity of political affiliations is striking, with the APC, PDP, AA, ADC, ADP, APM, APGA, APP, NNPP, NRM, SDP, and YPP all represented by these visionary women. From the Governorship position sought by Hon. Hadiza Sabuwa Balarabe to the Vice Presidential aspirations of Hon. Princess Chichi Ojei and the Deputy Governor ambitions of Hon. Maimuna Musa and others, these women are boldly stepping into leadership roles across the spectrum.</p>
                <p className="pb-4">This remarkable gathering of women in politics extends beyond the national level, with candidates like Hon. Jamila Muhammad and Hon. Aisha Abduljabbar vying for seats in the House of Assembly, representing the aspirations and concerns of their constituencies.</p>
                <p className="pb-4">As we witness this wave of women stepping into the political arena, it is clear that their voices and perspectives are essential for a well-rounded and inclusive governance. The recognition and awards bestowed upon these women serve not only as a celebration of their individual achievements but also as a testament to the broader movement towards gender equality and female representation in Nigerian politics.

                </p>
                <p>In the coming elections, the electorate has the opportunity to support and amplify the voices of these women who are breaking barriers, challenging stereotypes, and contributing to a more diverse and inclusive political landscape.</p>
            </div>
        </section>
    )
}

export default awards