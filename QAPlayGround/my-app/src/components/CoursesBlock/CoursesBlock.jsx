import React from 'react';
import styles from './CoursesBlock.module.css';
import CourseCard from './CourseCard/CourseCard';

const CoursesBlock = ({ courseList }) => {
	return (
		<div className={styles.coursesBlock}>
			{courseList.map((el) => (
				<CourseCard
					{...el}
					key={el.id}
				/>
			))}
		</div>
	);
};

export default CoursesBlock;
