import {
	footerContainer,
	footerContentContainer,
	contacts
} from "./footer.module.css";

export default function Footer() {
	return (
		<footer className={footerContainer}>
				<div className={footerContentContainer}>
					<h5>
					&copy;Національний університет “Політехніка”
					<span id="currentYear">1900-2024</span>
				</h5>
				<div className={contacts}>
					<p>
						вул. Академічна, 12, м. Київ, Україна
          </p>
					<p>
						 +38 (044) 123-45-67
          </p>
					<p>
						info@university.edu
          </p>
				</div>
				</div>

			</footer>

	);
}