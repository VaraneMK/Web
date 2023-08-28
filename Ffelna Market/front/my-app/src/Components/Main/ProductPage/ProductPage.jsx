import React, { useEffect, useState } from 'react';
import styles from './ProductPage.module.css';
import existsFile, { BASE_URL } from '../../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem } from '../../../redux/user/userSlice';

import { ReactComponent as Plus } from './../../../svg/plus.svg';
import { ReactComponent as Minus } from './../../../svg/minus.svg';
import { getCategoryName } from '../../../redux/products/productsSlice';

function ProductPage({ data }) {
	const [mainImage, setMainImage] = useState(0);
	const [currentStorage, setCurrentStorage] = useState(0);
	const [typeInfo, setTypeInfo] = useState(false);
	const cart = useSelector((state) => state.user.cart);

	const dispatch = useDispatch();

	const minusQuantity = () => {
		dispatch(deleteItem(data.storage[currentStorage].id));
	};
	const plusQuantity = () => {
		const quantity = data.storage[currentStorage].value;
		let max_count;

		if (cart.products.find((el) => el.spec.id === data.storage[currentStorage].id)) {
			max_count = cart.products.find((el) => el.spec.id === data.storage[currentStorage].id).value;
		}
		if (quantity !== max_count) {
			dispatch(addItem(data.storage[currentStorage].id));
		}
	};

	useEffect(() => {
		dispatch(getCategoryName(data.category_id));
	}, [dispatch, data]);

	const categoryName = useSelector((state) => state.products.categoryName);

	return (
		<div className={styles.item__solo}>
			<div className={styles.main__item}>
				<div className={styles.main__section}>
					<div className={styles.item__image}>
						<img
							className={styles.main__image}
							src={`${BASE_URL}/image/${data.images[mainImage]}.png`}
							alt={'item.title'}
							onError={existsFile}
						/>
					</div>
					<div className={styles.product__thumbnails + ' ' + styles.main__thumb}>
						{data.images.map((image, id) => (
							<div
								key={id}
								className={styles.product__thumbnail}>
								<img
									onClick={() => setMainImage(id)}
									src={`${BASE_URL}/image/${data.images[id]}.png`}
									alt={'item.title'}
									onError={existsFile}
								/>
							</div>
						))}
					</div>
				</div>

				<div className={styles.item__details}>
					<div className={styles.det__div}>
						<h1 className={styles.item__title}>{data.title}</h1>
						<div className={styles.item__price}>{data.storage[currentStorage].price}&#x20bd;</div>
						<hr className={styles.linia} />
						<div className={styles.charac}>
							<p>Категория: {categoryName.value}</p>
							<p>Цвет: {data.storage[currentStorage].color.title}</p>
						</div>
						<p className={styles.item__p}>{data.description}</p>
						<p className={styles.size__text}>(Размеры)</p>
						<nav className={styles.item__sizes}>
							{data.storage.map((el, id) => {
								return (
									<div
										key={el.id}
										className={currentStorage === id ? styles.size__active : styles.item__size}
										onClick={() => setCurrentStorage(id)}>
										{el.size.value}
									</div>
								);
							})}
						</nav>
						<button className={styles.product__inStock}>
							В наличии: {data.storage[currentStorage].value}
						</button>
					</div>

					{data.storage[currentStorage].value === 0 ? (
						<button className={styles.product__out__of__Stock}>Нет в наличии</button>
					) : cart.products ? (
						cart.products.find((el) => el.spec.id === data.storage[currentStorage].id) ? (
							<div className={styles.item__count}>
								<Minus
									onClick={() => minusQuantity()}
									className={styles.item__btn}
								/>
								<span>
									{cart.products.find((el) => el.spec.id === data.storage[currentStorage].id).value}
								</span>
								<Plus
									onClick={() => plusQuantity()}
									className={styles.item__btn}
								/>
							</div>
						) : (
							<button
								onClick={() => plusQuantity()}
								className={styles.add__to__cart}>
								Добавить в корзину
							</button>
						)
					) : null}
				</div>
			</div>

			<div className={styles.tabs}>
				<div
					onClick={() => {
						setTypeInfo(!typeInfo);
					}}
					className={!typeInfo ? styles.tab__active : styles.tab}>
					Описание
				</div>
				<div
					onClick={() => {
						setTypeInfo(!typeInfo);
					}}
					className={typeInfo ? styles.tab__active : styles.tab}>
					Характеристики
				</div>
				<div className={styles.product__info}>{!typeInfo ? data.description : data.specification}</div>
			</div>
		</div>
	);
}

export default ProductPage;
