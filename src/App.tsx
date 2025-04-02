import React, { useEffect } from "react";
import { StatusBar, StyleSheet } from "react-native";
import SplashScreen from 'react-native-splash-screen';
// import { Provider } from 'react-redux';
import AppWriteProvider from './appwrite/AppWriteContext';
import FirebaseProvider from './Firebase/FirebaseContext';
import { Router } from './navigation/Router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide(); // Hide splash screen after 2 seconds
    }, 2000);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <FirebaseProvider>
        <Router />
      </FirebaseProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 150,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
  },
  button: {
    backgroundColor: "orange",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default App;
