import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import "react-native-gesture-handler";




const Homeheader = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>

            <View style={styles.menuContainer}>
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                    <Image source={require('../assets/Menu.png')} style={styles.menu} />
                </TouchableOpacity>
            </View>

            <View style={styles.logoContainer}>
                <Image source={require('../assets/Logo.png')} style={styles.logo} />
            </View>


            <View style={styles.searchshopContainer}>

                <View style={styles.searchContainer}>
                    <TouchableOpacity>
                     <Image source={require('../assets/Search.png')} style={styles.search} />
                    </TouchableOpacity>
                </View>

                <View style={styles.shopContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Checkout')}>
                        <Image source={require('../assets/shoppingBag.png')} style={styles.shoppingbag} />
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25
    },
    logoContainer: {
        marginTop: -5
    },
    searchshopContainer: {
        flexDirection: 'row',
    },
    searchContainer: {
        marginRight: 10
    },
})


export default Homeheader;