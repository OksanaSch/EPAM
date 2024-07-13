import Footer from "@/app/components/footer/footer";
import Header from "@/app/components/header/header";
import Hero from "../components/hero/hero";
import heroImage from "../../../public/img/Nauka.png";

import { promises as fs } from 'fs';
import SearchPublication from "../components/searchPublication/searchPublication";
import PublicationArticle from "../components/publicationArticle/publicationArticle";
import DownloadButton from "../components/downloadButton/downloadButton";

import {
	publicationArticles,
	articlesList
} from "./page.module.css"


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

export default async function ScientificArticles() {

	const data = await getData();
	const articles = await getArticles();
	return (
		<div>
			<Header />
			<Hero image={heroImage} header={data[1].header} textAbstracts={data[1].textAbstracts}  />
			<SearchPublication />
			<h1>Усі публікації факультету </h1>
			<section className={publicationArticles}>
				{/* <ul className={publicationArticle}></ul> */}
				<ul className={articlesList}>
					<PublicationArticle articles={ articles} />
			</ul>

			</section>
			<DownloadButton/>
			<Footer />

		</div>
	)
}