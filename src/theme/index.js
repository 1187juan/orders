import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import { colors } from './colors'
import { config } from './config'
import { styles } from './styles'

const theme = extendTheme(
	{
		config,
		colors,
		styles,
	},
	withDefaultColorScheme({ colorScheme: 'primary' })
)

export default theme
