import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const data = [
    {
        id: 1,
        icon: 'home',
        location: 'Home',
        destination: 'Code Street, London, UK'
    },
    {
        id: 2,
        icon: 'briefcase',
        location: 'Work',
        destination: 'London Eye, London, UK'
    }
]

const NavFavourites = () => {
    return <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
            <View style={{ height: 0.5, backgroundColor: 'gray' }} />
        )}
        renderItem={({ item: { location, icon, destination } }) => (
            <TouchableOpacity style={{ flex: 1, flexDirection: 'row', padding: 10, alignItems: 'center' }}>
                <View style={{ backgroundColor: '#E8E8E8', height: 40, width: 40, borderRadius: 40 / 2, justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                    <Ionicons name={icon} size={18} />
                </View>
                <View>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{location}</Text>
                    <Text style={{ color: 'gray' }}>{destination}</Text>
                </View>
            </TouchableOpacity>
        )}
    />
}

export default NavFavourites

const styles = StyleSheet.create({})