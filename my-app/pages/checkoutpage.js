import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import Checkoutheader from '../components/checkoutheader';
import CheckoutSubheader from '../components/checkoutsubheader';
import CheckoutButton from '../components/checkoutbutton';
import Checkoutcards from '../components/checkoutcards';

export default function Checkoutpage() {
    return (
        <View style={styles.container}>
           <Checkoutheader />
           <CheckoutSubheader />
           <Checkoutcards />
           <CheckoutButton />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ffff',
      flex: 1,
      marginTop: Platform.OS === "android" ?  35 : 0,
      padding: 15,
    },
  });