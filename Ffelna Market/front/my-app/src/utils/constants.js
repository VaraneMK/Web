export const BASE_URL = 'http://localhost:5000';
export default function existsFile({ currentTarget }) {
	currentTarget.onerror = null; // prevents looping
	currentTarget.src = require('./../img/placeholder.png');
}
