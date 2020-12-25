import React, {useContext} from 'react'
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import {NavigationEvents} from 'react-navigation'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import {Context} from '../context/AuthContext'

const SigninScreen = () => {
  const {state, signin, clearErrormessage} = useContext(Context)
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <NavigationEvents onWillFocus={clearErrormessage} />
          <AuthForm
            headerText='Signin for Tracker'
            errorMessage={state.errorMessage}
            onSubmit={({email, password}) => signin({email, password})}
            submitButtonText='Sign in'
          />
          <NavLink
            text='Dont have an account? Sign up instead'
            routeName='Signup'
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default SigninScreen
