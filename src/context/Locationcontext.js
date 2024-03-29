import createDataContext from './createDataContext'

const initialState = {
  recording: false,
  locations: [],
  currentLocation: null,
  name: ''
}

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'add_current_location':
      return {...state, currentLocation: action.payload}
    case 'add_location':
      return {...state, locations: [...state.locations, action.payload]}
    case 'start_recording':
      return {...state, recording: true}
    case 'stop_recording':
      return {...state, recording: false}
    case 'change_name':
      return {...state, name: action.payload}
    case 'reset_data':
      return {...state, name: '', locations: []}
    default:
      return state
  }
}

const reset = (dispatch) => () => {
  dispatch({type: 'reset_data'})
}

const changeName = (dispatch) => (name) => {
  dispatch({type: 'change_name', payload: name})
}

const startRecording = (dispatch) => () => {
  dispatch({type: 'start_recording'})
}
const stopRecording = (dispatch) => () => {
  dispatch({type: 'stop_recording'})
}

const addLocation = (dispatch) => (location, isRecording) => {
  dispatch({type: 'add_current_location', payload: location})
  if (isRecording) {
    dispatch({type: 'add_location', payload: location})
  }
}

export const {Context, Provider} = createDataContext(
  locationReducer,
  {startRecording, stopRecording, addLocation, changeName, reset},
  initialState
)
