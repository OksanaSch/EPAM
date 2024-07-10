import Image from "next/image";
import laptop from "../../../../public/svg/laptop.svg";

import {
	headerContainer,
	logo,
	mainHeader,
	pageNavigation,
	pageNavigationList,
	menuItem,
	navLink
} from "./header.module.css";

export default function Header() {
	return (
		<header>
				<div className={headerContainer}>
					<a href="/">
						<Image className={ logo} src={laptop}  alt="go to homepage"/>
					</a>
					<h2 className={mainHeader}>
            Кафедра <br /> інформаційних технологій
          </h2>
					<nav className={pageNavigation}>
						<ul className={pageNavigationList}>
							<li className={menuItem}>
								<a className={navLink} >
									Про кафедру
                </a>
							</li>
							<li className={menuItem}>
								<a className={navLink} >
									Новини
                </a>
							</li>
							<li className={menuItem}>
								<a className={navLink} >
									Адміністрація
                </a>
							</li>
							<li className={menuItem}>
								<a className={navLink} >
									Наукова робота
                </a>
							</li>
							<li className={menuItem}>
								<a className={navLink}>
									Контакти
                </a>
							</li>
						</ul>
					</nav>
				</div>
			</header>

	);
}