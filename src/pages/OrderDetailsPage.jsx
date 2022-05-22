import { Center, Grid, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import res from '../data/orders'
import OrderSvg from '../assets/svgs/undraw_receipt_re_fre3.svg?component'
import { GridCheckout } from '../components/layouts'

export const OrderDetailsPage = () => {
	const { orderId } = useParams()
	const { orders } = res
	const order = orders.find(order => order.id === orderId)

	if (!order)
		return (
			<Center w='100%' h='calc(100vh - 64px)'>
				<Grid templateRows='35vh auto' gap='1rem'>
					<OrderSvg width='100%' height='100%' />
					<Text fontSize='2xl' align='center'>
						Orden no encontrada.
					</Text>
				</Grid>
			</Center>
		)

	const totals = {
		total: order.totals.total,
		tax: order.totals.tax,
		subtotal: order.totals.subtotal,
		name: order.name,
		currency: order.currency,
	}
	console.log(order)
	const products = order.items.map(item => ({
		id: item.id,
		sku: item.sku,
		name: item.name,
		quantity: item.quantity,
		price: item.price,
		currency: order.currency,
	}))
	console.log(products)

	return <GridCheckout totals={totals} products={products} />
}
