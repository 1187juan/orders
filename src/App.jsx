import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { HomePage } from './pages/HomePage'
import theme from './theme'

export const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<HomePage />
		</ChakraProvider>
	)
}
