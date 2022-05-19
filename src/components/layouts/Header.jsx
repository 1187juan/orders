import { Heading } from '@chakra-ui/react'
import { HeaderScroll } from '../../components'
import { Nav } from './Header.styles'

export const Header = () => {
	return (
		<HeaderScroll>
			<Nav>
				<Heading as='h1' size='lg' color='blackAlpha.800'>
					Checkout
				</Heading>
			</Nav>
		</HeaderScroll>
	)
}
