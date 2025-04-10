import { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from "react-native";
import { CircleArrowLeft, ArrowRight } from "lucide-react-native";

export default function Number( {navigation}) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        
        {/* Nút Back */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <CircleArrowLeft size={40} color="black" />
        </TouchableOpacity>

        {/* Tiêu đề */}
        <Text style={styles.title}>Enter your mobile number</Text>
        <Text style={styles.label}>Mobile Number</Text>

        {/* Ô nhập số điện thoại */}
        <View style={[styles.inputContainer, isFocused && styles.inputFocused]}>
          {/* Cờ Bangladesh */}
          <Image 
            source={{ uri: "https://s3-alpha-sig.figma.com/img/41cc/144b/fb38ac5a94c5de8628b3bed5259fb5f1?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DJkBdNFGX~ZTTw2B72sQBYfIP1QTSQObzmqfy4reEgIdzhaeSY0pmSfkxyHv00QX1D2Ij2qAC4MpAX~jswfP2HUoUmoGSCjI8xEZVemrA3cXS4mSgmfulZrVEaei816qdNrjTab9U5-K8l9EfVLFLTwCAHwh14Cf4KMyPJ3qScoSpLKYHu25AWWV3oz-wdt~-a4jM2ZoWcdpwzPOux50awHO-roKUMQ7SQXAp0XN0dVqU74muBaE3jAnyUKsSA0aY0QE~dT7r1SEFgDaftXKa6HQyvAIyhUfLyGmk3x15GFj06FXovX~tg93uObczaqLKftQT5esn5Z8CvzSXctCDw__" }}
            style={styles.flagIcon}
          />
          {/* Mã quốc gia cố định */}
          <Text style={styles.countryCode}>+880</Text>
          {/* Ô nhập số */}
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            maxLength={10} // Giới hạn số ký tự
            placeholder="Enter number"
            placeholderTextColor="#999"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        {/* Nút chuyển tiếp */}
        {phoneNumber.length > 0 && (
          <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate("Verification")}>
            <ArrowRight size={24} color="white" />
          </TouchableOpacity>
        )}

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: "#F8F9FA",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    paddingTop: 100,
    paddingBottom: 20
  },
  label: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
    paddingBottom: 20
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
  },
  inputFocused: {
    borderColor: "#007AFF",
  },
  flagIcon: {
    width: 24,
    height: 16,
    marginRight: 8,
    borderRadius: 2
  },
  countryCode: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  nextButton: {
    position: "absolute",
    right: 20,
    bottom: 50,
    backgroundColor: "#28A745",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
