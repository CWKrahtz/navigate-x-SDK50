import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import DevelopmentScreen from './DevelopmentScreen';
import PhotosScreen from './PhotosScreen';
import PrivateScreen from './PrivateScreen';


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#151718"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#ECEDEE"
  }
})