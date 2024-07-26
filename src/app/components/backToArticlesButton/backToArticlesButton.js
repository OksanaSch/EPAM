import Link from "next/link";
import {
	linkBack,
	buttonBackToArticles,
	buttonBackSvg
 } from "./backToArticlesButton.module.css";

export default function Page() {
	return (
				<button className={buttonBackToArticles} type="button">
						<Link className={linkBack} href="/scientificArticles">
				<svg className={ buttonBackSvg}   viewBox="0 0 31 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M2 10L0.93934 8.93934C0.353553 9.52513 0.353553 10.4749 0.93934 11.0607L2 10ZM11.0607 3.06066C11.6464 2.47487 11.6464 1.52513 11.0607 0.93934C10.4749 0.353553 9.52513 0.353553 8.93934 0.93934L11.0607 3.06066ZM8.93934 19.0607C9.52513 19.6464 10.4749 19.6464 11.0607 19.0607C11.6464 18.4749 11.6464 17.5251 11.0607 16.9393L8.93934 19.0607ZM31 8.5H2V11.5H31V8.5ZM3.06066 11.0607L11.0607 3.06066L8.93934 0.93934L0.93934 8.93934L3.06066 11.0607ZM0.93934 11.0607L8.93934 19.0607L11.0607 16.9393L3.06066 8.93934L0.93934 11.0607Z" fill="black"/>
				</svg>
				До списку публікацій
					</Link>

			</button>
	)
}