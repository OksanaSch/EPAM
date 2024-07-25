"use client";
import Link from "next/link";
import {
	articlesList,
	articleTitle,
  authorArticle,
	textArticle,
	articleItem,
	readMoreButton
} from "./publicationArticle.module.css";

import {useDataPaginate} from "../hooks/useDataPaginate";
import { useEffect, useState } from "react";
import DownloadButton from "../downloadButton/downloadButton";

export default function PublicationArticle({ articles }) {
	const [articlesData, setArticlesData] = useState([])
	useEffect(() => {
		setArticlesData(articles)
	}, []);

	const { paginatedData, nextPage, lastPage } = useDataPaginate(articlesData, 6);
	return (
		<>
				<ul className={articlesList}>
			{paginatedData?.map(article =>
				<li className={articleItem}
					key={article.id}>
					<h4 className={articleTitle}>{article.title}</h4>
					<p className={authorArticle}>
						Автор: <span>{article.author}</span>
					</p>
					<p className={textArticle}>
						{article.text}
					</p>
					<button className={readMoreButton}>
						<Link href={`/scientificArticles/${article.id}`}>Читати далі</Link>
					</button>
				</li>
				)}
				</ul>
			< DownloadButton nextPage={nextPage} lastPage={ lastPage} />
			</>


    );
}