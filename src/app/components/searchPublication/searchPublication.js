'use client';
import { useRouter } from 'next/navigation'
import { useState } from 'react';

import {
	searchPublicationForm,
	searchPublicationInput,
	searchPublicationButton
} from "./searchPublication.module.css";

export default function SearchPublication({}) {
	const [searchRequest, setSearchRequest] = useState('');
	const router = useRouter()
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
          	// autoFocus
          	placeholder="Введіть назву або ключове слово"
						aria-label="Search"
							></input>
					<button 
					type="submit"
		  			onClick={() => router.push(`/scientificArticles/search/query=${searchRequest}`)}
          			disabled={searchRequest.length < 3} 
					 className={searchPublicationButton}>
					Шукати
					</button>
					</form>


    )}