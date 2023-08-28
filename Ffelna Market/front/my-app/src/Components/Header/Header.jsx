import React, { useState } from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Cart } from './../../svg/cart.svg';

const Header = () => {
	let [burgerMenu, setMenuShow] = useState(false);
	return (
		<div className={styles.header__container}>
			<div className={styles.background__darkened}>
				<nav className={styles.nav__header}>
					<div className={` ${styles.nav__container} ${styles.container}`}>
						<div
							onClick={() => {
								setMenuShow(!burgerMenu);
							}}
							className={burgerMenu ? styles.burger + ' ' + styles.active : styles.burger}>
							<span></span>
							<span></span>
							<span></span>
						</div>
						<div className={styles.nav__logo_container}>
							<NavLink
								onClick={() => {
									setMenuShow(false);
								}}
								to="/">
								<img
									src={require('./../../img/logo.png')}
									alt=""
								/>
							</NavLink>
						</div>
					</div>
				</nav>
			</div>
			<div
				className={`${styles.links__container} ${styles.burger__links} ${
					burgerMenu ? styles.burger__links_active : false
				}`}>
				<div className={styles.header__text_links}>
					<NavLink
						onClick={() => {
							setMenuShow(false);
						}}
						to="/"
						className={(navData) => (navData.isActive ? styles.active : styles.item)}>
						Главная
					</NavLink>

					<NavLink
						onClick={() => {
							setMenuShow(false);
						}}
						to="/category"
						className={(navData) => (navData.isActive ? styles.active : styles.item)}>
						Категории
					</NavLink>

					<NavLink
						onClick={() => {
							setMenuShow(false);
						}}
						to="/cart"
						className={(navData) => (navData.isActive ? styles.cart__active : styles.cart)}>
						<Cart />
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Header;
