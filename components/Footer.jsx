import Link from "next/link"
import { useRouter } from "next/router"
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs'
import logo from '../public/images/logo.png'
import Image from "next/image"

const Footer = () => {
    const router = useRouter()
    return (
        <div className="border-t">
            <div className="flex flex-col xl:flex-row gap-y-6 items-center justify-between mt-10 mx-32">
                {/* logo */}
                <div className="rounded">
                    <Image alt="" src={logo} width={140} height={50} />
                </div>

                {/* links */}
                <ul className="flex gap-2 items-center capitalize text-gray-700 justify-center">
                    <li><Link href={'/about'}><a className={router.pathname == "/about" ? "underline decoration-pink-500 underline-offset-2 decoration-wavy" : ""}>About</a></Link></li>
                    <li><Link href={'/membership'}><a className={router.pathname == "/membership" ? "underline decoration-pink-500 underline-offset-2 decoration-wavy" : ""}>Membership</a></Link></li>
                    <li><Link href={'/partnership'}><a className={router.pathname == "/partnership" ? "underline decoration-pink-500 underline-offset-2 decoration-wavy" : ""}>Partnership</a></Link></li>
                    <li><Link href={'/events'}><a className={router.pathname == "/events" ? "underline decoration-pink-500 underline-offset-2 decoration-wavy" : ""}>Events</a></Link></li>

                </ul>
                {/* socials */}
                <div className="flex gap-x-3">
                    <div className="rounded-[50%]">
                        <BsFacebook size={20} className="text-gray-800 hover:text-pink-500 underline-offset-2 cursor-pointer" />
                    </div>
                    <div>
                        <BsInstagram size={20} className="text-gray-800 hover:text-pink-500 underline-offset-2 cursor-pointer" />
                    </div>
                    <div>
                        <BsYoutube size={20} className="text-gray-800 hover:text-pink-500 underline-offset-2 cursor-pointer" />
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