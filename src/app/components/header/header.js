"use client";
import Image from "next/image";
import laptop from "../../../../public/svg/laptop.svg";
import { usePathname } from 'next/navigation';
import "../../globals.css";


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import {
	headerContainer,
	logo,
	mainHeader,
	pageNavigation,
	pageNavigationList,
	menuButton,
} from "./header.module.css";
import Link from "next/link";

export default function Header() {
	const pathname = usePathname()

	return (
		<header>
			<Navbar expand="sm"  className={headerContainer} >	
				
			<Link href="/">
				<Image className={ logo} src={laptop}  alt="go to homepage"/>
			</Link>
			
					<h2 className={mainHeader}>
            Кафедра <br /> інформаційних технологій
          </h2>
		
			<Navbar.Toggle  className={menuButton} aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
					<Nav className={pageNavigation}>
						
						<Link href="/" className={`${pathname === '/' ? 'activeLink' : ''}`}>
								Про кафедру
						</Link>
							<Link href="">
									Новини
							</Link>
							<Link  href="">
									Адміністрація
							</Link>
							<Link href="/scientificArticles" className={`${pathname.includes('/scientificArticles') ? 'activeLink' : ''}`}>
									Наукова робота
							</Link>
							<Link href="/contacts" className={`${pathname === '/contacts' ? 'activeLink' : ''}`}>
									Контакти
							</Link>
					
					</Nav>
				</Navbar.Collapse>
				
				</Navbar>
			</header>

	);
}