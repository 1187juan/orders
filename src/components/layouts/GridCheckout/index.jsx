import { Flex } from '@chakra-ui/react'
import { ListProducts } from './ListProducts'
import { OrderSummary } from './OrderSummary'

export const GridCheckout = ({ totals, products }) => {
	return (
		<Flex wrap='wrap' gap='1rem' w='min(100%, 1024px)' mx='auto' mt='1rem'>
			<ListProducts products={products} />
			<OrderSummary {...totals} />
		</Flex>
	)
}
