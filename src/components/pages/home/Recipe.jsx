import { MapPin, Utensils } from 'lucide-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const RecipeBox = styled.div`
	width: 100%;
	transition: 0.2s;
	overflow: hidden;
	border-radius: 20px;
	background-color: var(--main-color);
	display: flex;
	flex-direction: column;
	gap: 20px;
	&:hover {
		transform: scale(1.03);
		transition-duration: 0.15s;
	}
	&:not(:hover) {
		transition-duration: 0.5s;
	}
`

const NameString = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	gap: 20px;
`
const Name = styled.h3`
	font-weight: 600;
	font-size: 22px;
	a {
		color: var(--color);
	}
`
const Area = styled.h3`
	font-size: 16px;
	opacity: 70%;
	margin-top: 3px;
	display: flex;
	gap: 5px;
	align-items: center;
	height: max-content;
`

const Category = styled.h3`
	font-size: 18px;
	display: flex;
	gap: 5px;
	align-items: center;
	height: max-content;
`

const RecipePicture = styled.div`
	width: 100%;
	aspect-ratio: 16/9;
	background: url(${props => props.image}) center/cover no-repeat;
`

const RecipeInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 20px;
	padding-top: 0;
`

export function Recipe({ recipe }) {
	return (
		<RecipeBox>
			<RecipePicture image={recipe.strMealThumb} />
			<RecipeInfo>
				<NameString>
					<Name>
						<Link to={`recipe/${recipe.idMeal}`}>{recipe.strMeal}</Link>
					</Name>
					<Area>
						<MapPin size={14} />
						{recipe.strArea}
					</Area>
				</NameString>
				<Category>
					<Utensils size={18} />
					{recipe.strCategory}
				</Category>
			</RecipeInfo>
		</RecipeBox>
	)
}
