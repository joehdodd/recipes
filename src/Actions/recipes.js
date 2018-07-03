import { db } from '../../firebase.js';

export const fetchRecipes = () => dispatch => {
  dispatch(fetching());
  const publicRecipesRef = db.collection('publicRecipes');
  const recipes = [];
  publicRecipesRef
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        console.log(doc);
        let recipeData = {
          id: doc.id,
          data: doc.data()
        };
        return recipes.push(recipeData);
      });
      dispatch(fetchSuccess(recipes));
    })
    .catch(err => dispatch(fetchError(err)));
};

export const addRecipe = values => dispatch => {
  db
    .collection('publicRecipes')
    .add({
      ...values
    })
    .then(ref => {
      dispatch(fetchRecipes())
      console.log('Added document with ID: ', ref.id);
    });
};

const fetching = () => ({
  type: 'FETCHING_RECIPES',
  fetchRecipes: true
});

const fetchSuccess = recipes => ({
  type: 'FETCH_SUCCESS',
  fetchingRecipes: false,
  recipes
});

const fetchError = err => ({
  type: 'FETCH_ERROR',
  fetchError: true,
  fetchingRecipes: false,
  err
});

export const setRecipeInputValues = (value, name) => ({
  type: 'SET_RECIPE_INPUT_VALUE',
  value,
  name
});
