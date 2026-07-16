import { ADD_RECETTE, GET_RECETTE_DETAIL } from "../actions";


const initialState = {
  list : [],
  selectedRecette:{}
}
export const recetteList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECETTE:
  
      return {
        list : [...state.list,...action.payload]
      }
    case GET_RECETTE_DETAIL:

      return {
        list : [...state.list],
        selectedRecette : {...action.payload},
      } 
    default: 
      return state
  }

}


