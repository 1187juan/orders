import {
	Box,
	Button,
	Divider,
	Grid,
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
		<Grid
			as='section'
			h='max-content'
			gap='1rem'
			bg='white'
			borderRadius='base'
			p='1.5rem'
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
		</Grid>
	)
}
