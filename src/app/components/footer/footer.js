import Image from "next/image";
import {
	footerContainer,
	footerContentContainer,
	adaptiveFooterHeader,
	footerHeaderHidden,
	footerHeader,
	icons,
	footerContacts,
	contacts
} from "./footer.module.css";

import mapPoint from "../../../../public/svg/mapPoint.svg";
import phone from "../../../../public/svg/phone.svg";
import mail from "../../../../public/svg/mail.svg";

export default function Footer() {

	const currentYear = new Date().getFullYear();
	return (
		<footer className={footerContainer}>
			<div className={footerContentContainer}>
				<div className={adaptiveFooterHeader}>
						<h5 className={footerHeaderHidden}>
					©1900-{currentYear} <br/>Національний університет сингулярних технологій

				</h5>
				</div>

					<h5 className={footerHeader}>
					©  1900-{currentYear} Національний університет сингулярних технологій

				</h5>
				<ul className={contacts}>

					<li className={footerContacts}>
						<Image className={ icons} src={mapPoint} alt=""/>
						<p>02000 Україна, м. Київ, вул. Хрещатик, 1 </p>
					</li>

					<li className={footerContacts}>
						<Image className={ icons} src={phone} alt=""/>
						<p > +38 (044) 123-45-67</p>
					</li>

					<li className={footerContacts}>
						<Image className={ icons} src={mail} alt=""/>
						<p >info@university.edu
					</p>
					</li>



				</ul>
				</div>

			</footer>

	);
}