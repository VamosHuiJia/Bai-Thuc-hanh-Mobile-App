import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import BottomTabNavigator from './src/Navigation/BottomTabNavigator';
import ProductDetailScreen from './src/Screens/Product_detail_Screen'; 
import BeveragesScreen from './src/Screens/Berverages_Screen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabNavigator}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Beverages" 
          component={BeveragesScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;