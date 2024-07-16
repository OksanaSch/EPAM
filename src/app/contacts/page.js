import Footer from "@/app/components/footer/footer";
import Header from "@/app/components/header/header";

import {
	contactsContainer,
	contacts,
	adressTitle,
	phoneTitle,
	mailTitle,
	mailContainer,
	formContainer,
	formLables,
	nameLable,
	nameBox,
	mailBox,
	massageBox,
} from "./page.module.css"

export default function ScientificArticles () {
	return (
		<>
		  <Header />
		  <main className={contactsContainer}>
		  <section className={contacts}>
				<div>
					<h1>Контакти</h1>
					<p className={adressTitle}>Адреса:</p>
					<p>Національний університет сингулярних технологій,<br></br> 02000, Україна, м. Київ, вул. Хрещатик, 1</p>
					<p className={phoneTitle}>Телефон:</p>
					<p>+38 (044) 123-45-67</p>
					<p className={mailTitle}>Електронна пошта:</p>
					<p>info@nut.edu.ua</p>
				</div>
				<div className={mailContainer}>
					<h2>Написати нам</h2>
					<form id="contactForm"> 
						
						<div className={formContainer}>
							<div className={formLables}>
								<div className={nameLable}><label>Ім'я</label></div>
								<div><label>Електронна адреса</label></div>
								<div><label>Повідомлення</label></div>
								
							</div>
						    <div>
								<input className={nameBox} type="text"></input>
								<input className={mailBox} type="text"></input>
								<input className={massageBox} type="text"></input>
							
							</div>
							
						</div>
					
					</form>
					<button type="submit">Надіслати</button>
				</div>
			</section>
			<section>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.4486373518894!2d30.524924076557287!3d50.45136987159231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce51c3bdb9a1%3A0xff877737cf946b28!2z0LLRg9C70LjRhtGPINCl0YDQtdGJ0LDRgtC40LosIDEsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1suk!2sua!4v1721109039187!5m2!1suk!2sua" width="984" height="937"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
			</section>
		  </main>
			<Footer />
		</>
	)
}