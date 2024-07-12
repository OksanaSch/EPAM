import {
		publicationArticle,
    authorArticle,
    textArticle,
} from "./publicationArticle.module.css";

export default function PublicationArticle() {
	return (
        <div className={publicationArticle}>
					<h4>Аналіз залежності енергоспоживання <br></br>
					металургійного підприємства  від метеофакторів</h4>
					<p className={authorArticle}>
					Автор: <span>Анна Бакурова</span>
					</p>
					<p className={textArticle}>
					Актуальною проблемою сучасного металургійного
підприємства є підвищення його енергоефективності, яка повязана в першу чергу з його ...
					</p>
					<button>
					Читати далі
					</button>
				</div>
    );
}