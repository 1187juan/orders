import { Grid } from '@chakra-ui/react'
import data from '../../data/orders'
import { GridOrdersItem } from './GridOrdersItem'

export const GridOrders = () => {
	const { orders } = data
	return (
		<Grid
			as='section'
			maxWidth='1024px'
			m='0 auto'
			p={4}
			gap={4}
			templateColumns='repeat(auto-fill, minmax(min(350px, 100%), 1fr))'
		>
			{orders.map(order => (
				<GridOrdersItem
					name={order.name}
					total={order.totals.total}
					id={order.id}
					key={order.id}
					currency={order.currency}
				>
					{order.number}
				</GridOrdersItem>
			))}
		</Grid>
	)
}
