import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logo from '../public/images/logo.png'
import Image from "next/image";


const Navbar = () => {
    const router = useRouter();
    const [nav, setNav] = useState(false)

    return (
        <div className={nav ? "relative left-0 top-0 w-full z-10 ease-in-out duration-100" : "relative left-0 top-0 w-full z-10 ease-in-out duration-100"}>
            <div className="flex px-10  items-center justify-between border-b-2 pb-1">
                <div className="rounded pt-5">
                    <Image alt="" src={logo} width={200} height={80} />
                </div>

                <ol className="hidden xl:flex pl-10 gap-x-10 items-center uppercase text-gray-700 link-hover text-sm">
                    <li className=""><Link href={'/'}><a className={router.pathname == "/" ? "border-b-2 border-b-Moody-blue pb-2" : ""}>Home</a></Link></li>
                    <li><Link href={'/about'}><a className={router.pathname == "/about" ? "border-b-2 border-b-Moody-blue pb-2" : ""}>About us</a></Link></li>
                    <li><Link href={'/wellness'}><a className={router.pathname == "/wellness" ? "border-b-2 border-b-Moody-blue pb-2" : ""}>Wellness</a></Link></li>
                    <li><Link href={'/movement'}><a className={router.pathname == "/movement" ? "border-b-2 border-b-Moody-blue pb-2" : ""}>Join the movement</a></Link></li>

                </ol>

                <ol className="hidden xl:flex ml-auto gap-x-10 items-center uppercase text-gray-700 link-hover text-sm">

                    <li><Link href={'/rights'}><a className={router.pathname == "/rights" ? "border-b-2 border-b-Moody-blue pb-2" : ""}>Women&apos;s right</a></Link></li>
                    <li><Link href={'/membership'}><a className={router.pathname == "/membership" ? "border-b-2 border-b-Moody-blue pb-2" : ""}>Membership</a></Link></li>
                    <li><Link href={'/partnership'}><a className={router.pathname == "/partnership" ? "border-b-2 border-b-Moody-blue pb-2" : ""}>Partnership</a></Link></li>
                    <li><Link href={'/events'}><a className={router.pathname == "/events" ? "border-b-2 border-b-Moody-blue pb-2" : ""}>Events</a></Link></li>

                </ol>

                <div className='z-30 xl:hidden' onClick={() => setNav(!nav)}>
                    {nav ? '' : <AiOutlineMenu size={40} className="text-Moody-blue border-4 rounded-full p-1" />}
                </div>

                {/* Mobile Menu */}

                <div className={nav ? "fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center w-full h-screen bg-white  pt-[50px] ease-in-out duration-100" : 'hidden top-0 left-[100%] right-0 bottom-0 flex-col items-center w-full h-screen bg-white  pt-[50px] ease-in-out duration-100'}>
                    <div className='mb-4 ml-auto mr-[30px]' onClick={() => setNav(!nav)}>
                        <AiOutlineClose size={40} className="text-Moody-blue border-4 rounded-full p-1" />
                    </div>

                    <ol className="flex flex-col gap-y-5 items-center uppercase text-gray-700 link-hover">
                        <li onClick={() => setNav(!nav)}><Link href={'/'}><a className={router.pathname == "/" ? "border-b-2 border-b-Moody-blue" : ""}>Home</a></Link></li>
                        <li onClick={() => setNav(!nav)}><Link href={'/about'}><a className={router.pathname == "/about" ? "border-b-2 border-b-Moody-blue" : ""}>About us</a></Link></li>

                        <li onClick={() => setNav(!nav)}><Link href={'/wellness'}><a className={router.pathname == "/wellness" ? "border-b-2 border-b-Moody-blue" : ""}>Wellness</a></Link></li>
                        <li onClick={() => setNav(!nav)}><Link href={'/movement'}><a className={router.pathname == "/movement" ? "border-b-2 border-b-Moody-blue" : ""}>Join the movement</a></Link></li>

                    </ol>

                    <ol className="mt-[45px] flex flex-col gap-y-5 items-center uppercase text-gray-700 link-hover">
                        <li onClick={() => setNav(!nav)}><Link href={'/rights'}><a className={router.pathname == "/rights" ? "border-b-2 border-b-Moody-blue" : ""}>Women&apos;s right</a></Link></li>
                        <li onClick={() => setNav(!nav)}><Link href={'/membership'}><a className={router.pathname == "/membership" ? "border-b-2 border-b-Moody-blue" : ""}>Membership</a></Link></li>
                        <li onClick={() => setNav(!nav)}><Link href={'/partnership'}><a className={router.pathname == "/partnership" ? "border-b-2 border-b-Moody-blue" : ""}>Partnership</a></Link></li>
                        <li onClick={() => setNav(!nav)}><Link href={'/events'}><a className={router.pathname == "/events" ? "border-b-2 border-b-Moody-blue" : ""}>Events</a></Link></li>

                    </ol>
                </div>

            </div>

        </div>


    )
}

export default Navbar