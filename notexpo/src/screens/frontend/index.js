import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import About from './About';
import Contact from './Contact';

export default function Index() {
const stack = createStackNavigator()
return (
<>
<stack.Navigator>
<stack.Screen name='Home' component={<Home/>} />
<stack.Screen name='About' component={<About/>} />
<stack.Screen name='Contact' component={<Contact/>} />
</stack.Navigator> 
</>
)
}