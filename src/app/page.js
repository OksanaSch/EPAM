import Image from "next/image";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import {
	bodyContainer,

	heroContainer,
	heroContent,
	heroGreeting,
	heroListItem,
	imageTechnologies,
	facultyLife,
	cards,
	card
} from "./page.module.css";

export default function Home() {
	return (
		<div className={bodyContainer}>
					<Header/>
			<main>
				<div className={heroContainer}>
					<img
						className={imageTechnologies}
						src="https://cdn.pixabay.com/photo/2021/05/19/06/13/smartphone-6265046_1280.jpg"

					></img>
					<div className={heroContent}>
						<h2 className={heroGreeting}>Вітаємо на кафедрі інформаційних технологій!</h2>
						<ul>
							Кафедра випускає фахівців, що здатні творити та застосовувати
							новітні ІТ-технології:
            <li className={heroListItem}>
								фахівців, що обслуговують комп’ютерне обладнання та займаються
								іншими технічними розробками;
            </li>
							<li className={heroListItem}>фахівців, що створюють програмне забезпечення;</li>
							<li className={heroListItem}>фахівців, що працюють з готовими інформаційними продуктами.</li>
						</ul>
					</div>

				</div>

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
						<Footer/>
		</div>
	);
}
