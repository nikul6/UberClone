import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import Router from './src/navigation/Router';

export default function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Router />
      </View>
    </Provider>
  );
}