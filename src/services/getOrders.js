const API_KEY = import.meta.env.VITE_HEROKU_APP_API_KEY

export const getOrders = async () => {
	const res = await fetch('https://eshop-deve.herokuapp.com/api/v2/orders', {
		headers: {
			Authorization: API_KEY,
		},
	})

	if (!res.ok)
		throw new Error('Error al traer las ordenes, intentalo más tarde!')

	return res.json()
}
