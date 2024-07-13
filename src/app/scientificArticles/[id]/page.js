'use client';

import { useState } from 'react';

import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import {
	searchResults,
} from "./page.module.css";




export default function Page({onSubmit}) {

	const [searchRequest, setSearchRequest] = useState('');

  const handleRequestChange = event => {
    setSearchRequest(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchRequest.trim() === '') {
      toast.error('Type in your search request');
      return;
    }

   onSubmit(searchRequest);
  setSearchRequest('');

  };
	return (
		<div>
			<Header/>
			<section className={searchResults}>
				<h1>Результати пошуку</h1>
				<p>За пошуковим запитом <span>“тензор”</span> було знайдено 0 результат(ів)</p>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={searchRequest}
						onChange={handleRequestChange}
						autoComplete="off"
          	autoFocus
          	placeholder="Введіть назву або ключове слово"
						aria-label="Search"
							></input>
						<button type="submit">Шукати</button>
					</form>
					</section>
			<Footer/>
		</div>
	)
};