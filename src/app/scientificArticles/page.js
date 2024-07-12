import Footer from "@/app/components/footer/footer";
import Header from "@/app/components/header/header";
import Hero from "../components/hero/hero";
import heroImage from "../../../public/img/Nauka.png";

import { promises as fs } from 'fs';
import SearchPublication from "../components/searchPublication/searchPublication";
import PublicationArticle from "../components/publicationArticle/publicationArticle";
import DownloadButton from "../components/downloadButton/downloadButton"
async function getData() {
 const path = process.cwd() + "/src/app/hero.json"
  const file = await fs.readFile(path, "utf8");
  const data = JSON.parse(file);
  return data;
}

export default async function ScientificArticles() {

	const data = await getData();
	return (
		<>
			<Header />
			<Hero image={heroImage} header={data[1].header} listHeader={data[1].listDescription} listItems={data[1].listItems} />
			<SearchPublication />
			<PublicationArticle/>
			<DownloadButton/>
			<Footer />
		</>
	)
}