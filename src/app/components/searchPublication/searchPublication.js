'use client';

import { useState } from 'react';
import Link from 'next/link';

import {
	searchResults,
	searchPublicationForm,
	searchPublicationInput,
	searchPublicationButton
} from "./searchPublication.module.css";

export default function SearchPublication({onSubmit}) {
	const [searchRequest, setSearchRequest] = useState('');

  const handleRequestChange = event => {
    setSearchRequest(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

		if (searchRequest.trim() === '' || searchRequest.length > 3) {
      <p>Type in your search request</p>;
      return;
    }

  onSubmit(searchRequest);
  setSearchRequest('');

	};

	return (

			<section className={searchResults}>
				<h1>Результати пошуку</h1>
				<p>За пошуковим запитом <span>“тензор”</span> було знайдено 0 результат(ів)</p>
				<form onSubmit={handleSubmit} className={searchPublicationForm}>
					<input className={searchPublicationInput}
						type="text"
						value={searchRequest}
						onChange={handleRequestChange}
						autoComplete="off"
          	autoFocus
          	placeholder="Введіть назву або ключове слово"
						aria-label="Search"
							></input>
					<button type="submit" className={searchPublicationButton}>
						<Link href={`/scientificArticles/searchRequest=${searchRequest}`}>Шукати</Link>
					</button>
					</form>
					</section>

    )}