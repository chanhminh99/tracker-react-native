import React, {useContext, useState} from 'react'
import {Text, StyleSheet, ActivityIndicator} from 'react-native'
import MapView, {Polyline, Circle} from 'react-native-maps'
import {Context as Locationcontext} from '../context/LocationContext'

const inintCoords = {
  latitude: 10.7492,
  longitude: 106.69788,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01
}

const Map = () => {
  const [region, setRegion] = useState(inintCoords)
  const {
    state: {currentLocation, locations}
  } = useContext(Locationcontext)

  if (!currentLocation) {
    return <ActivityIndicator size='large' style={{marginTop: 200}} />
  }

  const {latitude} = currentLocation.coords

  if (latitude >= region.latitude + region.latitudeDelta / 2) {
    setRegion({...inintCoords, ...currentLocation.coords})
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02
      }}
      region={region}>
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor='rgba(158,158,255,1.0)'
        fillColor='rgba(158,158,255,0.3)'
      />
      <Polyline coordinates={locations.map((loc) => loc.coords)} />
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    height: 300
    // width: 600
  }
})

export default Map
