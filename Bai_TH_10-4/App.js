import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./src/Splash_Screen";
import Loginup from "./src/SignIn_Screen";
import Number from "./src/PhoneNumber_Screen";
import Verification from "./src/Verification_Screen";
import OnBoarding from "./src/OnBording";
import SelectionLocation from "./src/Select_location_Screen";
import Login from "./src/LogIn_Screen";
import Signup from "./src/SignUp_Screen"; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Loginup" component={Loginup} />
        <Stack.Screen name="Number" component={Number} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="SelectionLocation" component={SelectionLocation} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}