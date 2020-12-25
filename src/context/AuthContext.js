import AsyncStorage from '@react-native-async-storage/async-storage'
import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import {navigate} from '../navigationRef'

const initialState = {
  token: null,
  errorMessage: ''
}

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload}
    case 'clear_error_message':
      return {...state, errorMessage: ''}
    case 'signup':
    case 'signin':
      return {errorMessage: '', token: action.payload}
    case 'signout':
      return initialState
    default:
      return state
  }
}

const clearErrormessage = (dispatch) => () => {
  dispatch({type: 'clear_error_message'})
}

const signup = (dispatch) => async ({email, password}) => {
  try {
    const response = await trackerApi.post('/signup', {email, password})
    await AsyncStorage.setItem('token', response.data.token)
    dispatch({type: 'signup', payload: response.data.token})

    navigate('TrackList')
  } catch (err) {
    console.log(err.response.data)
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign up'
    })
    //   console.log(err.response.data)
  }
}

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token')
  if (token) {
    dispatch({type: 'signin', payload: token})
    navigate('TrackList')
  } else {
    navigate('Signup')
  }
}

const signin = (dispatch) => async ({email, password}) => {
  try {
    const response = await trackerApi.post('/signin', {email, password})
    await AsyncStorage.setItem('token', response.data.token)
    dispatch({type: 'signin', payload: response.data.token})

    navigate('TrackList')
  } catch (error) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign in'
    })
  }
}

const signout = (dispatch) => async () => {
  //Handle signout
  await AsyncStorage.removeItem('token')
  dispatch({type: 'signout'})

  navigate('loginFlow')
}

export const {Context, Provider} = createDataContext(
  authReducer,
  {
    signup,
    signin,
    signout,
    clearErrormessage,
    tryLocalSignin
  },
  initialState
)
