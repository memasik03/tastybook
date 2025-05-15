import isPropValid from '@emotion/is-prop-valid'
import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import styled, { StyleSheetManager } from 'styled-components'
import { RecipePage } from '../recipe/RecipePage'
import { Header } from './Header'
import { Recipes } from './Recipes'

const Container = styled.div`
	width: 100%;
`

export function App() {
	const [searchbarValue, setSearchbarValue] = useState('')
	const [recipesVariants, setRecipesVariants] = useState({
		originalRecipes: [],
		searchedRecipes: [],
	})

	return (
		<StyleSheetManager shouldForwardProp={isPropValid}>
			<Router>
				<Routes>
					<Route
						path='/'
						element={
							<Container>
								<Header />

								<Recipes
									searchbarValue={searchbarValue}
									setSearchbarValue={setSearchbarValue}
									recipesVariants={recipesVariants}
									setRecipesVariants={setRecipesVariants}
								/>
							</Container>
						}
					/>
					<Route path='/recipe/:recipeId' element={<RecipePage />} />
				</Routes>
			</Router>
		</StyleSheetManager>
	)
}
