'use strict';

const vodomats = [
	{
		name: 'Водомат',
		adress: 'Скандинавский бульвар, 5 к2',
		coords: [55.565348, 37.499721],
		time: '10:00-22:00',
	},
	{
		name: 'Водомат',
		adress: 'Улица Василия Ощепкова, 4',
		coords: [55.55424, 37.466886],
		time: '10:00-23:00',
	},
	{
		name: 'Водомат',
		adress: 'Улица Василия Ощепкова, 3',
		coords: [55.554513, 37.464147],
		time: '09:00-21:00',
	},
	{
		name: 'Водомат',
		adress: 'Улица Василия Ощепкова, 6',
		coords: [55.555031, 37.467959],
		time: '08:00-23:00',
	},
	{
		name: 'Водомат',
		adress: 'Южный бульвар, 4',
		coords: [55.55849, 37.599801],
		time: '09:00-22:00',
	},
	{
		name: 'Водомат',
		adress: 'Улица Изюмская, 37 к4',
		coords: [55.551571, 37.571321],
		time: 'Круглосуточно',
	},
	{
		name: 'Водомат',
		adress: 'Улица Остафьевская, 4',
		coords: [55.551541, 37.571361],
		time: 'Круглосуточно',
	},
	{
		name: 'Водомат',
		adress: '​Улица Парковая, 2',
		coords: [55.555655, 37.597568],
		time: '09:00-21:00',
	},
	{
		name: 'Водомат',
		adress: 'Россошанская улица, вл3 к1 ст2',
		coords: [55.595062, 37.607714],
		time: 'Круглосуточно',
	},
	{
		name: 'Водомат',
		adress: 'Профсоюзная улица, 128 к2',
		coords: [55.630467, 37.51552],
		time: 'Круглосуточно',
	},
	{
		name: 'Водомат',
		adress: 'Посёлок Измайлово, 12',
		coords: [55.563234, 37.644558],
		time: 'Круглосуточно',
	},
	{
		name: 'Водомат',
		adress: '​Криворожская улица, 25',
		coords: [55.668811, 37.610002],
		time: 'Круглосуточно',
	},
	{
		name: 'Водомат',
		adress: 'Улица Остафьевская, 4',
		coords: [55.5127, 37.530214],
		time: 'Круглосуточно',
	},
	{
		name: 'Водомат',
		adress: 'Улица Герасима Курина, 20',
		coords: [55.730499, 37.468044],
		time: 'Круглосуточно',
	},
	{
		name: 'Водомат',
		adress: 'Улица Зеленодольская, 32 к3',
		coords: [55.730499, 37.468044],
		time: 'Круглосуточно',
	},
	{
		name: 'Водомат',
		adress: 'Улица Зеленодольская, 10/14',
		coords: [55.714854, 37.786976],
		time: 'Круглосуточно',
	},
	{
		name: 'Водомат',
		adress: 'Дубнинская улица, 12 к2',
		coords: [55.864222, 37.568532],
		time: 'Круглосуточно',
	},
	{
		name: 'Водомат',
		adress: 'Улица Чистяковой, 42',
		coords: [55.701424, 37.32165],
		time: 'Круглосуточно',
	},
	{
		name: 'Водомат',
		adress: '​Улица Маковского, 26 ст2',
		coords: [55.662964, 37.283772],
		time: 'Круглосуточно',
	},
	{
		name: 'Водомат',
		adress: 'Романовская улица, 19',
		coords: [55.767863, 37.243649],
		time: '10:00-21:00',
	},
	{
		name: 'Водомат',
		adress: 'Улица Новочерёмушкинская, 21а',
		coords: [55.682154, 37.580842],
		time: 'Круглосуточно',
	},
	{
		name: 'Водомат',
		adress: 'Покровская улица, 3 к1',
		coords: [55.85624, 37.184516],
		time: '10:00 до 21:00',
	},
	{
		name: 'Водомат',
		adress: '​Улица Михалковская, 9',
		coords: [55.838659, 37.5294],
		time: 'Круглосуточно',
	},
	{
		name: 'Водомат',
		adress: 'Улица Плещеева, 7',
		coords: [55.887366, 37.611569],
		time: 'Круглосуточно',
	},
	{
		name: 'Водомат',
		adress: 'Улица Плещеева, 11в',
		coords: [55.888705, 37.613791],
		time: 'Круглосуточно',
	},
	{
		name: 'Водомат',
		adress: '​Беломорская улица, 26 ст2',
		coords: [55.864092, 37.474087],
		time: 'Круглосуточно',
	},
	{
		name: 'Водомат',
		adress: 'Кронштадтский бульвар, 47 к2',
		coords: [55.851979, 37.511192],
		time: 'Круглосуточно',
	},
	{
		name: 'Водомат',
		adress: 'Улица Генерала Рычагова, 13',
		coords: [55.841952, 37.537605],
		time: 'Круглосуточно',
	},
	{
		name: 'Водомат',
		adress: '​Улица Фестивальная, 53',
		coords: [55.860518, 37.494985],
		time: 'Круглосуточно',
	},
	{
		name: 'Водомат',
		adress: 'Парковая улица, 50',
		coords: [55.947996, 37.483251],
		time: 'Круглосуточно',
	},
	{
		name: 'Водомат',
		adress: '​Дегунинская улица, 17',
		coords: [55.867314, 37.531068],
		time: 'Круглосуточно',
	},
];

const buttons = document.querySelectorAll('.answer__button');

buttons.forEach(function (btn) {
	btn.addEventListener('click', function (e) {
		const answer = e.target.closest('.question').querySelector('.answer');
		answer.classList.contains('answer__show') ? (e.target.innerHTML = '+') : (e.target.innerHTML = '-');
		answer.classList.toggle('answer__show');
	});
});

const marker = L.Icon.extend({
	options: {
		iconSize: [30, 30],
	},
});

const vodomatIcon = new marker({ iconUrl: './img/map/marker.svg' });

const position = [55.751377, 37.61814];

function displayVodomat(vodomat, map) {
	L.marker(vodomat.coords, { icon: vodomatIcon })
		.addTo(map)
		.bindPopup(
			L.popup({
				maxWidth: 200,
				minWidth: 100,
				autoClose: true,
				closeOnClick: false,
				className: `vodomat__popup`,
			}),
		)
		.setPopupContent(
			`
			<h1 class="vodo__title">${vodomat.name}</h1>
			<div class="vodo__address">Адрес: ${vodomat.adress}</div>
			<div class="vodo__time">Время работы: ${vodomat.time}</div>
		`,
		)
		.openPopup();
}

function loadMap(position) {
	const map = L.map('map').setView(position, 10);

	L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	}).addTo(map);

	vodomats.forEach((vodomat) => displayVodomat(vodomat, map));
}

loadMap(position);
