import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Carrot, Facebook, Mail } from 'lucide-react-native';

export default function Loginup( {navigation } ) {
  return (
    <View style={styles.container}>
      {/* Phần hình ảnh chiếm 40% màn hình */}
      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/Images/Background_2.png')} style={styles.image} 
        />
      </View>

      {/* Phần nội dung chiếm 60% màn hình */}
      <View style={styles.contentContainer} >
        <Text style={styles.textmain}>Get your groceries with nectar</Text>
        <TouchableOpacity style={styles.inputContainer} onPress={() => navigation.navigate("Number")}>
          <Image 
            source={{ uri: "https://s3-alpha-sig.figma.com/img/41cc/144b/fb38ac5a94c5de8628b3bed5259fb5f1?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DJkBdNFGX~ZTTw2B72sQBYfIP1QTSQObzmqfy4reEgIdzhaeSY0pmSfkxyHv00QX1D2Ij2qAC4MpAX~jswfP2HUoUmoGSCjI8xEZVemrA3cXS4mSgmfulZrVEaei816qdNrjTab9U5-K8l9EfVLFLTwCAHwh14Cf4KMyPJ3qScoSpLKYHu25AWWV3oz-wdt~-a4jM2ZoWcdpwzPOux50awHO-roKUMQ7SQXAp0XN0dVqU74muBaE3jAnyUKsSA0aY0QE~dT7r1SEFgDaftXKa6HQyvAIyhUfLyGmk3x15GFj06FXovX~tg93uObczaqLKftQT5esn5Z8CvzSXctCDw__" }}
            style={styles.flagIcon}
          />
          <TextInput style={styles.textInput} placeholder="+088" />
        </TouchableOpacity>


        <Text style={styles.text}>Or connect with social media</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate("Number")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>


        <View style={styles.socialContainer}>
          <View style={styles.socialButton}>
            <Mail size={30} color="white" paddingHorizontal="20"/>
            <Text style={{ color: "#FCFCFC" }}>Continue with Google</Text>
          </View>
          <View style={styles.socialButton1}>
            <Facebook size={30} color="white"/>
            <Text style={{ color: "#FCFCFC" }}>Continue with Facebook</Text>
          </View>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2", // Màu nền nhẹ nhàng hơn
  },
  imageContainer: {
    flex: 0.4, 
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  contentContainer: {
    flex: 0.6, 
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  textmain: {
    color: "#333",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  text: {
    color: "#828282",
    fontSize: 16,
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginTop: 15,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  flagIcon: {
    width: 40,
    height: 28,
    marginRight: 10,
    borderRadius: 4,
  },
  textInput: {
    fontSize: 18,
    color: "#333",
    flex: 1,
  },
  button: {
    backgroundColor: "#53B175",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 20,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
  socialContainer: {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    paddingVertical: 14,
    borderRadius: 15,
    marginVertical: 8,
    backgroundColor: "#5383EC",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  socialButton1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    paddingVertical: 14,
    borderRadius: 15,
    marginVertical: 8,
    backgroundColor: "#4A66AC",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  socialButtonText: {
    fontSize: 16,
    color: "#FCFCFC",
    fontWeight: "600",
    marginLeft: 10,
  },
});
