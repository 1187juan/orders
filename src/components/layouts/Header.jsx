import { Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { HeaderScroll } from '../../components'
import { Nav } from './Header.styles'

export const Header = () => {
	return (
		<HeaderScroll>
			<Nav>
				<Link to='/'>
					<Heading as='h1' size='lg' color='blackAlpha.800'>
						Checkout
					</Heading>
				</Link>
			</Nav>
		</HeaderScroll>
	)
}
