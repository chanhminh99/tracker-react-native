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
import {Provider as LocationProvider} from './src/context/LocationContext'
import {Provider as TrackProvider} from './src/context/TrackContext'
//Navigator
import {setNavigator} from './src/navigationRef'

import {FontAwesome} from '@expo/vector-icons'
const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen
})

trackListFlow.navigationOptions = () => {
  return {
    title: 'Tracks',
    tabBarIcon: <FontAwesome name='th-list' size={25} />
  }
}

const switchNavigation = createSwitchNavigator(
  {
    ResolveAuth: ResolveAuthScreen,
    loginFlow: createStackNavigator({
      Signup: SignupScreen,
      Signin: SigninScreen
    }),
    mainFlow: createBottomTabNavigator({
      trackListFlow,
      TrackCreate: TrackCreateScreen,
      Account: AccountScreen
    })
  },
  {
    initialRouteName: 'ResolveAuth',
    defaultNavigationOptions: {
      cardStyle: {backgroundColor: '#000'},
      headerStyle: {
        backgroundColor: '#000'
      },
      // headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#fff'
      }
    }
  }
)

const App = createAppContainer(switchNavigation)

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App ref={(navigation) => setNavigator(navigation)} />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  )
}
