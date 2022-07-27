import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DisplayMap from '../components/DisplayMap'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';

const Map = () => {

  const Stack = createNativeStackNavigator();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 / 2 }}>
        <DisplayMap />
      </View>
      <View style={{flex:1/2}}>
         <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="NavigateCard" component={NavigateCard} />
            <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default Map

const styles = StyleSheet.create({})