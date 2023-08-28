import React from 'react';
import styles from './ProductItem.module.css';
import existsFile, { BASE_URL } from '../../../../../utils/constants';
import { Link } from 'react-router-dom';

const ProductItem = (props) => {
	return (
		<div className={styles.product}>
			<Link
				to={`/product/${props.id}`}
				className={styles.product__image}>
				<img
					src={`${BASE_URL}/image/${props.img[0]}.png`}
					alt="img1"
					onError={existsFile}
				/>
				<img
					src={`${BASE_URL}/image/${props.img[1]}.png`}
					alt="hover-img"
					className={styles.hover__image}
					onError={existsFile}
				/>
			</Link>
			<div className={styles.product__info}>
				<h2 className={styles.product__name}>{props.name}</h2>
				<div className={styles.product__details}>
					<span className={styles.product__price}>{props.price} &#x20bd;</span>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
