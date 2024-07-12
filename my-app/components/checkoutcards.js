import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Checkoutcards = () => {
  
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const storedCartItems = await AsyncStorage.getItem('cartItems');
                if (storedCartItems) {
                setCartItems(JSON.parse(storedCartItems));
                }
            } catch (error) {
                console.error('Error loading cart items:', error);
            }
        };

        fetchCartItems();
    }, []);

    const removeFromCart = async (product) => {
        const updatedCartItems = cartItems.filter(item => item.id !== product.id);
        setCartItems(updatedCartItems);
        await AsyncStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <View>
            <Image source={{uri: item.image}} style={styles.image} />
            <TouchableOpacity onPress={() => removeFromCart(item)}>
                <Image source={require('../assets/remove.png')} style={styles.add} />
            </TouchableOpacity>
            </View>

            <View style={styles.text}>
            <Text style={styles.title}>{item.category}</Text>
            <Text style={styles.subtitle}>{item.title}</Text>
            <Text style={styles.amount}>{item.price}</Text>
            </View>
        </View>
    );

  return (
    <View style={styles.container}>
      <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={1}
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: '#fff',
  },
  card: {
    flexDirection: "row"
  },
  text: {
    paddingTop: 20,
    marginLeft: 10,
  },
  image: {
    width: 100,
    height: 120,
    marginBottom: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  add: {
    position: "relative",
    bottom: 30,
    left: 280, 
  },
  title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
  },
  subtitle: {
      fontSize: 14,
      color: '#888',
      marginBottom: 5,
  },
  amount: {
      fontSize: 14,
      color: '#FF7043',
  },
});

export default Checkoutcards;