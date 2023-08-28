import React from 'react';
import styles from './Modal.module.css';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import ru from 'react-phone-number-input/locale/ru';
import { useState } from 'react';
import { ReactComponent as True } from './../../svg/true.svg';
import { ReactComponent as False } from './../../svg/false.svg';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../redux/user/userSlice';

const Modal = ({ active, setActive, children }) => {
	const [value, setValue] = useState();
	const [isSuccessful, setMode] = useState(false);
	const dispatch = useDispatch();

	const createOffer = () => {
		if (value && isValidPhoneNumber(value)) {
			dispatch(createOrder(value));
			setMode(true);
			setTimeout(() => {
				setActive(false);
				// setMode(false);
			}, 3000);
		}
	};
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
				<h3>Оформление заказа</h3>
				{isSuccessful ? (
					<div className={styles.isSuccessful}>
						<True style={{ fill: 'green' }} />
						<div>Заказ обработан, ожидайте звонка!</div>
					</div>
				) : (
					<>
						<div className={styles.form}>
							<PhoneInput
								labels={ru}
								defaultCountry="RU"
								className={styles.phone__input}
								placeholder="Введите номер телефона"
								value={value}
								onChange={setValue}
							/>
							{value && isValidPhoneNumber(value) ? (
								<True style={{ fill: 'green' }} />
							) : (
								<False style={{ fill: 'red' }} />
							)}
						</div>
						<button
							onClick={createOffer}
							className={styles.create__offer}>
							Оформить
						</button>
					</>
				)}
			</div>
		</div>
	);
};

export default Modal;
