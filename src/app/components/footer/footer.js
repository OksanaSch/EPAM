import Image from "next/image";
import {
	footerContainer,
	footerContentContainer,
	icons,
	contacts,
} from "./footer.module.css";

import mapPoint from "../../../../public/svg/mapPoint.svg";
import phone from "../../../../public/svg/phone.svg";
import mail from "../../../../public/svg/mail.svg";

export default function Footer() {
	return (
		<footer className={footerContainer}>
				<div className={footerContentContainer}>
					<h5>
					©1900-2024 Національний університет сингулярних технологій

				</h5>
				<div className={contacts}>
					<Image className={ icons} src={mapPoint} alt=""/>

					<p>
						вул. Академічна, 12, м. Київ, Україна
					</p>
					<Image className={ icons} src={phone} alt=""/>

					<p>
						 +38 (044) 123-45-67
          </p>
		  	<Image className={ icons} src={mail} alt=""/>
					<p>
						info@university.edu
          </p>
				</div>
				</div>

			</footer>

	);
}