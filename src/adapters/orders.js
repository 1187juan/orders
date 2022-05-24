export const createAdaptedOrders = orders => {
	const formattedOrders = orders.orders.map(order => ({
		name: order.name,
		id: order.id,
		currency: order.currency,
		number: order.number,
		totals: {
			total: order.totals.total,
			tax: order.totals.tax,
			subtotal: order.totals.subtotal,
			name: order.name,
			currency: order.currency,
		},
		products: order.items.map(item => ({
			id: item.id,
			sku: item.sku,
			name: item.name,
			quantity: item.quantity,
			price: item.price,
			currency: order.currency,
		})),
	}))

	return formattedOrders
}
