import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Text, View, Image, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Signup({ navigation }) {
    const [username, setUsername] = useState("");
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
                    <Text style={styles.title}>Sign Up</Text>
                    <Text style={styles.description}>Enter your credentials to continue</Text>

                    <View style={styles.InputContainer}>
                        <Text style={styles.label}>Username</Text>
                        <TextInput
                            value={username}
                            placeholder="Enter your username"
                            onChangeText={setUsername}
                            style={styles.inputUsername}
                        />
                    </View>

                    <View style={styles.InputContainer}>
                        <Text style={styles.label}>Email</Text>
                        <View style={styles.emailContainer}>
                            <TextInput
                                value={email}
                                placeholder="Enter your email"
                                keyboardType="email-address"
                                onChangeText={setEmail}
                                style={[styles.inputEmail, !validateEmail(email) && email.length > 0 ? styles.inputError : null]}
                            />
                            {validateEmail(email) && email.length > 0 && (
                                <Icon name="check" size={20} color="green" />
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
                    <View style={styles.termsContainer}>
                        <Text style={styles.termsText}>By continuing you agree  to our </Text>
                        <TouchableOpacity>
                            <Text style={styles.termsLink}>Terms of Service </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.termsContainer}>
                        <Text style={styles.termsText}>and </Text>
                        <TouchableOpacity>
                            <Text style={styles.termsLink}>Privacy Policy.</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginText}>Sign up</Text>
                    </TouchableOpacity>
                    <View style={styles.signupContainer}>
                        <Text>Already have an account?  </Text>
                        <TouchableOpacity>
                            <Text style={styles.signupText} onPress={() => { navigation.navigate("Login") }}>Login</Text>
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
        top: -20 
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
        fontWeight: "bold", 
        color: "gray", 
        textAlign: "left" 
    },
    inputUsername: { 
        borderBottomColor: "rgba(128, 128, 128, 0.5)", 
        borderBottomWidth: 1, 
        color: "black", 
        fontSize: 16, 
    },
    emailContainer: { 
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center", 
        borderBottomColor: "rgba(128, 128, 128, 0.5)", 
        borderBottomWidth: 1 
    },
    inputEmail: { 
        color: "black", 
        fontSize: 16
    },
    inputText: { 
        flex: 1, 
        alignItems: "center", 
        borderBottomColor: "rgba(128, 128, 128, 0.5)", 
        borderBottomWidth: 1, 
        color: "black", 
        fontSize: 16 
    },
    passwordContainer: { 
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center", 
    },
    termsContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    termsText: {
        fontSize: 14,
        color: "gray"
    },
    termsLink: {
        fontSize: 14,
        color: "green",
        fontWeight: "bold"
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
        marginTop: 20 
    },
    signupText: { 
        fontWeight: "400", 
        color: "green" 
    }
})