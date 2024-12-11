import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Register from './Register'

export default function Auth() {
    const stack = createStackNavigator()
  return (
    <>
    <stack.Navigator>
        <stack.Screen name='Register' component={<Register/>} />
    </stack.Navigator>
    
    </>
  )
}