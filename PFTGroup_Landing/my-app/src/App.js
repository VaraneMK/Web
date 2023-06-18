import styles from './App.module.css';
import { BrowserRouter } from 'react-router-dom';
import { useTheme } from './hooks/use-theme';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/footer/footer';
import { useState } from 'react';
import Modal from './components/Modal/Modal';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const defaultProperties = {
	dark: {
		circle: {
			r: 9,
		},
		mask: {
			cx: '50%',
			cy: '23%',
		},
		svg: {
			transform: 'rotate(40deg)',
		},
		lines: {
			opacity: 0,
		},
	},
	light: {
		circle: {
			r: 5,
		},
		mask: {
			cx: '100%',
			cy: '0%',
		},
		svg: {
			transform: 'rotate(90deg)',
		},
		lines: {
			opacity: 1,
		},
	},
	springConfig: { mass: 1, tension: 2000, friction: 35 },
};

function App() {
	const { theme, setTheme } = useTheme();
	const [currentTheme, setCurrentTheme] = useState(false);

	const handleThemeClick = () => {
		setCurrentTheme(() => {
			return !currentTheme;
		});
		currentTheme ? setTheme('light') : setTheme('dark');
	};

	const [modalActive, setModalActive] = useState(false);
	return (
		<BrowserRouter>
			<div className={styles.App}>
				<div
					onClick={() => setModalActive(true)}
					className={styles.support__button}>
					?
				</div>
				<div className={styles.switcherThemes}>
					<DarkModeSwitch
						style={{ marginBottom: '2rem' }}
						checked={currentTheme}
						onChange={handleThemeClick}
						animationProperties={defaultProperties}
						size={50}
					/>
					{/* <div>
						<input
							onClick={handleThemeClick}
							type="checkbox"
							id="toggle"
						/>
						<label for="toggle"></label>
					</div> */}
				</div>
				<Header />
				<Main />
			</div>
			<Footer />
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
		</BrowserRouter>
	);
}

export default App;
