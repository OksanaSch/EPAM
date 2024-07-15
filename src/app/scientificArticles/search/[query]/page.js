'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import {
	searchResults,
	linkBack
} from "./page.module.css";
import SearchPublication from '@/app/components/searchPublication/searchPublication';
import BackToArticlesButton from "@/app/components/backToArticlesButton/backToArticlesButton";

export default function Page() {
	const params = useParams();
	const searchRequest = params.query.slice(8);

	return (
		<section className={searchResults}>
			<BackToArticlesButton />
				<h1>Результати пошуку</h1>
			<p>За пошуковим запитом <span>{ searchRequest}</span> було знайдено 0 результат(ів)</p>
					<SearchPublication />
				</section>
	)
};