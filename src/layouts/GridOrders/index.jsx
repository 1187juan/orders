import { Grid } from '@chakra-ui/react'
import { useQueryClient } from 'react-query'
import { GridOrdersItem } from './GridOrdersItem'

export const GridOrders = () => {
	const queryClient = useQueryClient()
	const orders = queryClient.getQueryData(['orders'])

	return (
		<Grid
			as='section'
			w='min(100%,1024px)'
			m='0 auto'
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
