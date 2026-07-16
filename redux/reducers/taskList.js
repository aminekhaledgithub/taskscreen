import { ADD_TASK, COMPLETE_TASK, DELETE_TASK } from "../actions";


const initialState = [{ id: 1, title: "Helooooozz", isComplete: false }]

export const taskList = (state = initialState, action) => {

  switch (action.type) {
      case ADD_TASK:
        
        return [...state, {
          id: Date.now(),
          title: action.payload,
          isComplete: false
        }]
  
      case COMPLETE_TASK:
        
        const selectedTask = state.find(task => task.id === action.payload.id);
        if(selectedTask){

          selectedTask.isComplete = !selectedTask.isComplete;
          return [...state.filter(task => task.id !== action.payload.id), selectedTask]
        }
        return state;
  
      case DELETE_TASK:
        return [...state.filter(task => task.id !== action.payload.id)]
  
      default:
        return state
    }
  
  }

  
