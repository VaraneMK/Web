import React from 'react';
import styles from './Numbers.module.css';

const Numbers = () => {
	return (
		<div className={styles.numbers__container}>
			<div className={styles.numbers}>
				<h3 className={styles.number}>2574</h3>
				<div className={styles.line__number}></div>
				<p className={styles.text__number}>Honey jars produced in 2020</p>
			</div>
			<div className={styles.numbers}>
				<h3 className={styles.number}>130</h3>
				<div className={styles.line__number}></div>
				<p className={styles.text__number}>Customers every month</p>
			</div>
			<div className={styles.numbers}>
				<h3 className={styles.number}>12</h3>
				<div className={styles.line__number}></div>
				<p className={styles.text__number}>Swaths in California</p>
			</div>
			<div className={styles.numbers}>
				<h3 className={styles.number}>3946</h3>
				<div className={styles.line__number}></div>
				<p className={styles.text__number}>Bees working for you</p>
			</div>
		</div>
	);
};

export default Numbers;
