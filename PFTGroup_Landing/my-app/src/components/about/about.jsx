import styles from './about.module.css';

function About() {
	return (
		<div
			id="#about"
			className={styles.about}>
			<div className={styles.about__titles}>
				<h1 className={styles.about__title}>О нас</h1>
				<h1 className={styles.about__subtitle}>О нас</h1>
			</div>

			<div className={styles.about__text}>
				Мы команда, состоящая из талантливых квалифицированных разноплановых амбициозных ребят, цель которых -
				создавать нестандартные и интересные <span className={styles.about__word}>IT продукты</span>. У нас вы
				найдете то, что не всегда можно найти в крупных компаниях -{' '}
				<span className={styles.about__word}>индивидуальный подход</span>, тесное сотрудничество и открытость.
				Мы убеждены, что каждый клиент <span className={styles.about__word}>уникален</span> и заслуживает
				уникального решения. Скучные стандартные шаблоны это не про нас. Мы создаем{' '}
				<span className={styles.about__word}>уникальные</span> стратегии и дизайн-концепты, соответствующие
				целям и потребностям клиента. <span className={styles.about__word}>Обращайтесь</span> к нам и мы поможем
				достичь ваших целей!
			</div>
		</div>
	);
}

export default About;
