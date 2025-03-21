import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CartScreen = () => {
    const navigation = useNavigation();

    const [cartItems, setCartItems] = useState([
        { id: "1", name: "Orange Juice", brand: "Lauren's", price: 149, quantity: 2, image: require("../../assets/icons/orange_juice.png") },
        { id: "2", name: "Skimmed Milk", brand: "Baskin's", price: 129, quantity: 2, image: require("../../assets/icons/Skimmed_Milk.png") },
        { id: "3", name: "Aloe Vera Lotion", brand: "Marley's", price: 1249, quantity: 2, image: require("../../assets/icons/Aloe_Vera.png") },
        { id: "4", name: "Orange Juice", brand: "Lauren's", price: 149, quantity: 2, image: require("../../assets/icons/orange_juice.png") },
        { id: "5", name: "Skimmed Milk", brand: "Baskin's", price: 129, quantity: 2, image: require("../../assets/icons/Skimmed_Milk.png") },
        { id: "6", name: "Aloe Vera Lotion", brand: "Marley's", price: 1249, quantity: 2, image: require("../../assets/icons/Aloe_Vera.png") },
    ]);

    const updateQuantity = (id, amount) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(0, item.quantity + amount) } : item
            )
        );
    };

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <View style={styles.container}>
            {/* Nút Back */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={28} color="black" />
            </TouchableOpacity>

            {/* Tiêu đề */}
            <Text style={styles.title}>Your Cart</Text>

            {/* Danh sách sản phẩm */}
            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingBottom: 20 }}
                renderItem={({ item }) => (
                    <View style={styles.cartItem}>
                        <Image source={item.image} style={styles.productImage} />
                        <View style={styles.productDetails}>
                            <Text style={styles.brand}>{item.brand}</Text>
                            <Text style={styles.productName}>{item.name}</Text>
                            <Text style={styles.price}>₹ {item.price}</Text>
                        </View>
                        <View style={styles.quantityControl}>
                            <TouchableOpacity 
                                onPress={() => updateQuantity(item.id, -1)} 
                                style={[styles.quantityButton, item.quantity === 0 && styles.disabledButton]}
                                disabled={item.quantity === 0}
                            >
                                <Ionicons name="remove-outline" size={18} color={item.quantity === 0 ? "#ccc" : "black"} />
                            </TouchableOpacity>
                            <Text style={styles.quantity}>{item.quantity}</Text>
                            <TouchableOpacity onPress={() => updateQuantity(item.id, 1)} style={styles.quantityButton}>
                                <Ionicons name="add-outline" size={18} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />

            {/* Tổng tiền & Nút thanh toán */}
            <View style={styles.footer}>
                <Text style={styles.totalText}>Total</Text>
                <Text style={styles.totalAmount}>₹ {totalAmount}</Text>
            </View>
            <TouchableOpacity style={styles.checkoutButton} onPress={() => navigation.navigate("Payment")}>
                <Text style={styles.checkoutText}>Proceed to checkout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fefaf6",
        paddingHorizontal: 20,
        paddingTop: 60,
    },
    backButton: {
        position: "absolute",
        top: 50,  
        left: 20,
        zIndex: 10,
        backgroundColor: "#fff",  
        padding: 8, 
        borderRadius: 12,  
        borderColor: "#ddd",  
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        alignSelf: "left",
        marginTop: 60,
        marginBottom: 20,
    },
    cartItem: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
    },
    productImage: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginRight: 15,
    },
    productDetails: {
        flex: 1,
    },
    brand: {
        fontSize: 14,
        color: "#888",
    },
    productName: {
        fontSize: 16,
        fontWeight: "bold",
    },
    price: {
        fontSize: 14,
        color: "#f7931e",
    },
    quantityControl: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f8f8f8",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    quantityButton: {
        padding: 5,
    },
    disabledButton: {
        opacity: 0.5,
    },
    quantity: {
        fontSize: 18,
        marginHorizontal: 8,
        fontWeight: "bold",
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 15,
        borderTopWidth: 1,
        borderTopColor: "#ddd",
        marginTop: 20,
    },
    totalText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    totalAmount: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#f7931e",
    },
    checkoutButton: {
        backgroundColor: "#f7931e",
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
        marginBottom: 100,
    },
    checkoutText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default CartScreen;
