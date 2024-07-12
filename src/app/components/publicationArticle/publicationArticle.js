import ReadMoreButton from "../readMoreButton/readMoreButton";
import {
		publicationArticle,
    authorArticle,
    textArticle,
} from "./publicationArticle.module.css";

export default function PublicationArticle({articles}) {
	return (
		(articles.map(article =>
			 <ul className={publicationArticle} key={article.id}>
					<li>
					<h4>{article.title}
					</h4>
					<p className={authorArticle}>
					Автор: <span>{articles.author}</span>
					</p>
					<p className={textArticle}>
					{article.text}
			</p>
			{/* <ReadMoreButton post={article}/> */}
					<button>
					Читати далі
					</button>
					</li>
				</ul>

				
		))

    );
}