import Image from "next/image";
import laptop from "../../../../public/svg/laptop.svg";

import {
	headerContainer,
	logo,
	mainHeader,
	pageNavigation,
	pageNavigationList,
	menuItem,
} from "./header.module.css";
import Link from "next/link";

export default function Header() {
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
							<Link className={menuItem} href="/">
									Про кафедру
							</Link>
							<Link className={menuItem} href="">
									Новини
							</Link>
							<Link className={menuItem} href="">
									Адміністрація
							</Link>
							<Link className={menuItem} href="/scientificArticles">
									Наукова робота
							</Link>
							<Link className={menuItem} href="/contacts">
									Контакти
							</Link>
						</ul>
					</nav>
				</div>
			</header>

	);
}