import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Contact({navigation}) {
  const {id,name} = route.params
  return (
    <View>
      <Button onPress={() => {navigation.navigate("Home")}}>Contact</Button>
      <Text>{id}</Text>
      <Text>{name}</Text>
    </View>
  )
}

