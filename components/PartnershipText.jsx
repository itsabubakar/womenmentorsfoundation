import { GiPayMoney } from 'react-icons/gi'
import { FaUserFriends } from 'react-icons/fa'

const PartnershipText = () => {
    return (
        <div className='flex flex-wrap mx-5 md:mx-24 gap-y-20 gap-x-24 justify-center'>
            <div className='max-w-[400px]'>
                <GiPayMoney size={50} className="text-pink-500" />
                <h2 className='underline decoration-pink-500 decoration-wavy underline-offset-8 underline-offset-[9px] text-3xl font-medium mb-4 mt-4 text-gray-800'>Sponsor Visionaries </h2>
                <p className='text-gray-800'>Women mentors foundation give activists, advocates, specialists, social entrepreneurs, and organizations with possibilities for amplification and learning. With your help, we will be able to offer our courses and memberships to more visionaries around the country.</p>
            </div>
            <div className='max-w-[400px]'>
                <FaUserFriends size={50} className="text-pink-500" />
                <h2 className='underline decoration-pink-500 decoration-wavy underline-offset-8 underline-offset-[9px] text-3xl font-medium mb-4 mt-4 text-gray-800'>Partner With Us</h2>
                <p className='text-gray-800'>Make the most of your communications, campaign, or event by using your talents, creativity, and the nationwide community of women mentors foundation. Our expertise is in bridging the gap between offline and digital places.</p>
            </div>
        </div>
    )
}

export default PartnershipText