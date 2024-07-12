import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';


const Checkoutheader = () => {
    return (
        <View style={styles.container}>

            <View style={styles.menuContainer}>
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


export default Checkoutheader;