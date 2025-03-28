import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Carrot } from 'lucide-react-native';

export default function OnBoarding({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Hình ảnh nền */}
      <Image 
        source={require("../assets/Images/background_1.png")} 
        style={styles.productImage}
      />

      {/* Nội dung chính */}
      <View style={styles.content}>
        <Carrot size={70} color="white" />
        <Text style={styles.textmain}>Welcome</Text>
        <Text style={styles.textmain}>to our store</Text>
        <Text style={styles.text}>Get our groceries as fast as one hour</Text>

        {/* Nút Get Started */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Loginup")}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#53B175"
  },
  productImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Hiệu ứng mờ
    padding: 20,
    borderRadius: 15,
  },
  textmain: {
    color: "white",
    fontSize: 30, 
    fontWeight: "bold",
    marginTop: 5,
  },
  text: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#ffcc00",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginTop: 15,
  },
  buttonText: {
    fontSize: 18,
    color: "#333",
    fontWeight: "bold",
  },
});