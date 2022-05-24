import { VStack } from '@chakra-ui/react'
import { useQueryClient } from 'react-query'
import { AddProduct } from '../../components'
import { ListProductsItem } from './ListProductsItem'

export const ListProducts = ({ orderId }) => {
	const queryClient = useQueryClient()
	const orders = queryClient.getQueryData(['orders'])
	const order = orders.find(order => order.id === orderId)
	const { products } = order

	return (
		<VStack as='ul' bgColor='white' borderRadius='base' flexGrow='4' pb='1rem'>
			{products.map(product => (
				<ListProductsItem
					key={product.id}
					name={product.name}
					quantity={product.quantity}
					price={product.price}
					sku={product.sku}
					currency={product.currency}
				/>
			))}
			<AddProduct orderId={orderId} />
		</VStack>
	)
}
