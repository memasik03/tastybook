import styled from 'styled-components'
import { Recipe } from './Recipe'

const List = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 10px;
	padding: 20px 0;
`

export function RecipesList({ recipes }) {
	return (
		<List>
			{recipes.map(recipe => (
				<Recipe recipe={recipe} key={recipe.idMeal} />
			))}
		</List>
	)
}
