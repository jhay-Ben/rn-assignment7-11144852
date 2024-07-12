import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CheckoutSubheader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>C H E C K O U T</Text>
      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <View style={styles.diamond} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 2,
  },
  text: {
    fontFamily: 'serif',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 5,
    marginRight: 3
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width:130,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'lightgray',
  },
  diamond: {
    width: 10,
    height: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    transform: [{ rotate: '45deg' }],
    backgroundColor: 'white',
    position: 'relative',
    right: 62
  },
});

export default CheckoutSubheader;