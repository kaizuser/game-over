const initialState = {
    games: [],
    auxiliar: [],
    inShopGames:[],
}

const gamesReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case 'fetchGames':

            return {
                ...state,
                games: action.payload.games,
                auxiliar: action.payload,
            }

        case 'filterGames':

            const filtered = action.payload.games.games.filter((data => data.gameName.toLowerCase().startsWith(action.payload.value.toLowerCase().trim())))

            return {
                ...state,
		games:[...filtered]
            }

	case 'addToShop':

		    if (![...state.inShopGames].includes(action.payload.game)){
			    let inShopGames = [...state.inShopGames]
			    inShopGames.push(action.payload.game)

			    return {
				    ...state,
				    inShopGames
			    }
		    }

		    let inShopGames = [...state.inShopGames]

		    return {
			    ...state,
			    inShopGames
		    }

        default:
            return state
    }
}

export default gamesReducer
