import { Box, Divider, Flex, Text } from '@chakra-ui/react'

export const ListProductsItem = ({ name, sku, quantity, price, currency }) => {
	return (
		<>
			<Flex
				as='li'
				justifyContent='space-between'
				w='100%'
				alignItems='center'
				pos='relative'
				p={4}
			>
				<Box>
					<Text fontWeight='bold'>{name}</Text>
					<Text>{sku}</Text>
				</Box>
				<Box>{quantity}</Box>
				<Box>{price + ' ' + currency}</Box>
			</Flex>
			<Divider />
		</>
	)
}
