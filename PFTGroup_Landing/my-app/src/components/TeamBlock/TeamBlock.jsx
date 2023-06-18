import React from 'react';
import styles from './TeamBlock.module.css';
import MemberCard from './MemberCard/MemberCard';
import Carousel from './Carousel/Carousel';

const data = [
	{
		id: 1,
		name: 'Нодь Анна',
		prof: 'web дизайнер',
		photo: require('./../../img/nod.png'),
	},
	{
		id: 2,
		name: 'Аванесян Артём',
		prof: 'frontend разработчик',
		photo: require('./../../img/avanesyan.png'),
	},
	{
		id: 3,
		name: 'Аванесян Артём',
		prof: 'frontend разработчик',
		photo: require('./../../img/avanesyan.png'),
	},
	{
		id: 4,
		name: 'Аванесян Артём',
		prof: 'frontend разработчик',
		photo: require('./../../img/avanesyan.png'),
	},
	{
		id: 5,
		name: 'Аванесян Артём',
		prof: 'frontend разработчик',
		photo: require('./../../img/avanesyan.png'),
	},
	{
		id: 6,
		name: 'Аванесян Артём',
		prof: 'frontend разработчик',
		photo: require('./../../img/avanesyan.png'),
	},
	{
		id: 7,
		name: 'Аванесян Артём',
		prof: 'frontend разработчик',
		photo: require('./../../img/avanesyan.png'),
	},
	{
		id: 8,
		name: 'Аванесян Артём',
		prof: 'frontend разработчик',
		photo: require('./../../img/avanesyan.png'),
	},
	{
		id: 9,
		name: 'Аванесян Артём',
		prof: 'frontend разработчик',
		photo: require('./../../img/avanesyan.png'),
	},
	{
		id: 10,
		name: 'Аванесян Артём',
		prof: 'frontend разработчик',
		photo: require('./../../img/avanesyan.png'),
	},
];

const TeamBlock = () => {
	let members = data.map((el) => {
		return (
			<MemberCard
				key={el.id}
				name={el.name}
				prof={el.prof}
				photo={el.photo}
			/>
		);
	});
	return (
		<div
			id="#team"
			className={styles.team__block}>
			<h1 className={styles.team__block__title}>Команда</h1>
			<p className={styles.team__block__subtitle}>PFT</p>
			<Carousel>{members}</Carousel>
		</div>
	);
};

export default TeamBlock;
