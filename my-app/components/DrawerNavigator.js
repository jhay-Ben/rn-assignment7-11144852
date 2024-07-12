import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Homepage from '../pages/homepage'; 
import Checkoutpage from '../pages/checkoutpage'; 
import CustomDrawerContent from './CustomDrawerContent'; 

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
      <Drawer.Navigator 
        drawerContent={(props) => <CustomDrawerContent {...props} />} 
        screenOptions={{ headerShown: false }} 
      >
        <Drawer.Screen name="Home" component={Homepage} />
        <Drawer.Screen name="Store" component={Checkoutpage} />
      </Drawer.Navigator>
  );
};

export default DrawerNavigator;