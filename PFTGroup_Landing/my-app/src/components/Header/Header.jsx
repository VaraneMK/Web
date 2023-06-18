import React from 'react';
import { NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
	return (
		<div className={styles.header}>
			<Routes>
				<Route
					path="/"
					element={
						<div>
							<NavLink
								onClick={() => {
									const project = document.getElementById('#project');
									const y = project.getBoundingClientRect().top + window.scrollY;
									window.scrollTo({
										top: y,
										left: 0,
										behavior: 'smooth',
									});
								}}
								className={styles.header__link}
								to="/">
								проекты
							</NavLink>
							<NavLink
								onClick={() => {
									const team = document.getElementById('#team');
									const y = team.getBoundingClientRect().top + window.scrollY;
									window.scroll({
										top: y,
										behavior: 'smooth',
									});
								}}
								className={styles.header__link}
								to="/">
								команда
							</NavLink>
							<NavLink
								onClick={() => {
									const about = document.getElementById('#about');
									const y = about.getBoundingClientRect().top + window.scrollY;
									window.scroll({
										top: y,
										behavior: 'smooth',
									});
								}}
								className={styles.header__link}
								to="/">
								о нас
							</NavLink>
						</div>
					}
				/>
				<Route
					path="/project/:projectId?"
					element={
						<div>
							<span
								onClick={() => {
									const task = document.getElementById('task');
									const y = task.getBoundingClientRect().top + window.scrollY;
									window.scrollTo({
										top: y,
										left: 0,
										behavior: 'smooth',
									});
								}}
								className={styles.header__link}>
								Поставленная задача
							</span>
							<span
								onClick={() => {
									const solution = document.getElementById('solution');
									const y = solution.getBoundingClientRect().top + window.scrollY;
									window.scroll({
										top: y,
										behavior: 'smooth',
									});
								}}
								className={styles.header__link}>
								Решение
							</span>
							<span
								onClick={() => {
									const stack = document.getElementById('stack');
									const y = stack.getBoundingClientRect().top + window.scrollY;
									window.scroll({
										top: y,
										behavior: 'smooth',
									});
								}}
								className={styles.header__link}>
								Стек технологий
							</span>
						</div>
					}
				/>
			</Routes>
		</div>
	);
};

export default Header;
