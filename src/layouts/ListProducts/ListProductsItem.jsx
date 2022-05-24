import { Box, Divider, Flex, Text } from '@chakra-ui/react'

export const ListProductsItem = ({ name, sku, quantity, price, currency }) => {
	return (
		<>
			<Flex
				as='li'
				justifyContent='space-between'
				gap={4}
				w='100%'
				alignItems='center'
				pos='relative'
				p={4}
			>
				<Box flexGrow={1}>
					<Text fontWeight='bold'>{name}</Text>
					<Text>{sku}</Text>
				</Box>
				<Box>{quantity}</Box>
				<Box width='100px' textAlign='right'>
					{price + ' ' + currency}
				</Box>
			</Flex>
			<Divider />
		</>
	)
}
