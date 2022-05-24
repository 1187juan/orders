import { GridOrders } from '../layouts'
import Lottie from 'lottie-react'
import sendAnim from '../lotties/90409-delivery-truck.json'
import { Grid, Heading } from '@chakra-ui/react'

export const HomePage = () => {
	return (
		<>
			<Grid
				maxW='1024px'
				p='1rem'
				mx='auto'
				templateRows='50vh auto'
				textAlign='center'
			>
				<Lottie animationData={sendAnim} loop autoPlay />
				<Heading transform='translateY(-50%)'>¡Envía facil!</Heading>
			</Grid>
			<GridOrders />
		</>
	)
}
