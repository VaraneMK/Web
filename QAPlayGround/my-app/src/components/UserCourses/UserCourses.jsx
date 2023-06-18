import React from 'react';
import styles from './UserCourses.module.css';
import CoursesBlock from '../CoursesBlock/CoursesBlock';

const data = [
	{
		id: 1,
		title: 'SQL',
		tags: ['SQL', 'Basic'],
		description:
			'Повседневная практика показывает, что базовый вектор развития, в своём классическом представлении, допускает внедрение своевременного выполнения сверхзадачи...',
		image: '',
		progress: '0%',
	},
	{
		id: 2,
		title: 'Продвинутый SQL',
		tags: ['SQL', 'Basic'],
		description:
			'Повседневная практика показывает, что базовый вектор развития, в своём классическом представлении, допускает внедрение своевременного выполнения сверхзадачи...',
		image: '',
		progress: '0%',
	},
];
const UserCourses = (props) => {
	return (
		<div className={styles.block}>
			<h1 className={styles.mainTitle}>Мои курсы</h1>
			<CoursesBlock courseList={data} />
		</div>
	);
};

export default UserCourses;
