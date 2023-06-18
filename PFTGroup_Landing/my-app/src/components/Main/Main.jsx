import React from 'react';
import styles from './Main.module.css';
import { Route, Routes } from 'react-router-dom';
import DefaultPage from '../DefaultPage/DegaultPage';
import ProjectPageContainer from '../ProjectPageContainer/ProjectPageContainer';

const Main = () => {
	return (
		<div className={styles.main}>
			<div className={styles.gradient__zones}></div>
			<Routes>
				<Route
					path="/"
					element={<DefaultPage />}
				/>
				<Route
					path="/project/:projectId?"
					element={<ProjectPageContainer />}
				/>
			</Routes>
		</div>
	);
};

export default Main;
