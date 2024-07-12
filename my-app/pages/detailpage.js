import React from 'react';
import { View, Text, StyleSheet, Image, Platform, TouchableOpacity } from 'react-native';

const Detailpage = ({ route }) => {
    const { product } = route.params;

    return (
        <View contentContainerStyle={styles.container}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <Text style={styles.description}>{product.description}</Text>

            <View style={styles.shippingInfo}>
        <View style={styles.iconAndText}>
          <Image 
            source={require('../assets/Shipping.png')} 
            style={styles.icon} 
          />
          <Text style={styles.shippingText}>Free Flat Rate Shipping</Text>
        </View>
        <Image 
          source={require('../assets/Up.png')} 
          style={styles.icon} 
        />
      </View>
      <Text style={styles.estimatedDelivery}>
        Estimated to be delivered on{'\n'}
        09/11/2021 - 12/11/2021.
      </Text>

      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.addToBasket}>
        <View style={styles.lll}>
          <Image 
            source={require('../assets/Plus.png')} 
            style={[styles.icon, styles.whiteIcon]} 
          />
          <Text style={styles.addToBasketText}>ADD TO BASKET</Text>
          </View>

          <View style={styles.kkk}>
          <Image 
            source={require('../assets/Heart.png')} 
            style={[styles.icon, styles.whiteIcon]} 
          />
          </View>
        </TouchableOpacity>
      </View>

        </View>
    );
}

const styles = StyleSheet.create({
    contentContainerStyle: {
        marginTop: Platform.OS === "android" ?  50 : 0,
        marginTop: 80,
        padding: 20
    },
    container: {
        padding: 20,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingRight: 20,
        paddingLeft:20
    },
    price: {
        fontSize: 20,
        color: '#FF7043',
        marginBottom: 10,
        paddingRight: 20,
        paddingLeft:20
    },
    description: {
        fontSize: 16,
        color: '#444',
        textAlign: 'justify',
        paddingRight: 20,
        paddingLeft:20
    },
    
      shippingInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10
      },
      iconAndText: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      icon: {
        width: 24,
        height: 24,
      },
      whiteIcon: {
        tintColor: 'white',
      },
      kkk: {
        marginLeft: 180
      },
      shippingText: {
        marginLeft: 8,
        fontSize: 16,
        fontWeight: 'bold',
      },
      estimatedDelivery: {
        marginLeft: 32,
        color: 'gray',
        marginBottom: 16,
      },
      lll: {
          flexDirection: 'row',
      },
      bottomButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 80,
        position: 'relative',
        bottom: -210
      },
      addToBasket: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 12,
        flex: 1,
        marginRight: 8,
      },
      addToBasketText: {
        color: 'white',
        marginLeft: 8,
        fontWeight: 'bold',
      },
      favoriteButton: {
        backgroundColor: 'black',
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: 1,
      },


    
});

export default Detailpage;
