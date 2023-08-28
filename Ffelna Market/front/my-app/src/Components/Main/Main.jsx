import React from 'react';
import styles from './Main.module.css';
import AppRoutes from '../Routes/AppRoutes';

const Main = () => {
	return (
		<div className={styles.main}>
			<AppRoutes />
		</div>
	);
};

export default Main;
