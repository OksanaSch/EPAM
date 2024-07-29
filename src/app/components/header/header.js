"use client";
import Image from "next/image";
import laptop from "../../../../public/svg/laptop.svg";
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import "../../globals.css";


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import {
	headerContainer,
	logo,
	mainHeader,
	pageNavigation,
	menuButton,
} from "./header.module.css";
import Link from "next/link";

export default function Header() {
	const pathname = usePathname();
	const [expanded, setExpanded] = useState(false);


	return (
		<header>

			<Navbar expand="custom" expanded={expanded}  className={headerContainer} >
			<Link href="/">
				<Image className={ logo} src={laptop}  alt="на головну"/>
			</Link>
					<h2 className={mainHeader}>
            Кафедра <br /> “Кібернетика та штучний інтелект”
          </h2>
			<Navbar.Toggle   className={menuButton} aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" style={{ color: "white" }}>
					<Nav className={pageNavigation}>
						<Link href="/" className={`${pathname === '/' ? 'activeLink' : ''}`} onClick={() => setExpanded(!expanded)}>
								Про кафедру
						</Link>
							<Link href="" onClick={() => setExpanded(!expanded)}>
									Новини
							</Link>
							<Link  href="" onClick={() => setExpanded(!expanded)}>
									Адміністрація
							</Link>
							<Link href="/scientificArticles" className={`${pathname.includes('/scientificArticles') ? 'activeLink' : ''}`} onClick={() => setExpanded(!expanded)}>
									Наукова робота
							</Link>
							<Link href="/contacts" className={`${pathname === '/contacts' ? 'activeLink' : ''}`} onClick={() => setExpanded(!expanded)}>
									Контакти
							</Link>

					</Nav>
				</Navbar.Collapse>

				</Navbar>
			</header>

	);
}