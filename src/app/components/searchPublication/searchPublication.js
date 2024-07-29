'use client';

import { useState } from 'react';
import Link from 'next/link';

import {
	searchPublicationForm,
	searchPublicationInput,
	searchPublicationButton
} from "./searchPublication.module.css";

export default function SearchPublication({}) {
	const [searchRequest, setSearchRequest] = useState('');

  const handleRequestChange = event => {
    setSearchRequest(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();


  setSearchRequest('');

	};

	return (


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
						<Link href={`/scientificArticles/search/query=${searchRequest}`}>Шукати</Link>
					</button>
					</form>


    )}