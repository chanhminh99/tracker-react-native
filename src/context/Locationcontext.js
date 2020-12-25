import createDataContext from './createDataContext'

const initialState = {
  recording: false,
  locations: [],
  currentLocation: null
}

const locationReducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const startRecording = (dispatch) => () => {}
const stopRecording = (dispatch) => () => {}

const addLocation = (dispatch) => () => {}

export const {Context, Provider} = createDataContext(
  locationReducer,
  {startRecording, stopRecording, addLocation},
  initialState
)
