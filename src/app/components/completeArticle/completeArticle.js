"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
	downloadButtonContainer,
	downloadButton,
	completeArticle,
	articleText,
	aboutArticle,
	autorArticle,
} from "./completeArticle.module.css";


export default function CompleteArticle({ articles }) {
	const [articlesData, setArticlesData] = useState([])
	useEffect(() => {
		setArticlesData(articles)
	}, []);

	const pathname = usePathname();
	const pathId = pathname.slice(20);
	const article = articlesData[pathId - 1];

	return (
		<section className={completeArticle}>
				<h1>{article?.title}</h1>
				<div className={aboutArticle}>
				<p className={autorArticle}>Автор: <span>{article?.author}</span></p>
				<p>Дата публікації: <span>18/03/2024</span></p>
				</div>
			<p>Категорія публікації: <span>Нанотехнології та квантові обчислення</span></p>
			<p className={articleText}>{ article?.text}</p>

			<div className={downloadButtonContainer}>
					<button className={downloadButton}>
						<svg width="65" height="27" viewBox="0 0 65 27" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M33 19.125L26.75 12.0938L28.5 10.0547L31.75 13.7109V2.25H34.25V13.7109L37.5 10.0547L39.25 12.0938L33 19.125ZM25.5 24.75C24.8125 24.75 24.2242 24.4748 23.735 23.9245C23.2458 23.3742 23.0008 22.7119 23 21.9375V17.7188H25.5V21.9375H40.5V17.7188H43V21.9375C43 22.7109 42.7554 23.3733 42.2663 23.9245C41.7771 24.4758 41.1883 24.7509 40.5 24.75H25.5Z" fill="black"/>
						</svg>
					Завантажити весь текст
					</button>
				</div>
			</section>
	)
}