"use client";
import Image from "next/image";
import laptop from "../../../../public/svg/laptop.svg";
import { usePathname } from 'next/navigation';
import "../../globals.css";

import {
	headerContainer,
	logo,
	mainHeader,
	pageNavigation,
	pageNavigationList
} from "./header.module.css";
import Link from "next/link";

export default function Header() {
	const pathname = usePathname()
	console.log(pathname);
	return (
		<header>
				<div className={headerContainer}>
					<Link href="/">
						<Image className={ logo} src={laptop}  alt="go to homepage"/>
					</Link>
					<h2 className={mainHeader}>
            Кафедра <br /> інформаційних технологій
          </h2>
					<nav className={pageNavigation}>
						<ul className={pageNavigationList}>
						<Link href="/" className={`${pathname === '/' ? 'activeLink' : ''}`}>
								Про кафедру
						</Link>
							<Link href="">
									Новини
							</Link>
							<Link  href="">
									Адміністрація
							</Link>
							<Link href="/scientificArticles" className={`${pathname === '/scientificArticles' ? 'activeLink' : ''}`}>
									Наукова робота
							</Link>
							<Link href="/contacts" className={`${pathname === '/contacts' ? 'activeLink' : ''}`}>
									Контакти
							</Link>
						</ul>
					</nav>
				</div>
			</header>

	);
}