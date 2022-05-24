import {
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	Text,
	useToast,
} from '@chakra-ui/react'
import { useQueryClient } from 'react-query'

export const OrderSummary = ({ orderId }) => {
	const queryClient = useQueryClient()
	const orders = queryClient.getQueryData(['orders'])
	const order = orders.find(order => order.id === orderId)
	const toast = useToast()
	return (
		<Flex
			as='section'
			w='auto'
			p='1.5rem'
			gap='1rem'
			direction='column'
			flexGrow='1'
			borderRadius='base'
			bg='white'
		>
			<Heading as='h1' fontSize='x-large' mb='1rem'>
				Resumen de compra
				<br />
				{name}
			</Heading>

			<Text display='flex' justifyContent='space-between'>
				<Box as='span'>Subtotal</Box>
				<Box as='span' fontWeight='bold'>
					{order.totals.subtotal}
				</Box>
			</Text>
			<Text display='flex' justifyContent='space-between'>
				<Box as='span'>Impuestos</Box>
				<Box as='span' fontWeight='bold'>
					{order.totals.tax}
				</Box>
			</Text>
			<Divider />

			<Heading
				fontSize='large'
				display='flex'
				justifyContent='space-between'
				pb='1rem'
			>
				<Box as='span'>Total</Box>
				<Box as='span' fontWeight='bold'>
					{order.totals.total && `$${order.totals.total} ${order.currency}`}
				</Box>
			</Heading>

			<Button
				onClick={() =>
					toast({
						title: 'Pago completado.',
						description: 'La compra fue realizada exitosamente.',
						status: 'success',
						duration: 9000,
						isClosable: true,
					})
				}
			>
				Pagar
			</Button>
		</Flex>
	)
}
