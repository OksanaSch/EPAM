import Link from "next/link";
import {
	articleTitle,
  authorArticle,
	textArticle,
	articleItem,
	readMoreButton
} from "./publicationArticle.module.css";

export default async function PublicationArticle({articles}) {
	return (
		(articles?.map(article =>
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
		))

    );
}