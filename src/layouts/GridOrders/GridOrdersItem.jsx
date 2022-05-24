import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const GridOrdersItem = ({ id, name, total, currency }) => {
	return (
		<Flex
			alignItems='center'
			as='section'
			bg='white'
			borderRadius='md'
			gap='1rem'
			p='1.5rem'
		>
			<Box flex={1}>
				<Heading size='md' color='blackAlpha.700'>
					Orden {name}
				</Heading>
				<Text fontSize='large'>
					Total {total} {currency}
				</Text>
			</Box>
			<Button as={Link} to={'/order/' + id}>
				Detalles
			</Button>
		</Flex>
	)
}
