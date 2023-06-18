import React from 'react';
import styles from './Course.module.css';

const Course = (props) => {
	return (
		<div className={styles.courseInfo}>
			<div className={styles.btn}>
				Записаться на курс
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className={styles.courseTitle}>
				<div className={styles.courseName}>Базовый SQL</div>
				<div className={styles.addInfo}>500Р</div>
			</div>
			<div className={styles.updateDate}>
				Курс обновлен: <span>13.02.2023</span>
			</div>
			<div className={styles.courseTags}>
				<div className={styles.tag}>SQL</div>
				<div className={styles.tag}>Basic</div>
			</div>
			<div className={styles.courseAbilities}>
				<h1 className={styles.blockTitle}>Вы научитесь</h1>
				<ul>
					<li>Понимать основные принципы работы с базами данных и языком SQL</li>
					<li>Создавать и изменять таблицы в базе данных</li>
					<li>Выполнять запросы для выборки данных из таблиц</li>
					<li>Использовать операторы для фильтрации, сортировки и группировки данных</li>
					<li>Использовать функции агрегации для расчета средних, максимальных и минимальных значений</li>
					<li>Связывать данные из разных таблиц</li>
				</ul>
			</div>
			<div className={styles.aboutCourse}>
				<h1 className={styles.blockTitle}>О курсе</h1>
				<p className={styles.text}>
					Курс по изучению базового SQL предназначен для тех, кто хочет овладеть основами работы с базами
					данных и языком SQL. В рамках курса вы познакомитесь с основными концепциями и инструментами SQL,
					научитесь создавать и изменять таблицы, выполнять запросы для выборки данных, использовать операторы
					для фильтрации, сортировки и группировки данных, а также связывать данные из разных таблиц. Курс
					подходит как для начинающих, так и для тех, кто уже имеет опыт работы с базами данных и хочет
					улучшить свои навыки.
				</p>
			</div>
			<div className={styles.courseProgram}>
				<h1 className={styles.blockTitle}>Программа курса</h1>
				<ol>
					<li>Введение в базы данных и язык SQL</li>
					<li>Создание таблиц в базе данных</li>
					<li>Изменение таблиц в базе данных</li>
					<li>Выборка данных из таблиц</li>
					<li>Операторы для фильтрации, сортировки и группировки данных</li>
					<li>Функции агрегации для расчета средних, максимальных и минимальных значений</li>
					<li>Связывание данных из разных таблиц</li>
					<li>Создание и изменение индексов для ускорения работы с базой данных</li>
					<li>Практические задания и тестирование навыков работы с SQL</li>
				</ol>
			</div>
			<div className={styles.teachers}>
				<h1 className={styles.blockTitle}>Преподаватели</h1>
				<div className={styles.teachersBlock}>
					<div className={styles.teacherCard}>
						<div className={styles.cardImg}></div>
						<div className={styles.teacherName}>Кикнадзе Георгий</div>
						<div className={styles.teacherProf}>Python-developer</div>
					</div>
					<div className={styles.teacherCard}>
						<div className={styles.cardImg}></div>
						<div className={styles.teacherName}>Садовая Софья</div>
						<div className={styles.teacherProf}>QA-engineer</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Course;
