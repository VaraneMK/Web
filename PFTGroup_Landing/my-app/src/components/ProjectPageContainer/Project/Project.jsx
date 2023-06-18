import React from 'react';
import styles from './Project.module.css';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Back } from './../../../img/back.svg';

const data = [
	{
		project_id: 1,
		project_title: 'Сайт знакомств',
		project_name: 'Gimeros',
		project_image: require('./../../../img/project__image/img_gimeros.png'),
		project_colors: ['#363238', '#D15269', '#D97070', '#F0BEC1'],
		project_logo: require('./../../../img/project__image/logo_gimeros.png'),
		project_date_release: '07.07.2024',
	},
	{
		project_id: 2,
		project_title: 'Облачное хранилище',
		project_name: 'PFT Cloud',
		project_image: require('./../../../img/project__image/img_pftcloud.png'),
		project_colors: ['#4E30BF', '#9456E1', '#22F4E7', '#67B8CA'],
		project_logo: require('./../../../img/project__image/logo_pftcloud.png'),
		project_date_release: '07.07.2024',
	},
	{
		project_id: 3,
		project_title: 'Сервис связи',
		project_name: 'PFT Calls',
		project_image: require('./../../../img/project__image/img_pftcloud.png'),
		project_colors: ['#4E30BF', '#9456E1', '#22F4E7', '#67B8CA'],
		project_logo: require('./../../../img/project__image/logo_pftcloud.png'),
		project_date_release: '07.07.2024',
	},
	{
		project_id: 4,
		project_title: 'Обучающая платформа',
		project_name: 'QA Playground',
		project_image: require('./../../../img/project__image/img_pftcloud.png'),
		project_colors: ['#4E30BF', '#9456E1', '#22F4E7', '#67B8CA'],
		project_logo: require('./../../../img/project__image/logo_pftcloud.png'),
		project_date_release: '07.07.2024',
	},
	{
		project_id: 5,
		project_title: 'Вообще хз',
		project_name: 'PFT Forms',
		project_image: require('./../../../img/project__image/img_pftcloud.png'),
		project_colors: ['#4E30BF', '#9456E1', '#22F4E7', '#67B8CA'],
		project_logo: require('./../../../img/project__image/logo_pftcloud.png'),
		project_date_release: '07.07.2024',
	},
	{
		project_id: 6,
		project_title: 'Облачное хранилище',
		project_name: 'PFT Cloud',
		project_image: require('./../../../img/project__image/img_pftcloud.png'),
		project_colors: ['#4E30BF', '#9456E1', '#22F4E7', '#67B8CA'],
		project_logo: require('./../../../img/project__image/logo_pftcloud.png'),
		project_date_release: '07.07.2024',
	},
];

