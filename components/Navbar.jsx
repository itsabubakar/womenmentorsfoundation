import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

import logo from '../public/images/logo.png'
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose, } from 'react-icons/ai'

const navlinks = [
    { label: 'home', href: '/' },
    { label: 'events', href: '/events' },
    { label: 'about us', href: '/about' },
    { label: 'membership', href: '/membership' },
    { label: 'partnership', href: '/partnership' },
    { label: 'womens rights', href: '/rights' },
    { label: 'wellness', href: '/wellness' },
];

const Navbar = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false)

    const closeNav = () => {
        setOpen(!open)
    }

    return (
        <header className="shadow-lg shadow-gray-300 z-20">
            <nav className={' max-w-6xl mx-auto py-2'}>
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className={` z-10  w-full lg:w-fit`}>
                        <div className="px-5 lg:px-0 flex justify-between items-center">
                            <Link href={'/'}>
                                <div className="cursor-pointer h-[70px] w-[140px]">
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
                                <li className={` ${router.pathname === link.href ? 'underline decoration-wavy decoration-pink-500 underline-offset-[4px]  duration-500' : ''}`} key={link.label}>
                                    <Link href={link.href}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Smaller screens */}

                    <div className={` lg:hidden text-black font-poppins bg-white absolute h-fit w-full top-0  bottom-0  duration-500 border-b-2 border-gray-200  ${open ? 'left-0 ' : 'left-[-100%]'}`}>
                        <ul className="pt-24 pb-8 pl-10 capitalize flex flex-col gap-3">
                            {navlinks.map((link) => (
                                <li onClick={closeNav} className={` ${router.pathname === link.href ? ' underline decoration-wavy decoration-pink-500 underline-offset-4' : ''}`} key={link.label}>
                                    <Link href={link.href}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>

                    </div>

                </div>
            </nav>
        </header>


    )
}

export default Navbar