'use client';

import { useParams } from 'next/navigation';
import {
	searchResults,
	searchResultsHeader,
	searchResultsNumber,
	query
} from "./page.module.css";
import SearchPublication from '@/app/components/searchPublication/searchPublication';
import BackToArticlesButton from "@/app/components/backToArticlesButton/backToArticlesButton";

export default function Page() {
	const params = useParams();
	const searchRequest = params.query.slice(8);

	return (
		<section className={searchResults}>
			<BackToArticlesButton />
				<h1 className={searchResultsHeader}>Результати пошуку</h1>
			<p className={searchResultsNumber}>За пошуковим запитом <span className={query}>&quot;{ searchRequest}&quot;</span> було знайдено 0 результат(ів)</p>
					<SearchPublication />
				</section>
	)
};