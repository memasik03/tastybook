import styled from 'styled-components'

const ContainerDiv = styled.div`
	max-width: 1410px;
	width: 100%;
	height: max-content;
	padding: 0 15px;
	margin: 0 auto;
`

export function Container({ children }) {
	return <ContainerDiv>{children}</ContainerDiv>
}
