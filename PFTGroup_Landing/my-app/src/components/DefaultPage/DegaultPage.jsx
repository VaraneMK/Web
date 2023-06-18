import React, { useState } from 'react';
import styles from './DefaultPage.module.css';
import { ReactComponent as CompanyName } from './../../img/Vector(1).svg';
import TeamBlock from '../TeamBlock/TeamBlock';
import ProjectBlock from './../ProjectBlock/ProjectBlock';
import Modal from './../Modal/Modal';
import About from '../about/about';

const data = [
	{
		project_id: 1,
		project_title: 'Сайт знакомств',
		project_subtitle: 'GIMEROS',
		project_img: require('./../../img/project.png'),
	},
	{
		project_id: 2,
		project_title: 'Облачное хранилище',
		project_subtitle: 'PFT Cloud',
		project_img: require('./../../img/logo_pft_cloud.png'),
	},
	{
		project_id: 3,
		project_title: 'Сервис связи',
		project_subtitle: 'PFT Calls',
		project_img: require('./../../img/logo_pft_calls.png'),
	},
	{
		project_id: 4,
		project_title: 'Обучающая платформа',
		project_subtitle: 'QA PlayGround',
		project_img: require('./../../img/logo_qaplayground.png'),
	},
	{
		project_id: 5,
		project_title: 'ВООБЩЕ ХЗ',
		project_subtitle: 'PFT Forms',
		project_img: require('./../../img/logo_pft_forms.png'),
	},
	{
		project_id: 6,
		project_title: 'Таинственное',
		project_subtitle: '?',
		// project_img: require('./../../img/project.png'),
	},
];

const DefaultPage = () => {
	const [modalActive, setModalActive] = useState(false);
	return (
		<div className={styles.content}>
			<div className={styles.home__screen}>
				<div className={styles.home__screen__content}>
					<div className={styles.home__screen__title}>
						<CompanyName className={styles.company__name} />
					</div>
					<div className={styles.logo}></div>
					<div className={styles.home__screen__info}>
						<div className={styles.home__screen__subtitle}>
							PFT Cloud - сервис для безопасного и эффективного хранения, защиты и обмена файлами в
							Интернете.
						</div>
						<div
							onClick={() => setModalActive(true)}
							className={styles.home__screen__button}>
							связаться
						</div>
					</div>
				</div>
			</div>
			<div className={styles.container}>
				<ProjectBlock projects={data} />
				<TeamBlock />
				<About />
			</div>
			<Modal
				active={modalActive}
				setActive={setModalActive}>
				<form>
					<input
						placeholder="Имя"
						type="text"
						className={styles.modalInput}
					/>
					<input
						placeholder="Фамилия"
						type="text"
						className={styles.modalInput}
					/>
					<input
						placeholder="Номер телефона"
						type="tel"
						className={styles.modalInput}
					/>
					<input
						placeholder="Почта"
						type="email"
						className={styles.modalInput}
					/>
					<div
						className={styles.modalBtn}
						onClick={() => {
							setModalActive(!modalActive);
						}}>
						Отправить
					</div>
				</form>
			</Modal>
		</div>
	);
};

export default DefaultPage;
