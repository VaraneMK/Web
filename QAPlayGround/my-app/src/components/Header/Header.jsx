import React, { useState } from 'react';
import styles from './Header.module.css';
import { ReactComponent as Logo } from './../../icons/Logo.svg';
import { ReactComponent as ArrowDown } from './../../icons/ArrowDown.svg';
import { NavLink } from 'react-router-dom';
import UserMenu from './UserMenu/UserMenu';
import Modal from '../Modal/Modal';

const Header = (props) => {
	const [menuActive, setMenuActive] = useState(false);
	const [modalActive, setModalActive] = useState(false);

	let handleClick = (e) => {
		e.preventDefault();
	};

	return (
		<header className={styles.header}>
			<NavLink
				to="/"
				className={styles.logo}>
				<Logo />
			</NavLink>
			{props.isAuth ? (
				<>
					<div className={styles.navLinks}>
						<NavLink
							to="/userCourses"
							className={(navData) => (navData.isActive ? styles.activeLink : styles.headerLink)}>
							Мои курсы
						</NavLink>
						<NavLink
							to="/quests"
							className={(navData) => (navData.isActive ? styles.activeLink : styles.headerLink)}>
							Тестовые задания
						</NavLink>
						<NavLink
							onClick={handleClick}
							to="/sources"
							className={(navData) =>
								navData.isActive ? styles.activeLink : styles.headerLink + ' ' + styles.disabledLink
							}>
							Полезные материалы
						</NavLink>
					</div>
					<div
						onClick={() => setMenuActive(!menuActive)}
						className={styles.userBtn}>
						<img
							src={require('./../../img/avatar.png')}
							alt=""
						/>
						<span>{props.userName}</span>
						<ArrowDown />
					</div>
					<UserMenu
						auth={props.auth}
						setAuth={props.setAuthStatus}
						active={menuActive}
						setActive={setMenuActive}
					/>
				</>
			) : (
				<button
					onClick={() => setModalActive(true)}
					className={styles.authBtn}>
					Войти
				</button>
			)}
			<Modal
				active={modalActive}
				setActive={setModalActive}>
				<div className={styles.modalTitle}>Авторизация</div>
				<input
					placeholder="EMail"
					type="text"
					className={styles.modalInput}
				/>
				<input
					placeholder="Пароль"
					type="text"
					className={styles.modalInput}
				/>
				<div
					className={styles.modalBtn}
					onClick={() => {
						props.setAuthStatus(false);
						setModalActive(!modalActive);
					}}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					Войти
				</div>
			</Modal>
		</header>
	);
};

export default Header;
