import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const CheckoutButton = () => {
  return (
    <View style={styles.container}>

      <View style={styles.textContainer}>

        <View>
        <Text style={styles.estTotalText}>EST. TOTAL</Text>
        </View>

        <View>
        <Text style={styles.totalAmount}>$240</Text>
        </View>

      </View>

      <View style={styles.checkout}>

        <TouchableOpacity style={styles.checkoutButton}>
          <Image source={(require('../assets/shop.png'))} />
          <Text style={styles.checkoutText}>CHECKOUT</Text>
        </TouchableOpacity>
        
      </View>
      
  </View>
);
};

const styles = StyleSheet.create({
container: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'white',
  borderColor: '#fff',
},
textContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 10
},
estTotalText: {
  fontSize: 18,
},
totalAmount: {
  fontSize: 24,
  color: '#FF7043',
},
checkout: {
  backgroundColor: 'black',
  alignItems: 'center',
},
checkoutButton: {
  flexDirection: "row",
  alignItems: 'center',
},
checkoutText: {
  color: 'white',
  fontSize: 18,
  height: 50,
  marginLeft: 20,
  marginTop: 22,
},
});

export default CheckoutButton;
