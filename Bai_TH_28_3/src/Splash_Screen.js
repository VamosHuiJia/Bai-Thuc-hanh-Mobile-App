import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Carrot } from 'lucide-react-native';
import React, { useEffect } from "react";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("OnBoarding");
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Carrot size={70} color="white" />
        <View>
          <Text style={styles.textmain}>Nguyen Gia Huy</Text>
          <Text style={styles.text}>Online Groceries</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#53B175',
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%",
    width: "100%"
  },
  content: {
    flexDirection: "row", 
    alignItems: "center", 
  },
  textmain: {
    color: "white",
    fontSize: 30, 
    fontWeight: "bold",
  },
  text: {
    color: "white",
    fontSize: 18, 
  }
});