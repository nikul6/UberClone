import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import DisplayMap from '../components/DisplayMap'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Map = () => {

  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 / 2 }}>
        <DisplayMap />
      </View>
      <TouchableOpacity style={styles.menuConatiner} onPress={() => navigation.navigate('Home')}>
        <Ionicons name="menu" size={16} color="#fff" />
      </TouchableOpacity>
      <View style={{ flex: 1 / 2 }}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="NavigateCard" component={NavigateCard} />
          <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default Map

const styles = StyleSheet.create({
  menuConatiner: {
    height: 40, width: 40, borderRadius: 40 / 2, backgroundColor: 'gray', top: 25, right: 0, left: 20, bottom: 0, position: 'absolute', padding: 10, justifyContent: 'center', alignItems: 'center'
  }
})