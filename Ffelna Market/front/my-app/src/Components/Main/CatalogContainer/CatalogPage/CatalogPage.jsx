import React from 'react';
import styles from './CatalogPage.module.css';
import ProductItem from './ProductItem/ProductItem';
import { useSelector } from 'react-redux';
import Spinner from '../../../Spinner/Spinner';
import ErrorPage from '../../../ErrorPage/ErrorPage';

const CatalogPage = (props) => {
	const products = useSelector((state) => state.products);

	if (products.isLoading) return <Spinner />;
	if (products.isError) return <ErrorPage />;
	return (
		<div className={styles.catalog__page}>
			<p
				className={styles.category__name}
				id="headName">
				{products.categoryName.value}
			</p>
			<div className={styles.products__grid}>
				{products.list.map((el) => (
					<ProductItem
						key={el.id}
						id={el.id}
						name={el.title}
						img={el.images}
						price={el.storage[0].price}
					/>
				))}
			</div>
		</div>
	);
};

export default CatalogPage;
