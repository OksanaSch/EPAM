import Image from "next/image";
import {
  headerContainer,
  logo,
  mainHeader,
  pageNavigation,
  pageNavigationList,
  menuItem,
  navLink,
  greetingContainer,
  imageTechnologies,
  facultyLife,
  cards,
  card,
  footerContainer,
  contacts,
} from "./page.module.css";

export default function Home() {
	return (
    <>
      <header>
        <div className={headerContainer}>
          <a href="index.html">
            <img
              src="https://www.svgrepo.com/show/293955/university.svg"
              className={logo}
              alt="Логотип кафедри інфоривційних технологій"
            />
          </a>
          <h2 className={mainHeader}>
            {" "}
            Кафедра <br /> інформаційних технологій
          </h2>
          <nav className={pageNavigation}>
            <ul className={pageNavigationList}>
              <li className={menuItem}>
                <a class="navLink" href="index.html">
                  Про кафедру
                </a>
              </li>
              <li className={menuItem}>
                <a class="navLink" href="news.html">
                  Новини
                </a>
              </li>
              <li className={menuItem}>
                <a class="navLink" href="administration.html">
                  Адміністрація
                </a>
              </li>
              <li className={menuItem}>
                <a class="navLink" href="courses.html">
                  Наукова робота
                </a>
              </li>
              <li className={menuItem}>
                <a class="navLink" href="contact.html">
                  Контакти
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className={greetingContainer}>
          <img
            className={imageTechnologies}
            src="https://cdn.pixabay.com/photo/2021/05/19/06/13/smartphone-6265046_1280.jpg"
          ></img>
          <h2>Вітаємо на кафедрі інформаційних технологій!</h2>
          <ul>
            Кафедра випускає фахівців, що здатні творити та застосовувати
            новітні ІТ-технології:
            <li>
              фахівців, що обслуговують комп’ютерне обладнання та займаються
              іншими технічними розробками;
            </li>
            <li>фахівців, що створюють програмне забезпечення;</li>
            <li>фахівців, що працюють з готовими інформаційними продуктами.</li>
          </ul>
        </div>

        <section>
          <h3 className={facultyLife}>Життя кафедри</h3>
          <div class={cards}>
            <div className={card}>
              <h5>Сертифікати</h5>
              <img
                src="/img/certificate.png"
                alt="Фото викладача"
              />
              <p>
                Пройди навчання та отримай сертифікати від партнерів кафедри -
                компанії FreshCode та PMI
              </p>
            </div>
            <div className={card}>
              <h5>Наукова робота зі студентами</h5>
              <img
                src="/img/image3.jpg"
                alt="Фото викладача"
              />
              <p>
                Прийми участь у роботі науково-практичнихвсеукраїнских та
                міжнародних семінарів та конференцій.
              </p>
            </div>
            <div className={card}>
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
            </div>
          </div>
        </section>
      </main>
      <footer className={footerContainer}>
        <h5>
          &copy;Кафедра Комп'ютерних Наук,Університет ХХХ<br></br>
          <span id="currentYear">1900-2024</span>
        </h5>
        <div className={contacts}>
          <p>
            Адреса: <br></br>вул. Академічна, 12, м. Київ, Україна
          </p>
          <p>
            Телефон: <br></br> +38 (044) 123-45-67
          </p>
          <p>
            Email: <br></br> info@university.edu
          </p>
        </div>
      </footer>
    </>
  );
}
