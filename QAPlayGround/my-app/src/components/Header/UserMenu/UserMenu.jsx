import React from 'react';
import styles from './UserMenu.module.css';
import { NavLink } from 'react-router-dom';

const UserMenu = ({ active, setActive, setAuth, auth }) => {
	if (active) {
		return (
			<div className={styles.userMenu}>
				<div className={styles.menuPoint}>
					<NavLink
						onClick={() => {
							setActive(false);
						}}
						to="/settings">
						Настройки
					</NavLink>
				</div>
				<div className={styles.menuPoint}>
					<NavLink
						onClick={() => {
							setActive(false);
							setAuth(!auth);
						}}
						to="">
						Выйти
					</NavLink>
				</div>
			</div>
		);
	}
};

export default UserMenu;
