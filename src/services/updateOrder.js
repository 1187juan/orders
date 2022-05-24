export const updateOrder = async orderAfter => {
	const orders = JSON.parse(localStorage.getItem('orders'))
	const ordersAfter = orders.map(order =>
		order.id !== orderAfter.id ? order : orderAfter
	)

	localStorage.setItem('orders', JSON.stringify(ordersAfter))

	return orderAfter
}
