import styled from 'styled-components'
import { Container } from '../../Container'
import { Logo } from './Logo'

const HeaderBox = styled.header`
	width: 100%;
	height: 100px;
	display: flex;
	align-items: center;
	background-color: var(--main-color);
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	position: fixed;
	z-index: 100;
`
const LogoBox = styled.div`
	display: flex;
	gap: 30px;
	align-items: center;
`
const Title = styled.h1`
	font-size: 28px;
	font-weight: 700;
`

export function Header() {
	return (
		<HeaderBox>
			<Container>
				<LogoBox>
					<Logo />
					<Title>tastybook</Title>
				</LogoBox>
			</Container>
		</HeaderBox>
	)
}
