import { Grid } from '@chakra-ui/react'
import { ListProducts } from './ListProducts'
import { OrderSummary } from './OrderSummary'

export const GridCheckout = ({ totals, products }) => {
	return (
		<Grid
			templateColumns='1fr 320px'
			gap='1rem'
			maxW='1024px'
			mx='auto'
			p='1rem'
		>
			<ListProducts products={products} />
			<OrderSummary {...totals} />
		</Grid>
	)
}
