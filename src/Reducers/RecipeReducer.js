const initialState = {
  fetchingRecipes: false,
  recipes: [],
  inputValues: {
    title: '',
    ingredients: '',
    instructions: '',
    prep: ''
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'FETCHING_RECIPES':
      return {
        ...state,
        fetchingRecipes: true
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        fetchingRecipes: action.fetchingRecipes,
        recipes: [...action.recipes]
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        fetchError: action.fetchError,
        fetchingRecipes: action.fetchingRecipes
      };
    case 'SET_RECIPE_INPUT_VALUE':
      return {
        ...state,
        inputValues: {
          ...state.inputValues,
          [action.name]: action.value
        }
      };
    default:
      return state;
  }
}
