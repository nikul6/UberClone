import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DisplayMap from '../components/DisplayMap'

const Map = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 / 2 }}>
        <DisplayMap />
      </View>
      {/* <View style={{ flex: 1, backgroundColor: 'yellow' }}>
        <Text>Hi</Text>
      </View> */}
    </View>
  )
}

export default Map

const styles = StyleSheet.create({})