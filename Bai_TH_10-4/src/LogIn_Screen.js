import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Text, View, Image, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hidePassword, setHidePassword] = useState(true);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <View style={styles.image}>
                    <Image source={require('../assets/Images/Carrot.png')} />
                </View>
                <View style={styles.containerInfo}>
                    <Text style={styles.title}>Loging</Text>
                    <Text style={styles.description}>Enter your email and password</Text>

                    <View style={styles.InputContainer}>
                        <Text style={styles.label}>Email</Text>
                        <View style={styles.emailInputContainer}>
                            <TextInput
                                value={email}
                                placeholder="Enter your email"
                                keyboardType="email-address"
                                onChangeText={setEmail}
                                style={[styles.inputEmail, !validateEmail(email) && email.length > 0 ? styles.inputError : null]}
                            />
                            {validateEmail(email) && (
                                <Icon name="check" size={20} color="green" style={styles.iconCheck} />
                            )}
                        </View>
                    </View>
                    <View style={styles.InputContainer}>
                        <Text style={styles.label}>Password</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                value={password}
                                placeholder="Enter your password"
                                onChangeText={setPassword}
                                secureTextEntry={hidePassword}
                                style={[styles.inputText, password.length > 0 ? styles.inputError : null]}
                            />
                            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                                <Icon name={hidePassword ? "eye-slash" : "eye"} size={20} color="gray" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={styles.forgetPassword}>Forgot password ? </Text>
                    <TouchableOpacity style={styles.loginButton} >
                        <Text style={styles.loginText} onPress={() => { navigation.navigate("ShopScreen") }}>Log In</Text>
                    </TouchableOpacity>
                    <View style={styles.signupContainer}>
                        <Text>Don't have an account? </Text>
                        <TouchableOpacity>
                            <Text style={styles.signupText} onPress={() => { navigation.navigate("Signup") }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 20, 
        justifyContent: "center", 
        backgroundColor: "#fff" 
    },
    image: { 
        alignItems: "center", 
        top: -80 
    },
    containerInfo: { 
        top: 20 
    },
    title: { 
        fontSize: 24, 
        fontWeight: 600, 
        alignItems: "flex-start", 
        marginBottom: 10 
    },
    description: { 
        fontSize: 16, 
        fontWeight: 300, 
        alignItems: "flex-start",
        marginBottom: 20 
    },
    InputContainer: { 
        marginVertical: 20 
    },
    label: { 
        fontSize: 16, 
        color: "gray",
        fontWeight: "bold", 
        textAlign: "left" 
    },
    inputEmail: { 
        color: "black", 
        fontSize: 16, 
    },
    inputText: { 
        flex: 1, 
        alignItems: "center", 
        color: "black", 
        fontSize: 16, 
    },
    passwordContainer: { 
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center", 
        borderBottomColor: "rgba(128, 128, 128, 0.5)", 
        borderBottomWidth: 1 
    },
    emailInputContainer: { 
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center", 
        borderBottomColor: "rgba(128, 128, 128, 0.5)", 
        borderBottomWidth: 1, 
        paddingRight: 10, 
    },
    forgetPassword: { 
        textAlign: "right", 
        color: "green", 
        marginTop: 10 
    },
    loginButton: { 
        backgroundColor: "green", 
        alignItems: "center", 
        padding: 15, 
        marginTop: 20, 
        borderRadius: 15 
    },
    loginText: { 
        color: "white", 
        fontSize: 20, 
        fontWeight: 400 
    },
    signupContainer: { 
        flexDirection: "row", 
        justifyContent: "center", 
        marginTop: 20, 
    },
    signupText: { 
        fontWeight: "400", 
        color: "green" 
    }
})