import { Text, View, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import NavOptions from '../components/NavOptions'
import { searchLocation } from '../utils';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';

const Home = () => {

  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);
  const dispatch = useDispatch();

  const getPlaces = (text) => {
    searchLocation(text).then(data => {
      setResult([...data])
    })
    setQuery(text)
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.secondContainer}>
        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png' }} style={styles.imageContainer} />
        <TextInput
          value={query}
          onChangeText={(text) => getPlaces(text)}
          placeholder="Where Form?"
          placeholderTextColor="gray"
          style={styles.placeContainer}
        />
        {query.length > 0 &&
          <View style={{ marginTop: 10, }}>
            {result.map((addressItem, index) => (
              <View key={index} style={styles.resultConatiner}>
                <TouchableOpacity onPress={() => {
                  console.log("addressItem ---> ", addressItem)
                  setQuery(addressItem.place_name);
                  dispatch(setOrigin({
                    location: addressItem.center,
                    description: addressItem.place_name
                  }))
                  dispatch(setDestination(null))
                  setResult([]);
                }} activeOpacity={0.9}>
                  <Text numberOfLines={2} style={styles.resultTextStyle}>{addressItem.place_name}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        }
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  imageContainer: {
    height: 100,
    width: 100,
    resizeMode: 'contain'
  },
  secondContainer: {
    padding: 10
  },
  placeContainer: {
    height: 46,
    borderColor: "#323C43",
    color: "#000",
    padding: 10
  },
  resultConatiner: {
    marginVertical: 1,
    borderBottomWidth: 1.4,
    padding: 10,
    borderBottomColor: 'gray'
  },
  resultTextStyle: {
    lineHeight: 20,
    width: "100%",
  }
})