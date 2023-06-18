import React from 'react';
import styles from './CompanyPage.module.css';
import { NavLink } from 'react-router-dom';

const CompanyPage = () => {
	return (
		<div className={styles.companyPage}>
			<div className={styles.block}>
				<h1 className={styles.blockTitle}>О компании</h1>
				<p className={styles.text}>
					Наша платформа обучает тестированию ПО на трех уровнях сложности: базовом, среднем и продвинутом. У
					нас есть как бесплатные, так и платные курсы. Вы можете проходить их индивидуально в удобное для вас
					время. Мы предлагаем широкий выбор курсов, включая продвинутые программы. Наши специалисты создают
					актуальные курсы, следя за последними тенденциями. Наш интерфейс очень удобный. Начинайте обучение
					на платформе уже сегодня и развивайтесь как профессионал в тестировании ПО!
				</p>
			</div>
			<div className={styles.block}>
				<h1 className={styles.blockTitle}>Контакты</h1>
				<table>
					<tbody>
						<tr>
							<td className={styles.row}>Единый телефон:</td>
							<td className={styles.rowText}>8 (123) 123-12-12</td>
						</tr>
						<tr>
							<td className={styles.row}>EMail:</td>
							<td className={styles.rowText}>support@qa-playground.ru</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className={styles.block}>
				<h1 className={styles.blockTitle}>Реквизиты</h1>
				<table>
					<tbody>
						<tr>
							<td className={styles.row}>Исполнитель:</td>
							<td className={styles.rowText}>Кикнадзе Георгий Александрович</td>
						</tr>
						<tr>
							<td className={styles.row}>ИНН:</td>
							<td className={styles.rowText}>503016319715</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className={styles.block}>
				<h1 className={styles.blockTitle}>Документы</h1>
				<NavLink className={styles.link}>Договор публичной оферты</NavLink>
				<NavLink className={styles.link}>Политика конфиденциальности</NavLink>
			</div>
		</div>
	);
};

export default CompanyPage;
