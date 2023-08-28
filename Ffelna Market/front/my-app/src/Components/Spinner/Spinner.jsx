import React from 'react';
import styles from './Spinner.module.css';
import { BeatLoader } from 'react-spinners';

function Spinner() {
	return (
		<div className={styles.spinner}>
			<BeatLoader
				color="#fc7210"
				size="30px"
			/>
		</div>
	);
}

export default Spinner;
