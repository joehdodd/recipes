const initialState = {
  fetchingRecipes: false,
  recipes: []
}

export default function(state = initialState, action) {
    switch (action.type) {
      case 'FETCHING_RECIPES':
        return {
          ...state,
          fetchingRecipes: true
        }
      case 'FETCH_SUCCESS':
        return {
          ...state,
          fetchingRecipes: action.fetchingRecipes,
          recipes: [...action.recipes]
        }
      case 'FETCH_ERROR':
        return {
          ...state,
          fetchError: action.fetchError,
          fetchingRecipes: action.fetchingRecipes
        }
      default:
      return state;
    }
}
