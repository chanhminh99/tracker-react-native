import React, {useContext} from 'react'
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import {NavigationEvents} from 'react-navigation'

//Context
import {Context as AuthContext} from '../context/AuthContext'

const SignupScreen = () => {
  const {state, signup, clearErrormessage} = useContext(AuthContext)

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <NavigationEvents
            onWillFocus={() => {
              clearErrormessage()
            }}
          />
          <AuthForm
            headerText='Sign up for Tracker'
            errorMessage={state.errorMessage}
            submitButtonText='Sign Up'
            onSubmit={({email, password}) => signup({email, password})}
          />
          <NavLink routeName='Signin' text='Already have an account? Sign in' />
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
  }
})

export default SignupScreen
