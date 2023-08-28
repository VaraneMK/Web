import React from 'react';
import styles from './FAQ.module.css';
import Faq from 'react-faq-component';
const data = {
	rows: [
		{
			title: 'Производство',
			content:
				'Перед тем, как наши изделия попадают к вам, мы уделяем особое внимание каждому этапу производства.<br>Наша команда тщательно работает над каждым лекалом, чтобы достичь идеала. Каждое лекало разрабатывается с учетом конкретных параметров и особенностей изделия, чтобы обеспечить его идеальную посадку на теле.Кроме того, мы уделяем большое внимание выбору качественных тканей.<br>Мы сотрудничаем только с лучшими поставщиками, предлагающими ткани премиум-класса. Ведь качество ткани наших изделий определяет не только внешний вид и эстетическое впечатление от изделия, но и его прочность, комфортность и долговечность.',
		},
		{
			title: 'Доставка',
			content:
				'Курьерская доставка по ВСЕЙ РОССИИ.<br>Срок и стоимость доставки зависит от вашего региона.<br>Способ оплаты - Банковской картой онлайн.',
		},
		{
			title: 'Информация о товаре',
			content:
				'ЧТО ДЕЛАТЬ, ЕСЛИ МОЕГО РАЗМЕРА НЕТ В НАЛИЧИИ?<br>На некоторые позиции вы можете оформить предзаказ, наши менеджеры свяжутся с вами, когда товар появится в наличии.',
		},
		{
			title: 'Предзаказ',
			content:
				'КОГДА ВЕЩЬ ИЗ ПРЕДЗАКАЗА ДОСТАВЯТ?<br>После появления модели в продаже, ваш заказ будет упакован и подготовлен к отправке, а затем вы получите письмо с примерной датой доставки.<br>КОГДА НУЖНО ОПЛАТИТЬ ПРЕДЗАКАЗ?<br>Предзаказы, как и обычные заказы, оплачиваются в полном объеме на этапе оформления покупки.',
		},
	],
};

const FAQ = () => {
	return (
		<section className={styles.main__faq}>
			<div className={styles.faq__image_container}>
				<img
					className={styles.faq__image}
					src={require('./../../../../img/faq.JPG')}
					alt="img"
				/>
			</div>
			<div className={styles.faq__text}>
				<div className={styles.faq__text_header}>
					<h2 className={styles.section__heading}>FAQ</h2>
					<h3 className={styles.section__subheading + ' ' + styles.faq__subheading}>FFELNA QUESTIONS</h3>
					<div className={styles.line__block}>
						<div className={styles.faq__line + ' ' + styles.line}></div>
					</div>
					<p className={styles.section__description}>
						Ниже приведены наиболее популярные вопросы от наших клиентов.
					</p>
				</div>
				<div className={styles.faq__text_accordion}></div>
				<Faq
					data={data}
					styles={{
						bgColor: '#e7e7e7',
						titleTextColor: '#ed7014',
						rowTitleColor: '#ed7014',
						rowContentColor: 'black',
						rowTitleTextSize: '22px',
						rowTitleTextWeidth: 'bold',
						rowContentTextSize: '16px',
					}}
				/>
			</div>
		</section>
	);
};

export default FAQ;
