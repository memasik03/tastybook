import styled from 'styled-components'

const SearchBarBox = styled.input`
	width: 100%;
	height: 40px;
	border: solid 1px rgba(255, 255, 255, 0.3);
	border-radius: 5px;
	padding: 5px;
	background-color: var(--main-color);
	color: inherit;
	font-size: inherit;
`

export function SearchBar({ value, setValue }) {
	return (
		<SearchBarBox
			type='text'
			placeholder='Search recipes'
			value={value}
			onChange={e => setValue(e.target.value)}
		/>
	)
}
