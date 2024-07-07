import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
	return (
		<>
			<header class="header">
        <div className={styles.container}>
            <div class="">
                <a href=""></a>
                <h1>Кафедра інформаційних технологій</h1>
            </div>
            <nav class="">
                    <ul class="">
                        <li class="nav-item"><a class="nav-link" href="index.html">Про кафедру</a></li>
                        <li class="nav-item"><a class="nav-link" href="news.html">Новини</a></li>
                        <li class="nav-item"><a class="nav-link" href="administration.html" id="active-link">Адміністрація</a></li>
                        <li class="nav-item"><a class="nav-link" href="courses.html">Наукова робота</a></li>
                        <li class="nav-item"><a class="nav-link" href="contact.html">Контакти</a></li>
                    </ul>

            </nav>
        </div>
    </header>
    <main class="main-container">
        <h2>Вітаємо на кафедрі  інформаційних технологій!  </h2>
        <p>Кафедра випускає фахівців, що здатні творити та застосовувати новітні ІТ-технології:
фахівців, що обслуговують комп’ютерне обладнання та займаються іншими технічними розробками;
фахівців, що створюють програмне забезпечення;
фахівців, що працюють з готовими інформаційними продуктами</p>

				<h2>Життя кафедри </h2>
				<ul>
					<li>Сертифікати</li>
					<li>Наукова робота зі студентами</li>
					<li></li>
			</ul>



    </main></>

  );
}
