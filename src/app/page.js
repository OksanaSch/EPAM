import Image from "next/image";
import { styles} from "./page.module.css";

export default function Home() {
	return (
		<>
    <header class="sticky-top d-flex justify-content-between">
        <div class="d-flex justify-content-center p-1">
            <a href="index.html">
                <img src="https://www.svgrepo.com/show/293955/university.svg" class="logo pl-2" alt="Логотип кафедри інфоривційних технологій" height="20" width="20"/>
            </a>
            <h2 class="pl-5 pt-2">Кафедра інформаційних технологій</h2>
        </div>
        <nav class="navbar navbar-dark navbar-expand-md">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon pl-5"></span>
            </button>
            <div class="collapse navbar-collapse text-white" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><a class="nav-link" href="index.html">Про кафедру</a></li>
                    <li class="nav-item"><a class="nav-link" href="news.html">Новини</a></li>
                    <li class="nav-item"><a class="nav-link" href="administration.html" id="active-link">Адміністрація</a></li>
                    <li class="nav-item"><a class="nav-link" href="courses.html">Наукова робота</a></li>
                    <li class="nav-item"><a class="nav-link" href="contact.html">Контакти</a></li>
                </ul>
            </div>
        </nav>

    </header>
    <main class="container my-4">
        <h2>Факультет</h2>
        <p>Наш факультет складається з висококваліфікованих викладачів та науковців, які працюють у різних галузях комп'ютерних наук.</p>
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
