import React from 'react';
import styles from './Catalog.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Spinner from '../../../Spinner/Spinner';
import ErrorPage from '../../../ErrorPage/ErrorPage';

const Catalog = () => {
	const catalog = useSelector((state) => state.categories);

	if (catalog.isLoading) {
		return <Spinner />;
	}
	if (catalog.isError) {
		return <ErrorPage />;
	}
	const categoriesList = catalog.list.map((el) => {
		return (
			<NavLink
				key={el.id}
				to={`/category/${el.id}`}>
				{el.value}
			</NavLink>
		);
	});
	return (
		<section className={styles.borders__cat}>
			<div className={styles.catalog}>{categoriesList}</div>
		</section>
	);
};

export default Catalog;
