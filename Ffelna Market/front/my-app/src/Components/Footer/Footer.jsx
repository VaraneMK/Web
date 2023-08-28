import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Instagram } from './../../svg/instagram.svg';
import { ReactComponent as Telegram } from './../../svg/telegram.svg';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footer__container}>
				<nav className={styles.footer__nav}>
					<div className={styles.nav__container_logo}>
						<div className={styles.nav__footer_logo}>
							{/* <NavLink to="/">
								<img
									src="https://i.postimg.cc/VvjYYV6R/Republic-Designs-Y2-K-Logo.png"
									className={styles.footer__logo}
									alt="footer-logo"
								/>
							</NavLink> */}
							<p className={styles.footer__logo_text}>FFELNA WORLD</p>
						</div>
						{/* <div className={styles.nav__text_links}>
							<NavLink className={styles.text__links}>О нас</NavLink>
							<NavLink className={styles.text__links}>Наша компания</NavLink>
							<NavLink
								className={styles.text__links}
								to="/category">
								Каталог
							</NavLink>
							<NavLink className={styles.text__links}>Testimonials</NavLink>
							<NavLink className={styles.text__links}>Contact Us</NavLink>
						</div> */}
						<div className={styles.nav__social_links}>
							<div className={styles.footer__social_links}>
								<a
									href="https://instagram.com/ffelnaworld?igshid=Y2I2MzMwZWM3ZA=="
									target="blank">
									<Instagram className={styles.social__link} />
								</a>
								<a
									href="https://t.me/ffellna"
									target="blank">
									<Telegram className={styles.social__link2} />
								</a>
							</div>
						</div>
						<div className={styles.nav__created}>
							<a
								href="https://pft-group.ru/"
								target="blank"
								className={styles.created}>
								© Created by PFT Group
							</a>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Footer;
