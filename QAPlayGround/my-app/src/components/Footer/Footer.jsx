import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Telegram } from './../../icons/telegram.svg';
import { ReactComponent as Vk } from './../../icons/VK.svg';
import { ReactComponent as PFTGroup } from './../../icons/PFTGroup.svg';
import { NavLink } from 'react-router-dom';

const Footer = () => {
	return (
		<footer>
			<div className={styles.footer}>
				<div className={styles.footerLinks}>
					<a
						href="https://t.me/qa_playground"
						target="__blank">
						<Telegram />
					</a>
					<a
						href="https://vk.com/qa_playground"
						target="__blank">
						<Vk />
					</a>
					<a
						href="https://pft-group.ru/"
						target="__blank">
						<PFTGroup />
					</a>
				</div>
				<NavLink
					to="/aboutCompany"
					className={styles.aboutCompanyBtn}>
					О компании
				</NavLink>
			</div>
		</footer>
	);
};

export default Footer;
