import React from 'react';
import styles from './MemberCard.module.css';

const MemberCard = (props) => {
	return (
		<div className={styles.member__card}>
			<div className={styles.member__photo}>
				<img
					className={styles.member__img}
					src={props.photo}
					alt=""
				/>
			</div>
			<span className={styles.member__name}>{props.name}</span>
			<span className={styles.member__prof}>{props.prof}</span>
		</div>
	);
};

export default MemberCard;
