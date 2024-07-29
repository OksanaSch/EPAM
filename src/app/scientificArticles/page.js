
import Hero from "../components/hero/hero";
import heroImage from "../../../public/img/Nauka.png";

import { promises as fs } from 'fs';
import SearchPublication from "../components/searchPublication/searchPublication";
import PublicationArticle from "../components/publicationArticle/publicationArticle";

import {
	searchPublication,
	searchHeader,
	centeredForm,
	allArticlesHeader,
	publicationArticles
} from "./page.module.css";


async function getData() {
 const path = process.cwd() + "/src/app/hero.json"
  const file = await fs.readFile(path, "utf8");
  const data = JSON.parse(file);
  return data;
}

async function getArticles() {
 const path = process.cwd() + "/src/app/articles.json"
  const file = await fs.readFile(path, "utf8");
  const data = JSON.parse(file);
  return data;
}


	const data = await getData();
	const articles = await getArticles();

export default function ScientificArticles() {

	return (
		<main id='main'>

			<Hero image={heroImage} header={data[1].header} textAbstracts={data[1].textAbstracts} />
			<section className={searchPublication}>
				<h2 className={searchHeader}>Пошук публікацій </h2>
				<div className={centeredForm}>
						<SearchPublication />
				</div>
   				 </section>


			<h1 className={allArticlesHeader}>Усі публікації факультету </h1>
			<section className={publicationArticles}>


					<PublicationArticle articles={ articles} />


			</section>

		</main>
	)
}