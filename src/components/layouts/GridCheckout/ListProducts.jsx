import { VStack } from '@chakra-ui/react'
import { ListProductsItem } from './ListProductsItem'

export const ListProducts = ({ products }) => {
	return (
		<VStack as='ul' bgColor='white' borderRadius='base'>
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
		</VStack>
	)
}
