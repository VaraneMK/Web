import React from 'react';
import styles from './Modal.module.css';
import { ReactComponent as Cancel } from './../../img/cancel_button.svg';

const Modal = ({ active, setActive, children }) => {
	return (
		<div
			className={active ? styles.modal + ' ' + styles.active : styles.modal}
			onClick={() => {
				setActive(false);
			}}>
			<div
				onClick={(e) => e.stopPropagation()}
				className={styles.modalContent}>
				<Cancel
					onClick={() => setActive(false)}
					className={styles.cancel__button}
				/>
				<div className={styles.blur__polygon}></div>
				{children}
			</div>
		</div>
	);
};

export default Modal;