const ProjectPage = (props) => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});

	return (
		<div className={styles.project__page}>
			<NavLink
				to="/"
				className={styles.back__button}>
				<Back />
			</NavLink>
			<h1 className={styles.project__title}>{data[props.router.params.projectId - 1].project_title}</h1>
			<h1 className={styles.project__name}>{data[props.router.params.projectId - 1].project_name}</h1>
			<div className={styles.project__main}>
				<img
					className={styles.project__img}
					src={data[props.router.params.projectId - 1].project_image}
					alt="img"
				/>
				<div className={styles.project__colors}>
					<div
						className={styles.project__color}
						style={{
							backgroundColor: `${data[props.router.params.projectId - 1].project_colors[0]}`,
						}}></div>
					<div
						style={{
							backgroundColor: `${data[props.router.params.projectId - 1].project_colors[1]}`,
						}}
						className={styles.project__color}></div>
					<div
						style={{
							backgroundColor: `${data[props.router.params.projectId - 1].project_colors[2]}`,
						}}
						className={styles.project__color}></div>
					<div
						style={{
							backgroundColor: `${data[props.router.params.projectId - 1].project_colors[3]}`,
						}}
						className={styles.project__color}></div>
				</div>

				<div className={styles.project__logo}>
					<img
						src={data[props.router.params.projectId - 1].project_logo}
						alt="logo"
					/>
				</div>

				<div className={styles.project__creators}>
					<h1 className={styles.creators__title}>Ответственные за проект:</h1>

					<div className={styles.creators__names}>
						Георгий Кикнадзе
						<br />
						Чабиев Эльсар
						<br />
						Воронкова Анна
						<br />
						Аванесян Арте
						<br />
						Нодь Анна
						<br />
						Горелов Иван
					</div>
				</div>
			</div>
			<div className={styles.project__blocks}>
				<div className={styles.project__block}>
					<h2
						id="task"
						className={styles.block__title}>
						Поставленная задача:
					</h2>

					<div className={styles.block__text}>
						Наша команда разрабатывает облачное хранилище, которое предоставит пользователям возможность
						безопасно и удобно хранить и управлять своими файлами.
					</div>

					<div className={styles.block__text}>
						Основной целью проекта является создание надежной и масштабируемой инфраструктуры, которая
						обеспечит высокую доступность и быстрый доступ к файлам. Приложение будет поддерживать различные
						типы файлов, включая документы, изображения, аудио и видеофайлы, а также специализированные
						форматы, такие как 3D модели или архитектурные зарисовки. Мы также планируем реализовать
						функционал синхронизации файлов между устройствами и возможность совместной работы над файлами,
						что позволит пользователям эффективно сотрудничать.
					</div>

					<div className={styles.block__text}>
						Безопасность данных является одним из ключевых аспектов проекта, поэтому мы предусмотрим
						механизмы шифрования и контроля доступа к файлам. В дополнение к этому, мы уделим внимание
						удобству использования интерфейса, чтобы пользователи могли легко и интуитивно управлять своими
						файлами в облачном хранилище.
					</div>
				</div>

				<div className={styles.project__block}>
					<h2
						id="solution"
						className={styles.block__title}>
						Решение:
					</h2>

					<div className={styles.block__text}>
						Наша команда разрабатывает облачное хранилище, которое предоставит пользователям возможность
						безопасно и удобно хранить и управлять своими файлами.
					</div>

					<div className={styles.block__text}>
						Основной целью проекта является создание надежной и масштабируемой инфраструктуры, которая
						обеспечит высокую доступность и быстрый доступ к файлам. Приложение будет поддерживать различные
						типы файлов, включая документы, изображения, аудио и видеофайлы, а также специализированные
						форматы, такие как 3D модели или архитектурные зарисовки. Мы также планируем реализовать
						функционал синхронизации файлов между устройствами и возможность совместной работы над файлами,
						что позволит пользователям эффективно сотрудничать.
					</div>

					<div className={styles.block__text}>
						Безопасность данных является одним из ключевых аспектов проекта, поэтому мы предусмотрим
						механизмы шифрования и контроля доступа к файлам. В дополнение к этому, мы уделим внимание
						удобству использования интерфейса, чтобы пользователи могли легко и интуитивно управлять своими
						файлами в облачном хранилище.
					</div>
				</div>

				<div className={styles.project__block}>
					<h2
						id="stack"
						className={styles.block__title}>
						Стек технологий:
					</h2>

					<div className={styles.block__text}>
						Наша команда разрабатывает облачное хранилище, которое предоставит пользователям возможность
						безопасно и удобно хранить и управлять своими файлами.
					</div>

					<div className={styles.block__text}>
						<span className={styles.block__word}>Основной</span> целью проекта является создание надежной и
						масштабируемой инфраструктуры, которая обеспечит высокую доступность и быстрый доступ к файлам.
						Приложение будет поддерживать различные типы файлов, включая документы, изображения, аудио и
						видеофайлы, а также специализированные форматы, такие как 3D модели или архитектурные зарисовки.
						Мы также планируем реализовать функционал синхронизации файлов между устройствами и возможность
						совместной работы над файлами, что позволит пользователям эффективно сотрудничать.
					</div>

					<div className={styles.block__text}>
						Безопасность данных является одним из ключевых аспектов проекта, поэтому мы предусмотрим
						механизмы шифрования и контроля доступа к файлам. В дополнение к этому, мы уделим внимание
						удобству использования интерфейса, чтобы пользователи могли легко и интуитивно управлять своими
						файлами в облачном хранилище.
					</div>
				</div>
			</div>
			<div className={styles.project__date}>
				Дата реализации 07.07.2004
				<div className={styles.date__blur}></div>
			</div>
		</div>
	);
};

export default ProjectPage;
