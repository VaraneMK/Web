import React, { useState } from 'react';
import styles from './SettingsPage.module.css';
import { ReactComponent as RedCircle } from './../../icons/redCircle.svg';
import { ReactComponent as GreenCircle } from './../../icons/greenCircle.svg';
import { ReactComponent as Edit } from './../../icons/edit.svg';
import Switcher from '../Switcher/Switcher';

const Settings = () => {
	const [isToggled, setIsToggled] = useState(false);
	return (
		<div className={styles.settingsPage}>
			<h1 className={styles.pageTitle}>Настройки</h1>
			<div className={styles.settingBlock}>
				<div className={styles.coreSettings}>
					<h1 className={styles.pageSubtitle}>Основные</h1>
					<div className={styles.form}>
						<span className={styles.subText}>Имя Фамилия</span>
						<div className={styles.inputArea}>
							<input
								placeholder="Введите имя и фамилию"
								className={styles.input}></input>
							<RedCircle className={styles.inputStatus} />
						</div>
					</div>
					<div className={styles.form}>
						<span className={styles.subText}>EMail</span>
						<div className={styles.inputArea}>
							<input
								placeholder="some@email.com"
								className={styles.input}></input>
							<RedCircle className={styles.inputStatus} />
						</div>
					</div>
					<div className={styles.form}>
						<span className={styles.subText}>Пароль</span>
						<div className={styles.inputArea}>
							<input
								placeholder="Введите пароль"
								className={styles.input}></input>
							<RedCircle className={styles.inputStatus} />
						</div>
					</div>
				</div>
				<div className={styles.avatarSettings}>
					<h1 className={styles.pageSubtitle}>Ваш аватар</h1>
					<div className={styles.avatar}>
						<img
							className={styles.userAvatar}
							src={require('./../../img/sadovaya.png')}
							alt=""
						/>
						<div className={styles.changeIcon}>
							<Edit />
						</div>
					</div>
				</div>
			</div>
			<div className={styles.notifyBlock}>
				<h1 className={styles.pageSubtitle}>Уведомления</h1>
				<div className={styles.notifyPoints}>
					<div className={styles.notify}>
						<span className={styles.notifyText}>Новостная рассылка</span>
						<Switcher
							// isToggle={isToggled}
							onToggle={() => setIsToggled(!isToggled)}
						/>
					</div>
					<div className={styles.notify}>
						<span className={styles.notifyText}>Вход с новых устройств</span>
						<Switcher
							isToggle={isToggled}
							onToggle={() => setIsToggled(!isToggled)}
						/>
					</div>
					<div className={styles.notify}>
						<span className={styles.notifyText}>Обновление курсов</span>
						<Switcher
							isToggle={isToggled}
							onToggle={() => setIsToggled(!isToggled)}
						/>
					</div>
				</div>
				<div className={styles.sessionsBlock}>
					<h1 className={styles.pageSubtitle}>Активные сессии</h1>
					<div className={styles.sessions}>
						<div className={styles.session}>
							<div className={styles.textSide}>
								<span className={styles.sessionTitle}>Yandex Browser v3.1.2</span>
								<span className={styles.sessionDateTime}>12 марта 2023 13:00</span>
							</div>
							<button className={styles.closeSessionBtn}>Выйти</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Settings;
