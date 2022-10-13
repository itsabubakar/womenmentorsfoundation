import Link from "next/link"
import { useRouter } from "next/router"
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs'
import logo from '../public/images/logo.png'
import Image from "next/image"

const Footer = () => {
    const router = useRouter()
    return (
        <div>
            <div className="flex flex-col xl:flex-row gap-y-10 items-center justify-between mt-20 mx-32">
                {/* logo */}
                <div className="rounded">
                    <Image alt="" src={logo} width={200} height={100} />
                </div>

                {/* links */}
                <ol className="flex flex-wrap gap-2 items-center uppercase text-gray-700 link-hover text-sm justify-center">
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
                <p>© Women Models and Mentors 2022</p>
            </div>
        </div>
    )
}

export default Footer