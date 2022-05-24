import { useParams } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'
import { ListProducts, OrderSummary } from '../layouts'

export const OrderDetailsPage = () => {
	const { orderId } = useParams()

	return (
		<Flex wrap='wrap' gap='1rem' w='min(100%, 1024px)' mx='auto' mt='1rem'>
			<ListProducts orderId={orderId} />
			<OrderSummary orderId={orderId} />
		</Flex>
	)
}
