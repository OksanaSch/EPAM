import Link from 'next/link'

import Image from "next/image";
import "./globals.css";
import laptop from "../../public/svg/laptop.svg";
import heroImage from "../../public/img/technologies.jpg";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import PublicationArticle from "./components/publscationArticle/publscationArticle";
import SearchPublication from "./components/searchPublication/searchPublication"
import {
	bodyContainer,
	facultyLife,
	cards,
	card,
	searchPublication,
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
					<Header/>
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
				

					<SearchPublication/>
					<PublicationArticle/>	

			</main>
						<Footer/>
		</div>
	);
}
