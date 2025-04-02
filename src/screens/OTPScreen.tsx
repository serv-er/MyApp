// import React from "react";
// import { View, TextInput, Button, Alert, StyleSheet, Text } from "react-native";
// import { useForm, Controller } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import { verifyOTP } from "../redux/slices/authSlice";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { RootStackParamList } from "../navigation/AppNavigator";

// type OTPScreenProps = NativeStackScreenProps<RootStackParamList, "OTP">;

// const OTPScreen: React.FC<OTPScreenProps> = ({ route, navigation }) => {
//   const { control, handleSubmit } = useForm();
//   const dispatch = useDispatch<any>();
//   const { email } = route.params; // Get email from navigation params

//   const onSubmit = async (data: { otp: string }) => {
//     if (!email) return;
//     const result = await dispatch(verifyOTP({ email, otp: data.otp }));
//     if (verifyOTP.fulfilled.match(result)) {
//       Alert.alert("Success", "OTP Verified Successfully!");
//       navigation.navigate("StoreLogin"); // Navigate to Login page
//     } else {
//       Alert.alert("Error", "Invalid OTP. Please try again.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Enter OTP</Text>
//       <Controller
//         control={control}
//         name="otp"
//         rules={{ required: true }}
//  render={({ field: { onChange, value } }: { field: { onChange: (text: string) => void; value: string } }) => (
//           <TextInput
//             style={styles.input}
//             placeholder="Enter OTP"
//             keyboardType="numeric"
//             onChangeText={onChange}
//             value={value}
//           />
//         )}
//       />
//       <Button title="Verify OTP" onPress={handleSubmit(onSubmit)} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//     backgroundColor: "#fff",
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   input: {
//     width: "100%",
//     height: 40,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//   },
// });

// export default OTPScreen;
