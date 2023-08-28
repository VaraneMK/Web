import React from 'react';
import styles from './Contacts.module.css';

const Contacts = () => {
	return (
		<section
			id="contacts"
			className={styles.contacts}>
			<hr />
			<p className={styles.mini__heading}>Контакты</p>
			<h5 className={styles.heading}>Мы всегда на связи</h5>
			<span className={styles.heading__answer}>
				Не стесняйтесь обращаться к нам, если вам нужна консультация:
			</span>
			{/* <section className={styles.contacts__info}>
				<h6 className={styles.sub__heading}>Address</h6>
				<p>
					303 E 61st St, New York, <br />
					NY 10065
				</p>
			</section> */}
			<section className={styles.contacts__info}>
				<h6 className={styles.sub__heading}>Времы работы</h6>
				<p>Пн-вс: 10:00-22:00</p>
			</section>
			<section className={styles.contacts__info}>
				<h6 className={styles.sub__heading}>Контакты для связи</h6>
				<p>ffelna@yandex.ru</p>
			</section>
		</section>
	);
};

export default Contacts;
