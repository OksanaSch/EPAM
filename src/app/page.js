import Image from "next/image";
import "./globals.css";
import laptop from "../../public/svg/laptop.svg";
import heroImage from "../../public/img/technologies.jpg";

import {
	bodyContainer,
	headerContainer,
	logo,
	mainHeader,
	pageNavigation,
	pageNavigationList,
	menuItem,
	navLink,
	facultyLife,
	cards,
	card,
	footerContainer,
	footerContentContainer,
	contacts,
	activeLink
} from "./page.module.css";
import Hero from "./hero";

import { promises as fs } from 'fs';
async function getData() {
 const path = process.cwd() + "/src/app/hero.json"
  const file = await fs.readFile(path, "utf8");
  const data = JSON.parse(file);
  return data;
}

export default async function Home() {

	const data = await getData();
	return (
		<div className={bodyContainer}>
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
			<main>

				<Hero image={heroImage } header={data[0].header} listHeader={data[0].listHeader} listItems={data[0].listItems} />
				<section>
					<h3 className={facultyLife}>Життя кафедри</h3>
					<ul className={cards}>
						<li className={card}>
							<h5>Сертифікати</h5>
							<img
								src="/img/certificate.png"
								alt="Фото викладача"
							/>
							<p>
								Пройди навчання та отримай сертифікати від партнерів кафедри -
								компанії FreshCode та PMI
              </p>
						</li>
						<li className={card}>
							<h5>Наукова робота зі студентами</h5>
							<img
								src="/img/image3.jpg"
								alt="Фото викладача"
							/>
							<p>
								Прийми участь у роботі науково-практичних всеукраїнских та
								міжнародних семінарів та конференцій.
              </p>
						</li>
						<li className={card}>
							<h5>Досвід випускників кафедри</h5>
							<img
								src="/img/image1.jpg"
								alt="Фото викладача"
							/>
							<p>
								Зустріч із випускниками кафедри інформаційних технологій.
								Дізнайся про їх кар’єрний шлях та отримай поради, як знайти свою
								першу роботу.
              </p>
						</li>
					</ul>
				</section>
			</main>
			<footer className={footerContainer}>
				<div className={footerContentContainer}>
					<h5>
					&copy;Національний університет “Політехніка”
					<span id="currentYear">1900-2024</span>
				</h5>
				<div className={contacts}>
					<p>
						вул. Академічна, 12, м. Київ, Україна
          </p>
					<p>
						 +38 (044) 123-45-67
          </p>
					<p>
						info@university.edu
          </p>
				</div>
				</div>

			</footer>
		</div>
	);
}
