import { ChefHat, Dot, HandPlatter, MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '../../Container'

const RecipeInfoBlock = styled.div`
	width: 100%;
	background-color: var(--main-color);
	border-radius: 30px;
	overflow: hidden;
	margin: 20px 0;
`

const RecipeInfoSection = styled.div`
	width: 100%;
	padding: 30px;
	display: flex;
	flex-direction: column;
	gap: 20px;
`

const Title = styled.h1`
	font-size: 34px;
	font-weight: 600;
`

const Chapter = styled.div`
	display: flex;
	flex-direction: ${props => !props.horizontal && 'column'};
	gap: 5px;
`

const ChapterName = styled.p`
	font-size: 22px;
	font-weight: 600;
	display: flex;
	align-items: center;
	gap: 5px;
`

const RecipeImage = styled.div`
	width: 100%;
	aspect-ratio: 3/1;
	background: linear-gradient(
			rgba(0, 0, 0, 0),
			rgba(0, 0, 0, 0),
			var(--main-color)
		),
		url(${props => props.image}) center/cover no-repeat;
`

const ChapterValue = styled.p`
	font-size: ${props => (props.big ? '22px' : '18px')};
	white-space: pre-wrap;
`

const Ingredients = styled.ul``

const Ingredient = styled.li`
	display: flex;
	align-items: center;
	font-size: 18px;
`

export function RecipePage() {
	const [recipeInfo, setRecipeInfo] = useState({})
	const { recipeId } = useParams()

	async function GetRecipe(id) {
		const response = await fetch(
			`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
		)

		if (!response.ok) {
			console.error('Error ', response)
		}
		const data = await response.json()
		return data
	}

	function getIngredients() {
		return Object.keys(recipeInfo)
			.filter(index => index.includes('strIngredient'))
			.filter(index => recipeInfo[index] !== '')
	}

	useEffect(() => {
		async function fetchData() {
			const data = await GetRecipe(recipeId)
			setRecipeInfo(data.meals[0])
		}
		fetchData()
	}, [recipeId])

	return (
		<Container>
			<RecipeInfoBlock>
				<RecipeImage image={recipeInfo.strMealThumb} />
				<RecipeInfoSection>
					<Title>{recipeInfo.strMeal}</Title>
					<Chapter>
						<ChapterName>
							<HandPlatter size={22} /> Ingredients:
						</ChapterName>
						<Ingredients big='true'>
							{getIngredients().map(i => (
								<Ingredient key={i}>
									<Dot size={30} />
									{recipeInfo[i]}
								</Ingredient>
							))}
						</Ingredients>
					</Chapter>
					<Chapter>
						<ChapterName>
							<ChefHat size={22} /> How to cook?
						</ChapterName>
						<ChapterValue>{recipeInfo.strInstructions}</ChapterValue>
					</Chapter>
					<Chapter horizontal='true'>
						<ChapterName>
							<MapPin size={22} /> Area:
						</ChapterName>
						<ChapterValue big='true'>{recipeInfo.strArea}</ChapterValue>
					</Chapter>
					<Chapter horizontal='true'>
						<ChapterName>
							<HandPlatter size={22} /> Category:
						</ChapterName>
						<ChapterValue big='true'>{recipeInfo.strCategory}</ChapterValue>
					</Chapter>
				</RecipeInfoSection>
			</RecipeInfoBlock>
		</Container>
	)
}
