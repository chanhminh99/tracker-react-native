import createDataContext from './createDataContext'

const trackReducer = (state, action) => {
  switch (action.type) {
    case 'create_track':
      return state
    case 'fetch_tracks':
      return state
    default:
      return state
  }
}

const createTrack = (dispatch) => () => {}

const fetchTracks = (dispatch) => () => {}

export const {Context, Provider} = createDataContext(
  trackReducer,
  {createTrack, fetchTracks},
  []
)
