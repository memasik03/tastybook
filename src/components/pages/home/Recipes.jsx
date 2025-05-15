import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Container } from '../../Container'
import { RecipesList } from './RecipesList'
import { SearchBar } from './SearchBar'

const RecipesBox = styled.div`
	width: 100%;
	height: 1000px;
	margin-top: 120px;
`

export function Recipes({
	searchbarValue,
	setSearchbarValue,
	recipesVariants,
	setRecipesVariants,
}) {
	const [letter, setLetter] = useState('')
	async function GetRecipes(type, value = '') {
		const url = {
			byLetter: `https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`,
			all: `https://www.themealdb.com/api/json/v1/1/search.php?s=`,
		}[type]
		const response = await fetch(url)

		if (!response.ok) {
			console.error('Error ', response)
		}
		const data = await response.json()
		return data
	}

	useEffect(() => {
		const originalRecipes = recipesVariants.originalRecipes
		const searchedRecipes = recipesVariants.searchedRecipes
		function searchRecipe() {
			const filteredRecipes = originalRecipes.filter(recipe =>
				recipe.strMeal
					.trim()
					.toLowerCase()
					.includes(searchbarValue.trim().toLowerCase())
			)

			if (filteredRecipes.length !== searchedRecipes.length) {
				setRecipesVariants(prev => ({
					...prev,
					searchedRecipes: filteredRecipes,
				}))
			} else if (searchedRecipes.length === 0) {
				return
			}
		}
		if (searchbarValue.length === 0 && originalRecipes.length === 0) {
			return
		} else if (searchbarValue.length === 0 && letter !== '') {
			setLetter('')
		} else if (searchbarValue.length === 1) {
			console.log('aaaaa')
			if (searchbarValue[0] !== letter) {
				setLetter(searchbarValue[0])
			} else {
				searchRecipe()
			}
		} else if (searchbarValue.length > 1) {
			searchRecipe()
		}
	}, [searchbarValue, recipesVariants, setRecipesVariants, letter])

	useEffect(() => {
		async function fetchData() {
			let data = []
			if (letter === '') {
				data = await GetRecipes('all')
			} else {
				data = await GetRecipes('byLetter', letter)
			}
			setRecipesVariants(prev => ({
				...prev,
				originalRecipes: data.meals,
				searchedRecipes: data.meals,
			}))
		}
		fetchData()
	}, [letter, setRecipesVariants])

	return (
		<RecipesBox>
			<Container>
				<SearchBar value={searchbarValue} setValue={setSearchbarValue} />
				<RecipesList recipes={recipesVariants.searchedRecipes} />
			</Container>
		</RecipesBox>
	)
}
