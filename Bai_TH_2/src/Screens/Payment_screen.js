import React, { useEffect, useState } from "react";
import { 
  View, Text, TextInput, TouchableOpacity, 
  StyleSheet, SafeAreaView 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PaymentScreen = ({ navigation }) => {
  const [selectedMethod, setSelectedMethod] = useState("credit");
  const [cardholderName, setCardholderName] = useState("");

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        
        {/* Nút Back */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={26} color="black" />
        </TouchableOpacity>

        {/* Tiêu đề Checkout + Tổng tiền */}
        <View style={styles.checkoutContainer}>
          <Text style={styles.checkoutText}>Checkout 🏦</Text>
          <View>
            <Text style={styles.totalAmount}>₹ 1,527</Text>
            <Text style={styles.taxText}>Including GST (18%)</Text>
          </View>
        </View>

        {/* Chọn phương thức thanh toán */}
        <View style={styles.paymentMethods}>
          <TouchableOpacity 
            style={[styles.paymentButton, selectedMethod === "credit" && styles.selectedMethod]} 
            onPress={() => setSelectedMethod("credit")}
          >
            <Text style={[styles.paymentText, selectedMethod === "credit" && styles.selectedText]}>
               Credit card
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.paymentButton, selectedMethod === "apple" && styles.selectedMethod]} 
            onPress={() => setSelectedMethod("apple")}
          >
            <Text style={styles.paymentText}> Apple Pay</Text>
          </TouchableOpacity>
        </View>

        {/* Nhập thông tin thẻ */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Card number</Text>
          <View style={styles.cardInput}>
            <TextInput style={styles.input} placeholder="0000 0000 0000 0000" keyboardType="numeric" />
            <Ionicons name="card" size={24} color="gray" />
          </View>
        </View>

        {/* Nhập Cardholder Name */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Cardholder name</Text>
          <View style={styles.cardInput}>
            <TextInput
              style={styles.input}
              placeholder="Your name"
              value={cardholderName}
              onChangeText={setCardholderName}
            />
            <Ionicons name="person-outline" size={24} color="gray" />
          </View>
        </View>

        <View style={styles.row}>
          <View style={[styles.inputContainer, styles.halfInput]}>
            <Text style={styles.label}>Expiry date</Text>
            <TextInput style={styles.input} placeholder="MM / YYYY" keyboardType="numeric" />
          </View>

          <View style={[styles.inputContainer, styles.halfInput]}>
            <Text style={styles.label}>CVV / CVC</Text>
            <View style={styles.cardInput}>
              <TextInput style={styles.input} placeholder="000" keyboardType="numeric" />
              <Ionicons name="help-circle-outline" size={20} color="gray" />
            </View>
          </View>
        </View>

        {/* Ghi chú */}
        <Text style={styles.note}>
          We will send you an order details to your email after the successful payment
        </Text>

        {/* Nút thanh toán */}
        <TouchableOpacity 
          style={styles.payButton} 
          onPress={() => navigation.navigate("PaymentSuccess")} // Chuyển hướng
        >
          <Text style={styles.payText}>Pay for the order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 100, // Khoảng cách từ trên xuống
  },
  backButton: {
    position: "absolute",
    top: 50, // Dịch xuống 20px
    left: 10,
    backgroundColor: "#e8f4e5",
    padding: 10,
    borderRadius: 10,
  },
  checkoutContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40, // Dịch xuống 40px
  },
  checkoutText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  totalAmount: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#22c55e",
    textAlign: "right",
  },
  taxText: {
    fontSize: 14,
    color: "gray",
    textAlign: "right",
  },
  paymentMethods: {
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 6,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  paymentButton: {
    flex: 1,
    paddingVertical: 14,
    alignItems: "center",
    borderRadius: 10,
  },
  selectedMethod: {
    backgroundColor: "#22c55e",
  },
  paymentText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  selectedText: {
    color: "#fff",
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  cardInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  input: {
    flex: 1,
    padding: 14,
    fontSize: 16,
    color: "#000",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfInput: {
    width: "48%",
  },
  note: {
    fontSize: 14,
    textAlign: "center",
    color: "gray",
    marginVertical: 20,
  },
  payButton: {
    backgroundColor: "#22c55e",
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },
  payText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default PaymentScreen;
