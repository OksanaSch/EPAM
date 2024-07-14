
import Image from "next/image";
import "./globals.css";
import heroImage from "../../public/img/hero.png";

import {
	facultyLife,
	cards,
	card,
} from "./page.module.css";
import Hero from "./components/hero/hero";

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

			<main>

				<Hero image={heroImage } header={data[0].header} textAbstracts={data[0].textAbstracts} />
				<section className={facultyLife}>
					<h3>Життя кафедри</h3>
					<ul className={cards}>
						<li className={card}>
							<h5>Міжнародна діяльність кафедри</h5>
							<Image
								width={305}
								height= {180}
								src="/img/international-conference.png"
								alt="Фото з міжнародної конференції"
							/>
							<p>
								Наша  кафедра  активно  співпрацює  з  провідними університетами   та   дослідницькими   центрами   по   всьому   світу,
								здійснюючи спільні наукові проєкти та обміни студентами.
              				</p>
						</li>
						<li className={card}>
							<h5>Студентські R&D проєкти</h5>
							<Image
								width={305}
								height= {180}
								src="/img/students.png"
								alt="Студенти працюють за комп'ютерами"
							/>
							<p>
								Наші R&D проєкти - це унікальна можливість проявити свої
								знання  та  креативність,  працюючи  в команді  однодумців
								під керівництвом досвідчених наставників.
							</p>
						</li>
						<li className={card}>
							<h5>Громадське життя студентської спільноти</h5>
							<Image
								width={305}
								height= {180}
								src="/img/public-life.png"
								alt="Студенти на громадському заході"
							/>
							<p>
								Студентська  спільнота  нашої  кафедри  активно бере участь
								у громадському житті, організовуючи численні заходи, клуби
								за інтересами та волонтерські проєкти.
             				 </p>
						</li>
					</ul>
				</section>

			</main>

	);
}
