import React, { } from 'react';
import {
  StyleSheet,
} from 'react-native';
import Home from './src/Home';
import PlayerName from './src/PlayerName';
import Clock from './src/Clock';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';



const Stack = createNativeStackNavigator();

function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false, gestureEnabled: true }} />
        <Stack.Screen name="PlayerName" component={PlayerName} options={{ headerShown: false, gestureEnabled: true }} />
        <Stack.Screen name="Clock" component={Clock} options={{ headerShown: false, gestureEnabled: true }} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    marginVertical: 10,
    borderRadius: 5,
    height: '100%'
  },
  section1: {
    flex: 1,
    backgroundColor: 'gray',
    marginVertical: 10,
    borderRadius: 5,
    height: '60%'
  },
  section2: {
    flex: 1,
    backgroundColor: 'gray',
    marginVertical: 10,
    borderRadius: 5,
    height: '20%'
  },
  section3: {
    flex: 1,
    backgroundColor: 'gray',
    marginVertical: 10,
    borderRadius: 5,
    height: '20%'
  },
});

export default App;