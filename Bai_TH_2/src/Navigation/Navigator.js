import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import HomeScreen from "../Screens/Home_screen";
import ScanScreen from "../Screens/Scan_screen";
import CartScreen from "../Screens/Cart_screen";  
import PaymentScreen from "../Screens/Payment_screen"; 
import PaymentSuccess from "../Screens/Payment_success";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Component placeholder cho các màn hình chưa có nội dung
const PlaceholderScreen = ({ title }) => (
    <View style={styles.placeholderContainer}>
        <Text style={styles.placeholderText}>{title} Screen</Text>
    </View>
);

const NotificationsScreen = () => <PlaceholderScreen title="Notifications" />;
const HistoryScreen = () => <PlaceholderScreen title="History" />;

// Cart Stack (Chuyển từ Cart -> Payment)
const CartStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Payment" component={PaymentScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} options={{ headerShown: false }} />
    </Stack.Navigator>
);

// Hàm kiểm tra có ẩn tabBar hay không
const shouldHideTabBar = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "Cart";
    return routeName === "Payment"; // Nếu đang ở Payment thì ẩn Tab Bar
};

// Main Navigator
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: shouldHideTabBar(route) ? styles.hiddenTabBar : styles.tabBarStyle,
                    tabBarIcon: ({ focused, size }) => {
                        let iconName;
                        if (route.name === "Home") {
                            iconName = "home-outline";
                        } else if (route.name === "Notifications") {
                            iconName = "notifications-outline";
                        } else if (route.name === "Scan") {
                            iconName = "scan-outline";
                        } else if (route.name === "History") {
                            iconName = "time-outline";
                        } else if (route.name === "Cart") {
                            iconName = "cart-outline";
                        }

                        return (
                            <View style={[styles.iconContainer, focused && styles.activeTab]}>
                                <Ionicons name={iconName} size={size} color={focused ? "#E57C50" : "#B0B0B0"} />
                            </View>
                        );
                    },
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Notifications" component={NotificationsScreen} />
                <Tab.Screen name="Scan" component={ScanScreen} />
                <Tab.Screen name="History" component={HistoryScreen} />
                <Tab.Screen name="Cart" component={CartStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

// Styles
const styles = StyleSheet.create({
    tabBarStyle: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 70,
        paddingBottom: 10,
    },
    hiddenTabBar: {
        display: "none", 
    },
    iconContainer: {
        width: 50, 
        height: 50, 
        justifyContent: "center", 
        alignItems: "center",
        borderRadius: 15,
    },
    activeTab: {
        backgroundColor: "#FDE7DF",
    },
    placeholderContainer: { 
        marginTop: 10,
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "#f8f8f8", 
    },
    placeholderText: { 
        fontSize: 20, 
        color: "gray" 
    }
});

export default AppNavigator;
