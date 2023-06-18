import React from 'react';
import styles from './Switcher.module.css';

const Switcher = (props) => {
	return (
		<label className={styles.switch}>
			<input
				type="checkbox"
				// checked={props.isToggle}
				onChange={props.onToggle}
			/>
			<span className={styles.slider}></span>
		</label>
	);
};

export default Switcher;
