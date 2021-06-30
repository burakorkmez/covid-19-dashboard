import React from 'react';
import CountryGrid from './CountryGrid';
import Spinner from '../ui/Spinner';

const CountryItems = ({ items, isLoading }) => {
	//API returns 2 data that is 2 different ship's infos and I don't want them to be in my site so I delete them.
	const filtered = items.filter((item) => item.countryInfo._id !== null);

	return isLoading ? (
		<Spinner />
	) : (
		<section className="cards">
			{filtered.map((item) => (
				<CountryGrid key={item.countryInfo._id} item={item} />
			))}
		</section>
	);
};

export default CountryItems;
