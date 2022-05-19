import { ColorModeScript, ThemeProvider } from '@chakra-ui/react'
import { HomePage } from './pages/HomePage'
import theme from './theme'

export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<HomePage />
		</ThemeProvider>
	)
}
