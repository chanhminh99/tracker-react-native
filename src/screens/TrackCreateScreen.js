import '../_mockLocation'
import React, {useContext, useCallback} from 'react'
import {StyleSheet} from 'react-native'
import {Text} from 'react-native-elements'
import {SafeAreaView, withNavigationFocus} from 'react-navigation'
import Map from '../components/Map'
import TrackForm from '../components/TrackForm'
import {Context as Locationcontext} from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import {FontAwesome} from '@expo/vector-icons'
const TrackCreateScreen = ({isFocused}) => {
  const {
    state: {recording},
    addLocation
  } = useContext(Locationcontext)

  const callback = useCallback(
    (location) => {
      addLocation(location, recording)
    },
    [recording]
  )
  const [err] = useLocation(isFocused || recording, callback)

  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  )
}

TrackCreateScreen.navigationOptions = () => {
  return {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name='plus' size={25} />
  }
}

const styles = StyleSheet.create({})

export default withNavigationFocus(TrackCreateScreen)
