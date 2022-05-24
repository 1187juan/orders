import { createAdaptedOrders } from '../adapters/orders'

const API_KEY = import.meta.env.VITE_HEROKU_APP_API_KEY

export const getOrders = async () => {
	let orders = JSON.parse(localStorage.getItem('orders'))

	if (orders) return orders

	const res = await fetch('https://eshop-deve.herokuapp.com/api/v2/orders', {
		headers: {
			Authorization: API_KEY,
		},
	})

	if (!res.ok)
		throw new Error('Error al traer las ordenes, intentalo más tarde!')

	const data = await res.json()

	orders = createAdaptedOrders(data)
	localStorage.setItem('orders', JSON.stringify(orders))
	return orders
}
