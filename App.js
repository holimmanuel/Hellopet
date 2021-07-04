import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import COLORS from './src/consts/colors';
import DetailScreen from './src/views/screens/DetailScreen';
import BottomNavigator from './src/views/navigation/BottomNavigator';
import OnBoardScreen from './src/views/screens/OnBoardScreen';
import ChatDokterScreen from './src/views/screens/ChatDokterScreen';
import Profile from './src/views/screens/Profile';
import ProductScreen from './src/views/screens/ProductScreen';
import CartScreen from './src/views/screens/CartScreen';
import Diagnosa from './src/views/screens/Diagnosa';
import Transaksi from './src/views/screens/Transaksi';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator
        initialRouteName="Transaksi"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="Home" component={BottomNavigator} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="ChatDokterScreen" component={ChatDokterScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="Diagnosa" component={Diagnosa} />
        <Stack.Screen name="Transaksi" component={Transaksi} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
