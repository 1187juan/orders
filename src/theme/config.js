const initialColor = localStorage.getItem('chakra-ui-color-mode')
export const config = {
	initialColorMode: initialColor,
	useSystemColorMode: !initialColor,
}
