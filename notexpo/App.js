import { View, Text, StyleSheet, Button, TextInput, Image, ScrollView} from 'react-native';
import React, { useState } from 'react';

export default function Home() {
  const [state,setState] = useState(0)
  const handleCount = () =>  {
    setState(c => (c + 1))
  }
  

  return (

    
    <ScrollView>

    <View style={styles.flexContainer}>
      <Text style={styles.text}>App</Text>
      <Button title='I am a button' />
      <View style={{paddingVertical : 16}}>
        <Button title='Click me' onPress={handleCount} />
        <Text>Count : {state}</Text>
      </View>
      <TextInput style={styles.input} />
      <Image source={require('./Assets/boot.png')} style={styles.image} />
      <View style={{paddingVertical : 16}}>
        <Button title='Click me' onPress={handleCount} />
        <Text>Count : {state}</Text>
      </View>
      <TextInput style={styles.input} />
      <Image source={require('./Assets/boot.png')} style={styles.image} />
      <View style={{paddingVertical : 16}}>
        <Button title='Click me' onPress={handleCount} />
        <Text>Count : {state}</Text>
      </View>
      <TextInput style={styles.input} />
      <Image source={require('./Assets/boot.png')} style={styles.image} />
      <View style={{paddingVertical : 16}}>
        <Button title='Click me' onPress={handleCount} />
        <Text>Count : {state}</Text>
      </View>
      <TextInput style={styles.input} />
      <Image source={require('./Assets/boot.png')} style={styles.image} />
    </View>
</ScrollView>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    paddingHorizontal : 12,
  },
  text : {
    color : 'red',
    fontSize : 72,
  },
  input : {
    borderRadius : 3,
    borderColor: "black",
    borderWidth : 1,
    width : '100px',
  },
  image : {
    height : 150,
    width : 150,
  },
  
});

 

