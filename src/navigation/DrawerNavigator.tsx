import 'react-native-gesture-handler';

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SellerDashboard from '../screens/SellerDashboard';
import CustomDrawerContent from '../screens/CustomDrawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        drawerStyle: {
          backgroundColor: '#fff', 
          width: 260,
        },
      }}
    >
      <Drawer.Screen name="SellerDashboard" component={SellerDashboard} />
      {/* Add more screens here if needed */}
    </Drawer.Navigator>
  );
}
