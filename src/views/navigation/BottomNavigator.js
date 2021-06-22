import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import HomeScreen from '../screens/HomeScreen';
import ChatDokterScreen from '../screens/ChatDokterScreen';
import Profile from '../screens/Profile';
import ProductScreen from '../screens/ProductScreen';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        showLabel: false,
        activeTintColor: COLORS.primary,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="home-filled" color={color} size={30} />
          ),
        }}
      />
       <Tab.Screen
        name="Product"
        component={ProductScreen}
        options={{
          tabBarIcon: ({color}) => <Icon name="local-grocery-store" color={color} size={30} />,
        }}
      /> 
      <Tab.Screen
        name="ChatDokterScreen"
        component={ChatDokterScreen}
        options={{
          tabBarIcon: ({color}) => <Icon name="mail" color={color} size={30} />,
        }}
      />
      <Tab.Screen
        name="Akun"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="person" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
