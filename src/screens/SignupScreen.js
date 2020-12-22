import React, {useState, useContext} from 'react'
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import {Text, Input, Button} from 'react-native-elements'

import Spacer from '../components/Spacer'

//Context
import {Context as AuthContext} from '../context/AuthContext'

const SignupScreen = ({navigation}) => {
  const {state, signup} = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  console.log(state)

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Spacer>
            <Text h3>Sign up for Tracker</Text>
          </Spacer>
          <Input
            label='Email'
            value={email}
            onChangeText={(newEmail) => setEmail(newEmail)}
            autoCapitalize='none'
            autoCorrect={false}
          />
          <Input
            secureTextEntry
            label='Password'
            value={password}
            onChangeText={(newPassword) => setPassword(newPassword)}
            autoCapitalize='none'
            autoCorrect={false}
          />
          {state.errorMessage ? (
            <Text style={styles.errorMessage}>{state.errorMessage}</Text>
          ) : null}
          <Spacer>
            <Button
              title='Sign Up'
              onPress={() => {
                signup({email, password})
              }}
            />
          </Spacer>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

SignupScreen.navigationOptions = () => {
  return {
    title: 'Welcome to Track App',
    headerShown: false
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  errorMessage: {
    fontSize: 18,
    color: 'red',
    marginLeft: 15
  }
})

export default SignupScreen
