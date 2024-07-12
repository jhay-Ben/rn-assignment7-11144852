import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import Homeheader from '../components/homeheader';
import Homesubheader from '../components/homesubheader';
import Homecards from '../components/homecards';


export default function Homepage() {
    return (
        <View style={styles.container}>
            <Homeheader />
            <Homesubheader />
            <Homecards />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Platform.OS === "android" ?  35 : 0,
      padding: 15, 
      backgroundColor: '#ffff',
    }
});