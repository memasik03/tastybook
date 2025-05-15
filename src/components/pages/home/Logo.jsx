import styled from 'styled-components'
import logo from '../../../assets/logo.png'

const Button = styled.button`
	width: ${props => props.size + 'px'};
	aspect-ratio: 1/1;
	background-color: transparent;
	display: flex;
	gap: 30px;
`

const Image = styled.img`
	width: 100%;
	height: 100%;
`

export function Logo({ size = 50 }) {
	return (
		<Button size={size}>
			<Image src={logo} alt='Tastybook' />
		</Button>
	)
}
