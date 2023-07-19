import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MeetingRoom from './screens/MeetingRoom';
const CustomNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} 
      
      options={{headerShown:false}}
      />
        <Stack.Screen name="Room" component={MeetingRoom} 
      options={{
        title:"Start a Meeting",
        
        headerStyle:{
          backgroundColor:'#1c1c1c',
          shadowOpacity:0
        },
        headerTintColor:'white',
        
      }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default CustomNavigation

const styles = StyleSheet.create({})