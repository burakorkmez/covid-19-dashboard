import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav className="pagination-container">
			<ul className="page-nums">
				{pageNumbers.map((number) => (
					<li key={number}>
						<a href="#!" onClick={() => paginate(number)}>
							{number}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
