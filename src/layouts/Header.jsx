import { Box, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useScrollHide } from '../hooks/useScrollHide'

export const Header = () => {
	const ref = useScrollHide()
	return (
		<Box
			as='header'
			ref={ref}
			position='sticky'
			top='0px'
			zIndex={1}
			width='auto'
			height='64px'
			display='flex'
			justifyContent='center'
			alignItems='center'
			backgroundColor='white'
		>
			<Box
				as='nav'
				width='min(100% - 2rem, 1024px)'
				height='100%'
				display='flex'
				justifyContent='space-between'
				alignItems='center'
			>
				<Link to='/'>
					<Heading as='h1' size='lg' color='blackAlpha.800'>
						Checkout
					</Heading>
				</Link>
			</Box>
		</Box>
	)
}
