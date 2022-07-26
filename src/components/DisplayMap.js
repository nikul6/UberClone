import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, {Marker} from 'react-native-maps';
import {useSelector} from 'react-redux';
import {selectOrigin} from '../slices/navSlice'

const DisplayMap = () => {
    const origin = useSelector(selectOrigin);
    console.log("origin --> ", origin.location)
    return (
        <MapView
            style={{ flex: 1 }}
            mapType="mutedStandard"
            initialRegion={{
                latitude: origin.location[1],
                longitude: origin.location[0],
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        >
            {origin?.location && (
                <Marker
                    coordinate={{
                        latitude: origin.location[1],
                        longitude: origin.location[0],
                    }}
                    title="Origin"
                    description={origin.description}
                    identifier="origin"
                />
            )}
            </MapView>
    )
}

export default DisplayMap

const styles = StyleSheet.create({})