import React from 'react';
import styles from './TeacherCard.module.css';

const TeacherCard = (props) => {
	return (
		<div className={styles.card}>
			<img
				className={styles.photo}
				src={props.img}
				alt="TeacherPhoto"
			/>
			<span className={styles.name}>{props.name}</span>
			<span className={styles.prof}>{props.prof}</span>
		</div>
	);
};

export default TeacherCard;
