import {
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	Text,
	useToast,
} from '@chakra-ui/react'

export const OrderSummary = ({
	subtotal,
	tax,
	name,
	total,
	currency = 'MXN',
}) => {
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
					{subtotal}
				</Box>
			</Text>
			<Text display='flex' justifyContent='space-between'>
				<Box as='span'>Impuestos</Box>
				<Box as='span' fontWeight='bold'>
					{tax}
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
					{total && `$${total} ${currency}`}
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
