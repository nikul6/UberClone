import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { searchLocation } from '../utils';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from '../components/NavFavourites';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const NavigateCard = () => {

    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const getPlaces = (text) => {
        searchLocation(text).then(data => {
            setResult([...data])
        })
        setQuery(text)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text style={styles.userNameTextStyle}>Good Morning, Alex</Text>
            <View style={styles.mainConatiner}>
                <View>
                    <TextInput
                        value={query}
                        onChangeText={(text) => getPlaces(text)}
                        placeholder="Where to?"
                        placeholderTextColor="gray"
                        style={styles.placeContainer}
                    />
                    {query.length > 0 &&
                        <View style={{ marginTop: 10, }}>
                            {result.map((addressItem, index) => (
                                <View key={index} style={styles.resultConatiner}>
                                    <TouchableOpacity onPress={() => {
                                        setQuery(addressItem.place_name);
                                        dispatch(setDestination({
                                            location: addressItem.center,
                                            description: addressItem.place_name
                                        }))
                                        navigation.navigate('RideOptionsCard');
                                        setResult([]);
                                    }} activeOpacity={0.9}>
                                        <Text numberOfLines={2} style={styles.resultTextStyle}>{addressItem.place_name}</Text>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>
                    }
                </View>
                <NavFavourites />
            </View>
            <View style={styles.bottomConatiner}>
                <TouchableOpacity style={styles.rideEatsConatiner}>
                    <FontAwesome name="car" size={16} color="#fff" />
                    <Text style={styles.rideEatsTextStyle}>Rides</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rideEatsConatiner}>
                    <Ionicons name="fast-food-outline" size={16} color="#fff" />
                    <Text style={styles.rideEatsTextStyle}>Eats</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const styles = StyleSheet.create({
    userNameTextStyle: {
        fontSize: 15, padding: 15, textAlign: 'center', fontWeight: '500'
    },
    mainConatiner: {
        // borderWidth: 1, 
        borderColor: 'gray',
        borderTopWidth: 0.5,
        flex: 5
    },
    placeContainer: {
        height: 46,
        borderColor: "#323C43",
        color: "#000",
        padding: 10,
        backgroundColor: '#E8E8E8',
        margin: 10
    },
    resultConatiner: {
        marginVertical: 1,
        borderBottomWidth: 0.5,
        padding: 10,
        borderBottomColor: 'gray'
    },
    resultTextStyle: {
        lineHeight: 20,
        width: "100%",
    },
    bottomConatiner: {
        padding: 10, flexDirection: 'row', justifyContent: 'space-evenly'
    },
    rideEatsConatiner: {
        flexDirection: 'row', backgroundColor: '#000', padding: 10, borderRadius: 20, justifyContent: 'center', alignItems: 'center', height: 35
    },
    rideEatsTextStyle: {
        color: '#fff', marginLeft: 10
    }
})