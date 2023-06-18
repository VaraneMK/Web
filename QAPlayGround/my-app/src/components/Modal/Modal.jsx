import React from 'react';
import styles from './Modal.module.css';

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
				{children}
			</div>
		</div>
	);
};

export default Modal;
