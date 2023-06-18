import React from 'react';
import styles from './SearchPage.module.css';
import CoursesBlock from '../CoursesBlock/CoursesBlock';

const data = [
	{
		id: 1,
		title: 'SQL',
		tags: ['SQL', 'Basic'],
		description:
			'Повседневная практика показывает, что базовый вектор развития, в своём классическом представлении, допускает внедрение своевременного выполнения сверхзадачи...',
		image: '',
		price: 500,
	},
	{
		id: 2,
		title: 'Продвинутый SQL',
		tags: ['SQL', 'Basic'],
		description:
			'Повседневная практика показывает, что базовый вектор развития, в своём классическом представлении, допускает внедрение своевременного выполнения сверхзадачи...',
		image: '',
		price: 500,
	},
];

const SearchPage = () => {
	return (
		<div className={styles.block}>
			<h1 className={styles.searchTitle}>Найти курс</h1>
			<div className={styles.searchForm}>
				<input
					className={styles.searchInput}
					type="text"
					placeholder="SQL"
				/>
				<button className={styles.seactBtn}>Найти</button>
			</div>
			<CoursesBlock courseList={data} />
		</div>
	);
};

export default SearchPage;
