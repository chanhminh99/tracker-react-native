import React from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack'

//Screen
import AccountScreen from './src/screens/AccountScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import ResolveAuthScreen from './src/screens/ResolveAuthScreen'

//Context
import {Provider as AuthProvider} from './src/context/AuthContext'

//Navigator
import {setNavigator} from './src/navigationRef'

const switchNavigation = createSwitchNavigator(
  {
    ResolveAuth: ResolveAuthScreen,
    loginFlow: createStackNavigator({
      Signup: SignupScreen,
      Signin: SigninScreen
    }),
    mainFlow: createBottomTabNavigator(
      {
        trackListFlow: createStackNavigator({
          TrackList: TrackListScreen,
          TrackDetail: TrackDetailScreen
        }),
        TrackCreate: TrackCreateScreen,
        Account: AccountScreen
      }
      // {
      //   defaultNavigationOptions: {
      //     title: 'Tracker'
      //   }
      // }
    )
  },
  {
    initialRouteName: 'ResolveAuth'
  }
)

const App = createAppContainer(switchNavigation)

export default () => {
  return (
    <AuthProvider>
      <App ref={(navigation) => setNavigator(navigation)} />
    </AuthProvider>
  )
}
