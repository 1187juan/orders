import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { OrdersProvider } from './components/layouts'
import { AppRouter } from './routes/AppRouter'
import theme from './theme'

const queryClient = new QueryClient()

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={theme}>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<OrdersProvider>
					<AppRouter />
				</OrdersProvider>
			</ChakraProvider>
			<ReactQueryDevtools />
		</QueryClientProvider>
	)
}
