import React from 'react';
import styles from './UnAuth.module.css';
import { ReactComponent as ArrowLeft } from './../../icons/ArrowLeft.svg';
import { ReactComponent as ArrowRight } from './../../icons/ArrowRight.svg';
import TeacherCard from '../TeacherCard/TeacherCard';
import { NavLink } from 'react-router-dom';
// import { NavLink } from "react-router-dom";

function UnAuthPage(props) {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<div className={styles.preview}>
					<div className={styles.previewLink}>Golang</div>
					<div className={styles.previewLink}>Component</div>
					<NavLink
						to="/searchPage"
						className={styles.previewLink}>
						Python
					</NavLink>
					<div className={styles.previewLink}>Unit</div>
					<div className={styles.previewLink}>SQL</div>
					<div className={styles.previewLink}>Integration</div>
					<div className={styles.previewLink}>TypeScript</div>
					<div className={styles.previewLink}>System</div>
					<div className={styles.previewLink}>Java</div>
					<div className={styles.previewLink}>Acceptance</div>
					<div className={styles.previewLink}>UI/UX</div>
					<div className={styles.previewLink}>Load</div>
					<div className={styles.previewLink}>Flutter</div>
					<h1 className={styles.title}>
						Открой для себя профессию
						<React.Fragment>
							<br></br>
						</React.Fragment>
						<span className={styles.greenText}>Тестировщик</span>
					</h1>
				</div>
				<div className={styles.mainContent}>
					<div className={styles.aboutProject}>
						<h2 className={styles.contentTitle + ' ' + styles.titleAboutProject}>О проекте</h2>
						<p className={styles.contentText}>
							Наша платформа обучает тестированию ПО на трех уровнях сложности: базовом, среднем и
							продвинутом. У нас есть как бесплатные, так и платные курсы. Вы можете проходить их
							индивидуально в удобное для вас время. Мы предлагаем широкий выбор курсов, включая
							продвинутые программы. Наши специалисты создают актуальные курсы, следя за последними
							тенденциями. Наш интерфейс очень удобный. Начинайте обучение на платформе уже сегодня и
							развивайтесь как профессионал в тестировании ПО!
						</p>
					</div>
					<div className={styles.ourTeachers}>
						<h2 className={styles.contentTitle + ' ' + styles.titleOurTeachers}>Наши преподаватели</h2>
						<div className={styles.teachersSlider}>
							<div className={styles.sliderSide}>
								<ArrowLeft className={styles.arrowLeft + ' ' + styles.arrow} />
							</div>
							<div className={styles.cards}>
								<TeacherCard
									img={require('./../../img/kiknadze.png')}
									name="Георгий Кикнадзе"
									prof="Python-developer"
								/>
								<TeacherCard
									img={require('./../../img/sadovaya.png')}
									name="Садовая Софья"
									prof="QA-инженер"
								/>
							</div>
							<div className={styles.sliderSide}>
								<ArrowRight className={styles.arrowRight + ' ' + styles.arrow} />
							</div>
						</div>
					</div>
					<div className={styles.offerSide}>
						<h1>Хотите учиться?</h1>
						<button className={styles.offerBtn}>
							Приступить
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</button>
					</div>
				</div>
			</main>
		</div>
	);
}

export default UnAuthPage;
