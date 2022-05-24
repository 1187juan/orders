import { Box, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { HeaderScroll } from '../components'

export const Header = () => {
	return (
		<HeaderScroll>
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
		</HeaderScroll>
	)
}
