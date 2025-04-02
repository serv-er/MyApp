import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../navigation/AuthStack";
import Snackbar from 'react-native-snackbar';

import { FirebaseContext } from '../Firebase/FirebaseContext';
import FirebaseService from '../Firebase/firebaseService'; // Import your service

type Props = {
  navigation: NativeStackNavigationProp<AuthStackParamList, "StoreLogin">;
}

const StoreLoginScreen = ({ navigation }: Props) => {
  const { setIsLoggedIn } = useContext(FirebaseContext);

  const [error, setError] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    if (!email || !password) {
      setError("All fields are required");
    } else {
      try {
        const firebaseService = new FirebaseService();
        const response = await firebaseService.login({ email, password });
        if (response) {
          setIsLoggedIn(true);
          Snackbar.show({
            text: "Logged in Successfully",
            duration: Snackbar.LENGTH_SHORT
          });
          navigation.replace("SellerDashboard");
        }
      } catch (err) {
        setError("Invalid Credentials or User not found");
        Snackbar.show({
          text: String(err),
          duration: Snackbar.LENGTH_LONG
        });
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Log in</Text>

      {error.length > 0 && <Text style={{ color: 'red', marginBottom: 8 }}>{error}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#4f46e5',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  footerText: {
    textAlign: 'center',
    color: '#777777',
    marginTop: 20,
    fontSize: 14,
  },
  linkText: {
    color: '#4f46e5',
    fontWeight: 'bold',
  },
});

export default StoreLoginScreen;
