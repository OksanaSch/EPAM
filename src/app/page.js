import Image from "next/image";
import  {headerContainer, logo, mainHeader, pageNavigation, pageNavigationList, menuItem, navLink, greetingContainer, imageTechnologies} from "./page.module.css";

export default function Home() {
	return (
		<>
    <header>
        <div className={headerContainer}>
            <a href="index.html">
						<img src="https://www.svgrepo.com/show/293955/university.svg" className={logo } alt="Логотип кафедри інфоривційних технологій"/>
            </a>
					<h2 className={mainHeader}> Кафедра <br/> інформаційних технологій</h2>
					 <nav className={pageNavigation}>

                <ul className={pageNavigationList}>
                    <li className={menuItem}><a class="navLink" href="index.html">Про кафедру</a></li>
                    <li className={menuItem}><a class="navLink" href="news.html">Новини</a></li>
                    <li className={menuItem}><a class="navLink" href="administration.html">Адміністрація</a></li>
                    <li className={menuItem}><a class="navLink" href="courses.html">Наукова робота</a></li>
                    <li className={menuItem}><a class="navLink" href="contact.html">Контакти</a></li>
                </ul>

       		 </nav>
        </div>

    </header>
			<main>
				<div className={greetingContainer}>
					<img className={imageTechnologies} src="https://cdn.pixabay.com/photo/2021/05/19/06/13/smartphone-6265046_1280.jpg"></img>
					<h2>Вітаємо на кафедрі інформаційних технологій!</h2>
					<ul>
					Кафедра випускає фахівців, що здатні творити та застосовувати новітні ІТ-технології:
						<li>фахівців, що обслуговують комп’ютерне обладнання та займаються іншими технічними розробками;</li>
						<li>фахівців, що створюють програмне забезпечення;</li>
						<li>фахівців, що працюють з готовими інформаційними продуктами.</li>
					</ul>
				</div>

        <section class="faculty-members">
            <h3>Викладачі</h3>
            <div class="card-deck">
                <div class="card">
                    <img src="https://cdn.pixabay.com/photo/2016/10/22/05/26/meng-teacher-1759873_960_720.jpg" class="card-img-top" alt="Фото викладача"/>
                    <div class="card-body">
                        <h5 class="card-title">Іван Петров</h5>
                        <p class="card-text">Професор, доктор наук</p>
                    </div>
                </div>
                <div class="card">
                    <img src="https://cdn.pixabay.com/photo/2016/10/22/05/26/meng-teacher-1759873_960_720.jpg" class="card-img-top" alt="Фото викладача"/>
                    <div class="card-body">
                        <h5 class="card-title">Марія Сидоренко</h5>
                        <p class="card-text">Асистент, кандидат наук</p>
                    </div>
                </div>
                <div class="card">
                    <img src="https://cdn.pixabay.com/photo/2016/10/22/05/26/meng-teacher-1759873_960_720.jpg" class="card-img-top" alt="Фото викладача"/>
                    <div class="card-body">
                        <h5 class="card-title">Олексій Іванов</h5>
                        <p class="card-text">Доцент, кандидат технічних наук</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
<footer class="text-center p-3">
    <p>&copy; <span id="currentYear"></span> Кафедра Комп'ютерних Наук, Університет ХХХ</p>
    <p>Email: info@university.edu | Телефон: +38 (044) 123-45-67 | Адреса: вул. Академічна, 12, м. Київ, Україна</p>
</footer>

</>

  );
}
