import React, {useContext} from 'react'
import {Input, Button} from 'react-native-elements'
import Spacer from '../components/Spacer'
import {Context as LocationContext} from '../context/LocationContext'
const TrackForm = () => {
  const {
    state: {recording, name, locations},
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext)

  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder='Enter name'
        />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button title='Stop recording' onPress={stopRecording} />
        ) : (
          <Button title='Start Recording' onPress={startRecording} />
        )}
      </Spacer>
      <Spacer>
        {!recording && locations.length ? (
          <Button title='Save recording' />
        ) : null}
      </Spacer>
    </>
  )
}

export default TrackForm
