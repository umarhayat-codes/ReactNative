import { View, Text, Button } from 'react-native'
import React from 'react'

export default function About({navigation}) {
  return (
    <View>
      <Button onPress={() => {navigation.navigate("Contact",{id:"1234",name:"umar"})}}></Button>
    </View>
  )
}