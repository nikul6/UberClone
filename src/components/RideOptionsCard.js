import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: 'Uber-X-123',
    title: 'UberX',
    multipiler: 1,
    image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png'
  },
  {
    id: 'Uber-XL-456',
    title: 'Uber XL',
    multipiler: 1.2,
    image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberXL.png'
  },
  {
    id: 'Uber-LUX-789',
    title: 'Uber LUX',
    multipiler: 1.75,
    image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/Lux.png'
  },
]

const RideOptionsCard = () => {

  const navigation = useNavigation();
  const [select, setSelected] = useState(null);

  return (
    <SafeAreaView style={styles.mainCoantiner}>
      <View style={styles.rideConatiner}>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('NavigateCard')}>
          <FontAwesome name="chevron-left" size={16} color="#000" />
        </TouchableOpacity>
        <View style={{ flex: 1.5 }}>
          <Text style={styles.rideTextStyle}>Select a Ride</Text>
        </View>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multipiler, image }, item }) => (
          <TouchableOpacity style={[styles.rideOptionsConatiner, { backgroundColor: id === select?.id ? '#E8E8E8' : '#fff' }]} onPress={() => setSelected(item)}>
            <Image source={{ uri: image }} style={styles.carImageConatiner} />
            <View style={{ marginRight: 15 }}>
              <Text style={styles.rideTitlePriceStyle}>{title}</Text>
              <Text>Travel Time...</Text>
            </View>
            <Text style={styles.rideTitlePriceStyle}>$99</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({
  mainCoantiner: {
    flex: 1, backgroundColor: '#fff'
  },
  rideConatiner: {
    flexDirection: 'row', padding: 15, justifyContent: 'center', alignItems: 'center'
  },
  rideTextStyle: {
    fontSize: 15, fontWeight: '500'
  },
  rideOptionsConatiner: {
    flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'
  },
  carImageConatiner: {
    height: 100, width: 100, resizeMode: 'contain'
  },
  rideTitlePriceStyle: {
    fontSize: 15, fontWeight: 'bold'
  }
})