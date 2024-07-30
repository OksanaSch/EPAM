
"use client"
import { useState } from 'react';

import {
	contactsContainer,
	contacts,
	adressTitle,
	phoneTitle,
	mailTitle,
	mailContainer,
	contactsForm,
	formLables,
	nameBox,
	mailBox,
	messageBox,
	mailContainerButton,
	forms,
	map,
	mainSection,
	smallerScreenContainer,
	biggerScreenContainer
} from "./page.module.css"
import Form from 'react-bootstrap/Form';

export default function Contacts () {

	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
	  const form = event.currentTarget;
	  if (form.checkValidity() === false) {
		event.preventDefault();
		event.stopPropagation();
	  }
	  setValidated(true);
	};




	return (
		<main id='main' className={contactsContainer}>
			<div className={biggerScreenContainer}>
				<section className={mainSection}>

					<section className={contacts}>
						<h1>Контакти</h1>
						<p className={adressTitle}>Адреса:</p>
						<p>Національний університет сингулярних технологій,<br></br> 02000, Україна, м. Київ, вул. Хрещатик, 1</p>

						<p className={phoneTitle}>Телефон:</p>
						<p>+38 (044) 123-45-67</p>
						<p className={mailTitle}>Електронна пошта:</p>
						<p>info@nut.edu.ua</p>
				</section>

						<section className={mailContainer}>

						<h2>Написати нам</h2>
					<Form noValidate validated={validated} onSubmit={handleSubmit} className={contactsForm}>
						{/* <div className={formContainer}> */}
						<div className={forms}>
							<Form.Label htmlFor='nameInput' className={formLables}>Ім&apos;я</Form.Label>
							<Form.Control id='nameInput' className={nameBox}  required type="text"/>
							</div>
							<div className={forms}>
							<Form.Label  htmlFor='mailInput' className={formLables}>Електронна адреса</Form.Label>
							<Form.Control id='mailInput' className={mailBox}  required type="email"/>
							</div>
							<div className={forms}>
							<Form.Label htmlFor='massageInput' className={formLables}>Повідомлення</Form.Label>
							<Form.Control id='massageInput' className={messageBox}  required as="textarea" rows={3} ></Form.Control>
							</div>
							{/* </div> */}
							<button type="submit" className={mailContainerButton}>Надіслати</button>
					</Form>


				</section>

			</section>
					<section className={map}>

		 		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.4486373518894!2d30.524924076557287!3d50.45136987159231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce51c3bdb9a1%3A0xff877737cf946b28!2z0LLRg9C70LjRhtGPINCl0YDQtdGJ0LDRgtC40LosIDEsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1suk!2sua!4v1721109039187!5m2!1suk!2sua" width="1200" height="962"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

			</section>
			</div>

			<div className={smallerScreenContainer}>

				<section className={mainSection}>

					<section className={contacts}>
						<h1>Контакти</h1>
						<p className={adressTitle}>Адреса:</p>
						<p>Національний університет сингулярних технологій,<br></br> 02000, Україна, м. Київ, вул. Хрещатик, 1</p>

						<p className={phoneTitle}>Телефон:</p>
						<p>+38 (044) 123-45-67</p>
						<p className={mailTitle}>Електронна пошта:</p>
						<p>info@nut.edu.ua</p>
				</section>

					<section className={map}>

		 		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.4486373518894!2d30.524924076557287!3d50.45136987159231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce51c3bdb9a1%3A0xff877737cf946b28!2z0LLRg9C70LjRhtGPINCl0YDQtdGJ0LDRgtC40LosIDEsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1suk!2sua!4v1721109039187!5m2!1suk!2sua" width="1200" height="962"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

			</section>

				</section>
												<section className={mailContainer}>

						<h2>Написати нам</h2>
					<Form noValidate validated={validated} onSubmit={handleSubmit} className={contactsForm}>
						{/* <div className={formContainer}> */}
						<div className={forms}>
							<Form.Label for='nameInput2' className={formLables}>Ім&apos;я</Form.Label>
							<Form.Control id='nameInput2' className={nameBox}  required type="text"/>
							</div>
							<div className={forms}>
							<Form.Label  for='mailInput2' className={formLables}>Електронна адреса</Form.Label>
							<Form.Control id='mailInput2' className={mailBox}  required type="email"/>
							</div>
							<div className={forms}>
							<Form.Label for='massageInput2' className={formLables}>Повідомлення</Form.Label>
							<Form.Control id='massageInput2' className={messageBox}  required as="textarea" rows={3} ></Form.Control>
							</div>
							{/* </div> */}
							<button type="submit" className={mailContainerButton}>Надіслати</button>
					</Form>


				</section>
			</div>
			</main>
	)
}