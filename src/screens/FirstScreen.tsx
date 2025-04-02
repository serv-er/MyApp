import React from "react";
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity,ImageBackground, Image  } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from '../navigation/AuthStack';

type Props = {
  navigation: NativeStackNavigationProp<AuthStackParamList, "First">;
};

 function FirstScreen({ navigation }: Props) {
  return (
    <ImageBackground
    // source={require("../assets/FirstScreen.png")} // Adjust the path to your image
    style={styles.background}
  >
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image source={require("../assets/FirstScreen.png")} style={styles.image}/>
      <Text style={styles.caption}>
         WELCOME TO THE{"\n"}  <Text style={styles.highlight}>‘LOGO’</Text> 
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("RoleSelection")}
        >
          <Text style={styles.buttonText}>Let's Go</Text>
        </TouchableOpacity>
        <Text>Terms and Conditions | Privacy Policies</Text>
      </View>
    </SafeAreaView>
  </ImageBackground>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Takes full screen height
    justifyContent: "center", // Centers content vertically
  },
  caption: {
   
    fontSize: 30,
    fontWeight: "bold",
    color: "#F85A3E",
    textAlign: "center",
    marginBottom: 40, 
    fontFamily: "Roboto"// Adds spacing above the button
  },
  container: {
    flex: 1, // Takes full screen height
    justifyContent: "flex-end", // Moves content to the bottom
    alignItems: "center",
    paddingBottom: 80, // Adds spacing from the bottom
  },
  highlight: {
    color: "orange", // Highlight the word "Start"
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor:"#FFFFFF",
    paddingHorizontal:10,
  },
  button: {
    width:"90%",
    backgroundColor: "#F85A3E",
    paddingVertical: 10,
    alignItems:"center",
    borderRadius: 10,
    marginTop: 10,
    marginBottom:30, // Adds spacing from the text
  },
  buttonText: {
    color: "white",
    fontSize: 25,
    fontWeight:"bold",
  },
  image:{
    width: "95%", // Adjust the width of the image to make it smaller
    height: undefined, // Let the height adjust proportionally
    aspectRatio: 1, // Maintains aspect ratio
    marginHorizontal: 20, // Adds spacing from left and right
    marginBottom: 100,
  }
});

export default FirstScreen