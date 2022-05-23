import {
	Alert,
	AlertDescription,
	AlertIcon,
	AlertTitle,
	Box,
	Button,
	Progress,
} from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { getOrders } from '../../services/getOrders'

export const OrdersProvider = ({ children }) => {
	const { isLoading, error, refetch } = useQuery(['orders'], getOrders, {
		staleTime: Infinity,
	})

	if (isLoading) return <Progress size='xs' isIndeterminate />

	if (error)
		return (
			<Alert
				status='error'
				w='max-content'
				maxW='min(100% - 2rem, 1024px)'
				mx='auto'
			>
				<AlertIcon />
				<Box>
					<AlertTitle>Error</AlertTitle>
					<AlertDescription>{error.message}</AlertDescription>
				</Box>
				<Button onClick={refetch} variant='ghost' colorScheme='inherit'>
					Reintentar
				</Button>
			</Alert>
		)
	return children
}
