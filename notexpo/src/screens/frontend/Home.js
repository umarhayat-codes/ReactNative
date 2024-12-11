import { View, Text, StyleSheet, Button, TextInput, Image, ScrollView, FlatList} from 'react-native';
import React, { useState } from 'react';

export default function Home({navigation}) {
const [state,setState] = useState(0)
const handleCount = () => {
setState(c => (c + 1))
}
const items = [
{ id: '0', text: 'View' },
{ id: '1', text: 'Text' },
{ id: '2', text: 'Image' },
{ id: '3', text: 'ScrollView' },
{ id: '4', text: 'ListView' },
]

return (

<>
<FlatList
style={styles.container}
keyExtractor={({item}) => item.id}
data={items}
// renderItem={({item}) => <Text style={styles.row} onPress={({}) => {alert(item.id)}}>{item.text}</Text>}
// renderItem={({item}) => <Text style={styles.row} onPress={({}) => {console.log(item.id + " " + item.text)}}>{item.text}</Text>}
// renderItem={({item}) => <Text style={styles.row} onPress={({}) => {navigation.navigate(item.text)}}>{item.text}</Text>}
renderItem={({item}) => <Text style={styles.row} onPress={() => {navigation.navigate(item.text)}}>{item.text}</Text>}
/>
</>
// <ScrollView>

// <View style={styles.flexContainer}>
// <Text style={styles.text}>App</Text>
// <Button title='I am a button' />
// <View style={{paddingVertical : 16}}>
// <Button title='Click me' onPress={handleCount} />
// <Text>Count : {state}</Text>
// </View>
// <TextInput style={styles.input} />
// <Image source={require('./Assets/boot.png')} style={styles.image} />
// <View style={{paddingVertical : 16}}>
// <Button title='Click me' onPress={handleCount} />
// <Text>Count : {state}</Text>
// </View>
// <TextInput style={styles.input} />
// <Image source={require('./Assets/boot.png')} style={styles.image} />
// <View style={{paddingVertical : 16}}>
// <Button title='Click me' onPress={handleCount} />
// <Text>Count : {state}</Text>
// </View>
// <TextInput style={styles.input} />
// <Image source={require('./Assets/boot.png')} style={styles.image} />
// <View style={{paddingVertical : 16}}>
// <Button title='Click me' onPress={handleCount} />
// <Text>Count : {state}</Text>
// </View>
// <TextInput style={styles.input} />
// <Image source={require('./Assets/boot.png')} style={styles.image} />
// </View>
// </ScrollView>
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
row : {
padding : 15,
backgroundColor : 'red'
},
container : {
flex : 1
}
});