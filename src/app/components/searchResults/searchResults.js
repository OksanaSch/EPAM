'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from "react";

import BackToArticlesButton from "../backToArticlesButton/backToArticlesButton";
import {
	searchResultsHeader,
	searchResultsNumber,
	query
} from "./searchResults.module.css";

import SearchPublication from "../searchPublication/searchPublication";
import PublicationArticle from '../publicationArticle/publicationArticle';


export default function SearchResults({ articles }) {
	const [articlesData, setArticlesData] = useState([]);
	const [filteredArticles, setFilteredArticles] = useState([])
	useEffect(() => {
		setArticlesData(articles)
	}, [articles]);

	const params = useParams();
	const searchRequest = params.query.slice(8);
	const decodedURL = decodeURIComponent(`${searchRequest}`);

  // const handleSearch = (articlesData, searchRequest) => {
	// 	const filteredData = articlesData.filter(value => {
	// 		const decodedURL = decodeURIComponent(`${searchRequest}`);
	// 		const searchStr = decodedURL.toLowerCase();
	// 		console.log(searchStr);
  //     const titleMatches = value.title.toLowerCase().includes(searchStr);
  //     const textMatches = value.text.toLowerCase().includes(searchStr);
  //     const categoryMatches = value.title.toLowerCase().includes(searchStr);

  //     return titleMatches || textMatches || categoryMatches;
  //   });
  //   console.log(filteredData);
  //   setFilteredArticles(filteredData);
	// }

	// console.log(filteredArticles)

	return (
		<>
			<BackToArticlesButton />
				<h1 className={searchResultsHeader}>Результати пошуку</h1>
			<p className={searchResultsNumber}>За пошуковим запитом <span className={query}>&quot;{ decodedURL}&quot;</span> було знайдено 0 результат(ів)</p>
			<SearchPublication />
			{/* <PublicationArticle articles={filteredArticles } /> */}
				</>
	)
};