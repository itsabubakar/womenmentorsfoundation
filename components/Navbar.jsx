import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

import logo from '../public/images/logo.png'
import Image from "next/image";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineYoutube, AiOutlineInstagram, AiOutlineDown, AiOutlineClose, AiOutlineUp } from 'react-icons/ai'

const navlinks = [
    { label: 'home', href: '/' },
    { label: 'about us', href: '/about' },
    { label: 'wellness', href: '/wellness' },
    { label: 'womens rights', href: '/rights' },
    { label: 'membership', href: '/membership' },
    { label: 'partnership', href: '/partnership' },
    { label: 'events', href: '/events' },
];

const Navbar = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false)

    return (
        <nav className={' py-2 max-w-6xl mx-auto'}>
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className='shadow-md shadow-gray-200 z-10  w-full lg:w-fit'>
                    <div className="px-5 lg:px-0 flex justify-between items-center">
                        <Link href={'/'}>
                            <div className=" h-[70px] w-[140px]">
                                <Image src={logo} className="h-full w-full" />
                            </div>
                        </Link>
                        <div className='text-3xl lg:hidden' onClick={() => setOpen(!open)}>
                            {open ? <AiOutlineClose color={'#000'} /> : <AiOutlineMenu color={'#000'} />}
                        </div>
                    </div>

                </div>

                {/* Links */}
                <div>
                    <ul className="hidden lg:flex items-center  gap-8 capitalize">
                        {navlinks.map((link) => (
                            <li className={` ${router.pathname === link.href ? 'border-b border-green-500' : ''}`} key={link.label}>
                                <Link href={link.href}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Smaller screens */}

                <div className={` lg:hidden text-black font-poppins bg-white absolute h-fit w-full top-0  bottom-0  duration-500 shadow shadow-gray-400  ${open ? 'left-0 ' : 'left-[-100%]'}`}>
                    <ul className="pt-24 pb-8 px-5 capitalize flex flex-col gap-3">
                        {navlinks.map((link) => (
                            <li className={` ${router.pathname === link.href ? ' underline decoration-wavy' : ''}`} key={link.label}>
                                <Link href={link.href}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>

                </div>

            </div>
        </nav>


    )
}

export default Navbar