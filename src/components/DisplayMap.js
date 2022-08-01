import { StyleSheet } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView, { Marker, Polyline } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectDestination, selectOrigin, setTravelTimeInfromation } from '../slices/navSlice';
import { getDistanceData } from '../utils';
import { useDispatch } from 'react-redux';
// import MapViewDirections from 'react-native-maps-directions';

const DisplayMap = () => {

    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const mapRef = useRef(null);
    const dispatch = useDispatch();
    // console.log("origin ----> ", origin)
    // console.log("destination ---> ", destination)

    useEffect(() => {
        if (!origin || !destination) return;
        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
            edgePadding: { top: 50, bottom: 50, right: 50, left: 50 }
        })
    }, [origin, destination]);

    useEffect(() => {
        if (!origin || !destination) return;
        const getTravelTime = () => {
            const distanceLatLong = {
                originLong: origin.location[0],
                originLat: origin.location[1],
                desLong: destination.location[0],
                desLat: destination.location[1],
            }
            getDistanceData(distanceLatLong).then((data) => dispatch(setTravelTimeInfromation(data)))
        }
        getTravelTime();
    }, [origin, destination]);

    return (
        <MapView
            ref={mapRef}
            style={{ flex: 1 }}
            mapType="mutedStandard"
            initialRegion={{
                latitude: origin.location[1],
                longitude: origin.location[0],
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        >
            {origin && destination && (
                // <MapViewDirections
                //     origin={origin.description}
                //     destination={destination.description}
                //     apikey={GOOGLE_MAPS_APIKEY}
                //     strokeWidth={3}
                //     strokeColor="#000"
                // />
                <Polyline
                    coordinates={[{ latitude: origin.location[1], longitude: origin.location[0] },
                    { latitude: destination.location[1], longitude: destination.location[0] }]}
                    strokeColor={"#000"}
                    strokeWidth={3}
                    lineDashPattern={[1]}
                />
            )}
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

            {destination?.location && (
                <Marker
                    coordinate={{
                        latitude: destination.location[1],
                        longitude: destination.location[0],
                    }}
                    title="Destination"
                    description={destination.description}
                    identifier="destination"
                />
            )}
        </MapView>
    )
}

export default DisplayMap

const styles = StyleSheet.create({})