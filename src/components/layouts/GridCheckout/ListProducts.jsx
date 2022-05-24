import { VStack } from '@chakra-ui/react'
import { AddProduct } from '../../../components'
import { ListProductsItem } from './ListProductsItem'

export const ListProducts = ({ products }) => {
	console.log(products)
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
			<AddProduct />
		</VStack>
	)
}
