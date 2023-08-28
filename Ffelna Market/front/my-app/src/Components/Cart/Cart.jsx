import React, { useMemo } from 'react';
import styles from './Cart.module.css';
import { useDispatch } from 'react-redux';
import { ReactComponent as Plus } from './../../svg/plus.svg';
import { ReactComponent as Minus } from './../../svg/minus.svg';
import { ReactComponent as Delete } from './../../svg/delete.svg';
import { Link } from 'react-router-dom';
import existsFile, { BASE_URL } from '../../utils/constants';
import { addItem, cleanCart, deleteItem, deleteProductFromCart } from '../../redux/user/userSlice';
import Spinner from '../Spinner/Spinner';
import { useState } from 'react';
import Modal from '../Modal/Modal';

function CartPage({ cart }) {
	const [modalShow, setModalShow] = useState(false);
	const dispatch = useDispatch();
	const sortedCart = useMemo(() => {
		return [...cart.products].sort((a, b) => {
			const nameA = a.spec.id;
			const nameB = b.spec.id;
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}
			return 0;
		});
	}, [cart]);

	const totalPrice = useMemo(() => {
		return sortedCart.reduce((sum, el) => {
			return sum + el.value * el.spec.price;
		}, 0);
	}, [sortedCart]);

	const minusQuantity = (id) => {
		dispatch(deleteItem(id));
	};
	const plusQuantity = (id) => {
		const item = sortedCart.find((el) => el.spec.id === id);
		const quantity = item.value;
		const max_count = item.spec.value;

		if (quantity !== max_count) {
			dispatch(addItem(id));
		}
	};
	const clearCart = () => {
		dispatch(cleanCart());
	};
	const deleteProduct = (id) => {
		dispatch(deleteProductFromCart(id));
	};

	return (
		<div className={styles.shop__cart}>
			<h1 className={styles.cart__title}>Корзина</h1>
			{cart.isLoading ? (
				<Spinner />
			) : (
				<>
					{sortedCart.length === 0 ? (
						'Товары отсутствуют'
					) : (
						<>
							<div className={styles.list}>
								{sortedCart.map((el) => (
									<div
										key={el.id}
										className={styles.cart__item}>
										<Link
											to={`/product/${el.info.id}`}
											className={styles.item__img}>
											<img
												src={`${BASE_URL}/image/${el.info.images[0]}.png`}
												alt=""
												onError={existsFile}
											/>
										</Link>
										<div className={styles.item__info}>
											<div className={styles.item__title}>{el.info.title}</div>
											<div className={styles.item__size}>Размер: {el.spec.size.value}</div>
											<div className={styles.item__color}>
												Цвет:{' '}
												<div
													style={{
														width: 20 + 'px',
														height: 20 + 'px',
														borderRadius: 50 + '%',
														backgroundColor: `${el.spec.color.value}`,
														border: 1 + 'px solid black',
													}}></div>
											</div>
										</div>
										<div className={styles.price__and__count}>
											<div className={styles.item__count}>
												<Minus
													onClick={() => minusQuantity(el.spec.id)}
													className={styles.item__btn}
												/>
												<span>{el.value}</span>
												<Plus
													onClick={() => plusQuantity(el.spec.id)}
													className={styles.item__btn}
												/>
											</div>
											<div className={styles.item__price}>
												Цена: {el.value * el.spec.price} &#x20bd;
											</div>
										</div>
										<Delete
											onClick={() => deleteProduct(el.spec.id)}
											className={styles.delete__btn}
										/>
									</div>
								))}
								<div className={styles.total__price}>
									Итого: {totalPrice}
									&#x20bd;
								</div>
								<div className={styles.btn__side}>
									<button
										onClick={() => clearCart()}
										className={styles.clear__cart}>
										Очистить корзину
									</button>
									<button
										onClick={() => {
											setModalShow(true);
										}}
										className={styles.add__order}>
										Оформить заказ
									</button>
								</div>
							</div>
						</>
					)}
				</>
			)}
			<Modal
				active={modalShow}
				setActive={setModalShow}></Modal>
		</div>
	);
}

export default CartPage;
