import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id: 1,
        title: 'Get a ride',
        image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png',
        screen: 'Map'
    },
    {
        id: 2,
        title: 'Order food',
        image: 'https://i.pinimg.com/originals/4f/eb/74/4feb745209cf7aba57463b20d27b61e3.png',
        screen: 'Eats'
    }
]

const navOptions = () => {
    const navigation = useNavigation();
    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.mainConatiner} onPress={()=> navigation.navigate(item.screen)}>
                    <View>
                        <Image source={{ uri: item.image }} style={styles.iconConatiner} />
                    </View>
                    <Text style={styles.textStyle}>{item.title}</Text>
                    <View style={styles.arrowIconStyle}>
                        <AntDesign name="arrowright" size={20} color="#fff" />
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default navOptions

const styles = StyleSheet.create({
    mainConatiner: {
        padding: 20, backgroundColor: '#E8E8E8', margin: 5, width: 150
    },
    iconConatiner: {
        height: 120, width: 120, resizeMode: 'contain'
    },
    textStyle: {
        fontSize: 15, fontWeight: '500'
    },
    arrowIconStyle: {
        backgroundColor: '#000', height: 35, width: 35, borderRadius: 35 / 2, justifyContent: 'center', alignItems: 'center', marginTop: 10
    }
})