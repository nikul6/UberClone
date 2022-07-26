import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screen Declaration
import Home from '../screens/Home';
import Map from '../screens/Map';
// import Favourite from '../screens/Favourite';

const Stack = createNativeStackNavigator();

function ScreenNavigation() {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Map" component={Map} />
            {/* <Stack.Screen name="Favourite" component={Favourite} /> */}
        </Stack.Navigator>
    );
}


export default function Router() {
    return (
        <NavigationContainer>
            <ScreenNavigation />
        </NavigationContainer>
    );
}