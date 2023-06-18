import React from 'react';
import styles from './CourseCard.module.css';
import { NavLink } from 'react-router-dom';

const CourseCard = ({ tags, ...props }) => {
	let tagList = tags.map((el) => (
		<div
			className={styles.tag}
			key={el}>
			{el}
		</div>
	));

	return (
		<NavLink to={`/courses/${props.id}`}>
			<div className={styles.card}>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<div className={styles.information}>
					<div className={styles.courseTitle}>
						<div
							className={styles.courseName}
							title={props.title}>
							{props.title}
						</div>
						<div className={styles.addInfo}>{props.price ? props.price : props.progress}</div>
					</div>
					<div className={styles.courseTags}>{tagList}</div>
					<div className={styles.courseDesc}>{props.description}</div>
				</div>
				<div className={styles.courseImg}>
					<img
						src={props.image ? require(props.image) : ''}
						alt=""
						className={styles.img}
					/>
				</div>
			</div>
		</NavLink>
	);
};

export default CourseCard;
