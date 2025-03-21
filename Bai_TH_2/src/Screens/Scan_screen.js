import React from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ScanScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../assets/icons/orange_juice.png")} style={styles.image}>
        {/* Nút Back */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Home")}>
          <Ionicons name="chevron-back" size={28} color="black" />
        </TouchableOpacity>

        {/* Thông tin sản phẩm */}
        <View style={styles.overlay}>
          <Text style={styles.label}>Lauren’s Orange Juice</Text>
          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "flex-end", 
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

  overlay: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 15,
    margin: 20,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 100,
    alignSelf: "center"
  },
  label: { fontSize: 18, marginRight: 10, alignSelf: "center" },
  addButton: { backgroundColor: "#6B7FDB", padding: 10, borderRadius: 10 },
});

export default ScanScreen;
