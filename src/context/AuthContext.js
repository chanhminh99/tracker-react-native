import AsyncStorage from '@react-native-async-storage/async-storage'
import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'


const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload}
    case 'signup':
      return {errorMessage: '', token: action.payload}
    default:
      return state
  }
}

const signup = (dispatch) => async ({email, password}) => {
  try {
    const response = await trackerApi.post('/signup', {email, password})
    await AsyncStorage.setItem('token', response.data.token)
    dispatch({type: 'signup', payload: response.data.token})
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign up'
    })
    //   console.log(err.response.data)
  }
}

const signin = (dispatch) => {
  return ({email, password}) => {
    // Try to signin
    //Handle success by updateing state
    // Handle failure by showing error (somehow)
  }
}

const signout = (dispatch) => {
  return () => {
    //Handle signout
  }
}

export const {Context, Provider} = createDataContext(
  authReducer,
  {signup, signin, signout},
  {
    token: null,
    errorMessage: ''
  }
)
