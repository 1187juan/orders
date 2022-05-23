import { useParams } from 'react-router-dom'
import { GridCheckout } from '../components/layouts'
import { useQueryClient } from 'react-query'

export const OrderDetailsPage = () => {
	const { orderId } = useParams()
	const queryClient = useQueryClient()
	const { orders } = queryClient.getQueryData(['orders'])

	const order = orders.find(order => order.id === orderId)

	const totals = {
		total: order.totals.total,
		tax: order.totals.tax,
		subtotal: order.totals.subtotal,
		name: order.name,
		currency: order.currency,
	}

	const products = order.items.map(item => ({
		id: item.id,
		sku: item.sku,
		name: item.name,
		quantity: item.quantity,
		price: item.price,
		currency: order.currency,
	}))

	return <GridCheckout totals={totals} products={products} />
}
