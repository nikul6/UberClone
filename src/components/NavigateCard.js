import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { searchLocation } from '../utils';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';

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
        borderTopWidth: 0.5
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
    }
})