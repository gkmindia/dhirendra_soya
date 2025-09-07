'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';


const Header = () => {
    const [active, setActive] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const pathname = usePathname();

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/about-us', label: 'About Us' },
        { href: '/products', label: 'Products' },
        { href: '/infrastructure', label: 'Infrastructure' },
        { href: '/careers', label: 'Careers' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`navbar navbar-expand-lg 
            ${isSticky ? 'fixed-top shadow-sm' : ''} ${pathname === '/careers' ? 'bg-primary bg-body-tertiary career_nav' : 'bg-white'}`}
        >
            <div className="container">
                <Link className="navbar-brand" href="/">
                {pathname === '/careers' ? 
                    <Image alt="logo" src="../images/logo/dg_logo_white.svg" width={70} height={70}/>:
                    <Image alt="logo" src="../images/logo/soya.svg" width={180} height={70}/>
            }
                </Link>
                <span className="navbar-toggler p-0 border-0  fs-1 lh-normal cursor-pointer" onClick={()=>setActive(!active)}><i className="bi bi-list"></i></span>
                <div className={`collapse navbar-collapse ${!!active ? 'show':''}`} id="navbarSupportedContent">
                    <ul className={`navbar-nav ${pathname == '/get-in-touch' ? 'ms-auto':'m-auto'} mb-2 mb-lg-0`}>
                        {navItems.map(({href, label}) => (
                            <li className="nav-item" key={label} onClick={()=>setActive(false)}>
                                <Link 
                                    className={`nav-link ${pathname === href ? 'active':''} ${pathname === '/careers' ? 'text-white':''}`}
                                    href={href}
                                >{label}</Link>
                            </li>
                        ))}
                    </ul>
                    {pathname !== '/get-in-touch' &&
                        <Link 
                            href="/get-in-touch" 
                            className={`btn btn-sm ${pathname === '/careers' ? 'btn-white':'btn-primary'}`}
                            onClick={()=>setActive(false)}
                        >Get in toch</Link>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Header
