import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { FirebaseContext } from '../Firebase/FirebaseContext';
import FirebaseService from '../Firebase/firebaseService'
import Snackbar from 'react-native-snackbar';

const CustomDrawerContent = (props: any) => {
  const { firebase, setIsLoggedIn } = useContext(FirebaseContext);

  const handleLogout = () => {
    const firebaseService = new FirebaseService();
    firebaseService.logout().then(() => {
      setIsLoggedIn(false);
      Snackbar.show({
        text: "Logged Out Successfully",
        duration: Snackbar.LENGTH_LONG,
      });
    }).catch((error: any) => {
      Snackbar.show({
        text: String(error),
        duration: Snackbar.LENGTH_LONG,
      });
    });
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View style={styles.drawerContent}>
        <View style={styles.header}>
          <Image source={require('../assets/FirstScreen.png')} style={styles.avatar} />
          <Text style={styles.name}>Welcome Seller</Text>
        </View>

        <DrawerItemList {...props} />

        <View style={styles.footer}>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
    marginBottom: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  logoutButton: {
    backgroundColor: '#F85A3E',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomDrawerContent;
