import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native'; 
import HomeScreen from '../Screens/Home_Screen';
import ExploreScreen from '../Screens/Explore_Screen';
import CartScreen from '../Screens/Cart_Screen';
import FavoritesScreen from '../Screens/Favorites_Screen';
import AccountScreen from '../Screens/Account_Screen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;

          // Gán các icon tải sẵn cho từng tab
          if (route.name === 'Shop') {
            iconSource = require('../../assets/Images/Home_icon.png'); 
          } else if (route.name === 'Explore') {
            iconSource = require('../../assets/Images/Explore_icon.png'); 
          } else if (route.name === 'Cart') {
            iconSource = require('../../assets/Images/Cart_icon.png'); 
          } else if (route.name === 'Favourites') {
            iconSource = require('../../assets/Images/Favorite_icon.png'); 
          } else if (route.name === 'Account') {
            iconSource = require('../../assets/Images/User_icon.png'); 
          }

          return (
            <Image
              source={iconSource}
              style={{
                width: size,
                height: size,
                tintColor: color, 
              }}
              resizeMode="contain"
            />
          );
        },
        tabBarActiveTintColor: '#53B175', 
        tabBarInactiveTintColor: 'black', 
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { height: 60, paddingBottom: 5 },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Shop" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Favourites" component={FavoritesScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;