import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { AppRouter } from './routes/AppRouter'
import theme from './theme'

export const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />

			<AppRouter />
		</ChakraProvider>
	)
}
