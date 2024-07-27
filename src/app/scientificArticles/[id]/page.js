import BackToArticlesButton from "../../components/backToArticlesButton/backToArticlesButton";
import CompleteArticle from "@/app/components/completeArticle/completeArticle";


import { promises as fs } from 'fs';

async function getArticles() {
 const path = process.cwd() + "/src/app/articles.json"
  const file = await fs.readFile(path, "utf8");
  const data = JSON.parse(file);
  return data;
}

const articles = await getArticles();
export default function Page() {

	return (
		<main>
			<BackToArticlesButton/>
			<CompleteArticle articles={ articles} />

		</main>
	)
};