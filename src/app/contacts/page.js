
"use client"
import { useState } from 'react';
import { Container, Row, Col, } from "react-bootstrap";
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
	mailLable,
	nameBox,
	mailBox,
	massageBox,
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
	
			<Row className={contactsContainer}>
				<Col className='p-0' sm={6}>
				
					<section className={contacts}>
						<h1>Контакти</h1>
						<p>Національний університет сингулярних технологій,<br></br> 02000, Україна, м. Київ, вул. Хрещатик, 1</p>
						<p className={adressTitle}>Адреса:</p>
						<p className={phoneTitle}>Телефон:</p>
						<p>+38 (044) 123-45-67</p>
						<p className={mailTitle}>Електронна пошта:</p>
						<p>info@nut.edu.ua</p>
					</section>
					<section className={mailContainer}>
						
						<h2>Написати нам</h2>

						{/* <Form noValidate validated={validated} onSubmit={handleSubmit}>
     
        <Form.Group controlId="validationCustom01">
         
          <Form.Control
            required
            type="text"
            placeholder="First name"
           
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
		  <Form.Control.Feedback type="invalid">
            Please provide a valid state.
			</Form.Control.Feedback>
		  <Form.Control
            required
            type="text"
            placeholder="Last name"
           
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
		  <Form.Control.Feedback type="invalid">
            Please provide a valid state.
			</Form.Control.Feedback>
		  <Form.Control
            required
            type="text"
            placeholder="Last name"
           
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
		  <Form.Control.Feedback type="invalid">
            Please provide a valid state.
			</Form.Control.Feedback>
        </Form.Group>
        
        
    
     
     
      <Button type="submit">Submit form</Button>
    </Form> */}



						
						<Form noValidate validated={validated} onSubmit={handleSubmit}>    
							<Row>
							<div className={formContainer}>
								<Col sm={3} >
									<div className={formLables}>
									<Form.Label className={nameLable}>Ім'я</Form.Label>
									<Form.Label className={mailLable}>Електронна адреса</Form.Label>
									<Form.Label className={mailLable}>Повідомлення</Form.Label>						
									</div>
								</Col>
								<Col sm={9}>
								<Form.Group controlId="validationCustom01">
									<Form.Control  className={nameBox}  required type="text"/>
									<Form.Control className={mailBox}  required type="email"/>
									<Form.Control className={massageBox}  required as="textarea" rows={3} ></Form.Control>
									<Form.Control.Feedback type="invalid">
										Будь-ласка, заповніть усі поля  правильно!
									</Form.Control.Feedback>									
									</Form.Group>
								</Col>
							</div>
							</Row>
							<button type="submit">Надіслати</button>
					</Form>
					
		
				</section>
				
					
				</Col>
				<Col sm={6} className="p-0"  >
				
		 		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.4486373518894!2d30.524924076557287!3d50.45136987159231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce51c3bdb9a1%3A0xff877737cf946b28!2z0LLRg9C70LjRhtGPINCl0YDQtdGJ0LDRgtC40LosIDEsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1suk!2sua!4v1721109039187!5m2!1suk!2sua" width="984" height="942"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
		 	
				</Col>
			</Row>
		
		//  
	)
}