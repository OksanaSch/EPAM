'use client';

import { useState } from 'react';
import Link from 'next/link';

import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import {
	searchResults,
} from "./page.module.css";
import SearchPublication from '@/app/components/searchPublication/searchPublication';




export default function Page({onSubmit}) {

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
					<SearchPublication />
				</section>
	)
};