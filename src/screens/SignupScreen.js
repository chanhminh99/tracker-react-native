import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Text, Input, Button} from 'react-native-elements'

import Spacer from '../components/Spacer'

const SignupScreen = ({navigation}) => {
  return (
    <View>
      <Spacer>
        <Text h3>Sign up for Tracker</Text>
      </Spacer>
      <Input label='Email' />
      <Spacer />
      <Input label='Password' />
      <Spacer>
        <Button title='Sign Up' />
      </Spacer>
    </View>
  )
}

SignupScreen.navigationOptions = () => {
  return {
    title: 'aloo'
  }
}

const styles = StyleSheet.create({})

export default SignupScreen
