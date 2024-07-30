
import {
	searchResults
} from "./page.module.css";

import SearchPublication from '@/app/components/searchPublication/searchPublication';
import BackToArticlesButton from "@/app/components/backToArticlesButton/backToArticlesButton";

import getArticles from '@/app/components/hooks/getArticles';
import SearchResults from "@/app/components/searchResults/searchResults";

const articles = await getArticles();

export default function Page() {


	return (

		<main id='main' className={searchResults}>
			<SearchResults articles={ articles} />
				</main>

	)
};