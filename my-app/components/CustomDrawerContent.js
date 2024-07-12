import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()} style={styles.closeIconContainer}>
          <Image source={require('../assets/Close.png')} style={styles.closeIcon} />
        </TouchableOpacity>
        <View style={styles.drawerNamebox}>
        <Text style={styles.drawerName}>Eric Atsu</Text>
        </View>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={styles.drawerItem}>
          <Text style={styles.drawerItemText}>Store</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Locations')} style={styles.drawerItem}>
          <Text style={styles.drawerItemText}>Locations</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Blog')} style={styles.drawerItem}>
          <Text style={styles.drawerItemText}>Blog</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Jewellery')} style={styles.drawerItem}>
          <Text style={styles.drawerItemText}>Jewellery</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Electronics')} style={styles.drawerItem}>
          <Text style={styles.drawerItemText}>Electronics</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Clothing')} style={styles.drawerItem}>
          <Text style={styles.drawerItemText}>Clothing</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  closeIconContainer: {
    padding: 10,
    position: 'relative',
    top: -20
  },
  closeIcon: {
    width: 24,
    height: 24,
  },
  drawerNamebox: {
    flex: 1,
    marginBottom: -50,
    marginLeft: -30
  },
  drawerName: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  drawerItem: {
    marginBottom: 40,
  },
  drawerItemText: {
    fontSize: 18,
  },
});

export default CustomDrawerContent;
