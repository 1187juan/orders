import styled from '@emotion/styled'

export const Header = styled('header')(({ theme }) => ({
	position: 'sticky',
	top: '0px',
	zIndex: 1,
	width: 'auto',
	height: '64px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',

	backgroundColor: theme.colors.white,
}))
