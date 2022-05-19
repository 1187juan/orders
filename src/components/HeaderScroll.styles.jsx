import styled from '@emotion/styled'

export const Header = styled('header')(({ theme }) => ({
	position: 'sticky',
	top: '0px',
	width: 'auto',
	padding: '0px 1rem',
	height: '64px',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',

	backgroundColor: theme.colors.white,
}))
