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
	const handleSelect = (eventKey) => setExpanded(false);


	return (
		<header>

			<Navbar expand="custom"  className={headerContainer} >
			<Link href="/">
				<Image className={ logo} src={laptop}  alt="на головну"/>
			</Link>
					<h2 className={mainHeader}>
            Кафедра <br /> “Кібернетика та штучний інтелект”
          </h2>
			<Navbar.Toggle   className={menuButton} aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" style={{ color: "white" }}>
					<Nav className={pageNavigation} eventKey="1" onSelect={handleSelect}>
						<Nav.Link href="/"  eventKey="1" className={`${pathname === '/' ? 'activeLink' : ''}`} >
								Про кафедру
						</Nav.Link>
							<Nav.Link href=""  eventKey="2">
									Новини
							</Nav.Link>
							<Nav.Link  href=""  eventKey="3">
									Адміністрація
							</Nav.Link>
							<Nav.Link href="/scientificArticles"  eventKey="4" className={`${pathname.includes('/scientificArticles') ? 'activeLink' : ''}`} >
									Наукова робота
							</Nav.Link>
							<Nav.Link href="/contacts"  eventKey="5" className={`${pathname === '/contacts' ? 'activeLink' : ''}`} >
									Контакти
							</Nav.Link>

					</Nav>
				</Navbar.Collapse>

				</Navbar>
			</header>

	);
}