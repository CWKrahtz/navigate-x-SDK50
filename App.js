import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from './screens/HomeScreen';
import DevelopmentScreen from './screens/DevelopmentScreen';
import PhotosScreen from './screens/PhotosScreen';
import PrivateScreen from './screens/PrivateScreen';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // Add navigation here
    // <HomeScreen />
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Development" component={DevelopmentScreen}/>
        <Stack.Screen name="Photos" component={PhotosScreen}/>
        <Stack.Screen name="Private" component={PrivateScreen}/>
      </Stack.Navigator> */}
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Development" component={DevelopmentScreen}/>
        <Tab.Screen name="Photos" component={PhotosScreen}/>
        <Tab.Screen name="Private" component={PrivateScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

