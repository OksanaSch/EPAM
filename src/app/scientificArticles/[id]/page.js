import BackToArticlesButton from "../../components/backToArticlesButton/backToArticlesButton";
import CompleteArticle from "@/app/components/completeArticle/completeArticle";
import getArticles from "@/app/components/hooks/getArticles";

const articles = await getArticles();
export default function Page() {

	return (
		<main id='main'>
			<BackToArticlesButton/>
			<CompleteArticle articles={ articles} />

		</main>
	)
};