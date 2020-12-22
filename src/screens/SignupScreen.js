import React, {useContext} from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import {Text} from 'react-native-elements'
import AuthForm from '../components/AuthForm'

import Spacer from '../components/Spacer'

//Context
import {Context as AuthContext} from '../context/AuthContext'

const SignupScreen = ({navigation}) => {
  const {state, signup} = useContext(AuthContext)

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <AuthForm
            headerText='Sign up for Tracker'
            errorMessage={state.errorMessage}
            submitButtonText='Sign Up'
            onSubmit={({email, password}) => signup({email, password})}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <Spacer>
              <Text style={styles.link}>
                Already have an account? Sign in instead
              </Text>
            </Spacer>
          </TouchableOpacity>
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
  link: {
    color: 'blue'
  }
})

export default SignupScreen
