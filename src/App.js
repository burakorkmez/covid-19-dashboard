import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import CountryItems from './components/countries/CountryItems';
import Header from './components/ui/Header';
import Search from './components/ui/Search';
import Footer from './components/ui/Footer';
import Pagination from './components/ui/Pagination';

function App() {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [query, setQuery] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, , setItemsPerPage] = useState(15);

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios(
				`https://corona.lmao.ninja/v2/countries/${query}?sort=cases`
			);

			//I used ternary because when we search for a country in search bar, api gives us object and in that
			//way we can't map through it in CountryItems.js
			setItems(query === '' ? response.data : Array(response.data));
			setIsLoading(false);
		};

		fetchData();
	}, [query]);

	const indexOfLastPost = currentPage * itemsPerPage;
	const indexOfFirstPost = indexOfLastPost - itemsPerPage;
	const currentCountries = items.slice(indexOfFirstPost, indexOfLastPost);

	const paginate = (number) => setCurrentPage(number);

	return (
		<div className="container">
			<Header />
			<Search getQuery={(query) => setQuery(query)} />
			<CountryItems items={currentCountries} isLoading={isLoading} />
			<Pagination
				itemsPerPage={itemsPerPage}
				totalItems={items.length}
				paginate={paginate}
			/>
			<Footer />
		</div>
	);
}

export default App;
