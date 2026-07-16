
export const ADD_TASK = "ADD_TASK"
export const COMPLETE_TASK = "COMPLETE_TASK"
export const DELETE_TASK = "DELETE_TASK"

export const ADD_RECETTE = "ADD_RECETTE"
export const GET_RECETTE_DETAIL = "GET_RECETTE_DETAIL"


export const addTask = (title) => {
    return {
        type: ADD_TASK,
        payload: title
    }
}

export const completeTask = (task) => {
    return {
        type: COMPLETE_TASK,
        payload: { ...task }
    }
}

export const deleteTask = (task) => {
    return {
        type: DELETE_TASK,
        payload: { ...task }
    }
}

export const addRecette = (data) => {
    return {
        type: ADD_RECETTE,
        payload: data
    }
}

export const getRecetteDetail = (recette) => {
    return {
        type: GET_RECETTE_DETAIL,
        payload: recette
    }
}