import Link from "next/link"
import { useRouter } from "next/router"
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs'

const Footer = () => {
    const router = useRouter()
    return (
        <div>
            <div className="flex items-center justify-between mt-20 mx-32">
                {/* logo */}
                <div className="max-w-[100px]">
                    <div className="logo text-xl text-Moody-blue">Women </div>
                    <div className="logo -mt-2 text-xl text-Sail">Mentors </div>
                    <div className="logo -mt-2 text-xl text-Moody-blue">Foundation</div>
                </div>

                {/* links */}
                <ol className="flex gap-x-10 items-center uppercase text-gray-700 link-hover text-sm">
                    <li><Link href={'/about'}><a className={router.pathname == "/about" ? "border-b-2 border-b-Moody-blue pb-2" : ""}>About</a></Link></li>
                    <li><Link href={'/membership'}><a className={router.pathname == "/membership" ? "border-b-2 border-b-Moody-blue pb-2" : ""}>Membership</a></Link></li>
                    <li><Link href={'/partnership'}><a className={router.pathname == "/partnership" ? "border-b-2 border-b-Moody-blue pb-2" : ""}>Partnership</a></Link></li>
                    <li><Link href={'/events'}><a className={router.pathname == "/events" ? "border-b-2 border-b-Moody-blue pb-2" : ""}>Events</a></Link></li>

                </ol>
                {/* socials */}
                <div className="flex gap-x-3">
                    <div className="rounded-[50%]">
                        <BsFacebook size={20} className="text-gray-800 hover:text-Moody-blue cursor-pointer" />
                    </div>
                    <div>
                        <BsInstagram size={20} className="text-gray-800 hover:text-Moody-blue cursor-pointer" />
                    </div>
                    <div>
                        <BsYoutube size={20} className="text-gray-800 hover:text-Moody-blue cursor-pointer" />
                    </div>
                </div>

            </div>
            <div className="text-center my-3 text-gray-400 text-sm">
                <p>© Women Mentors Foundation 2022</p>
            </div>
        </div>
    )
}

export default Footer