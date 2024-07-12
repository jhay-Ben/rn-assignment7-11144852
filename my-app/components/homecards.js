import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


const addToCart = async (product) => {
    try {
        const cartItems = await AsyncStorage.getItem('cartItems');
        if(cartItems == null){
            await AsyncStorage.setItem('cartItems', JSON.stringify([product]));
        } else {
            let arrayItem = JSON.parse(cartItems);
            if (!Array.isArray(arrayItem)) {
                arrayItem = [arrayItem];
            }

            const itemFound = arrayItem.some(item => item.id === product.id);
            if (!itemFound) {
                arrayItem.push(product);
                await AsyncStorage.setItem('cartItems', JSON.stringify(arrayItem));
            } else {
                console.log("Product already exists. No need to save it again");
            }
        }
    } catch (e) {
        console.error('Error adding to cart:', e);
        }
    };

const Homecards = () => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    useEffect(
        () => {
            getProducts();
        }, []
    );

    const getProducts = async () => {
        try {
            const URL = "https://fakestoreapi.com/products";

           await fetch(URL)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setProducts(data);
            })
        } catch (error) {
            console.log("Error fetching products:", error);
        }
    }


    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
            <Image source={{uri: item.image}} style={styles.image} />
            <TouchableOpacity onPress={() => addToCart(item)}>
                <Image source={require('../assets/add_circle.png')} style={styles.add} />
            </TouchableOpacity>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.category}</Text>
            <Text style={styles.amount}>${ item.price}</Text>
            </TouchableOpacity>
        </View>
    );

    const navigation = useNavigation();

    return (
        <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
    },
    card: {
        width: '48%',
        marginBottom: 10,
        backgroundColor: '#fff',
        padding: 10,
        elevation: 2,
        margin: 10
    },
    image: {
        width: 150,
        height: 200,
        marginBottom: 10,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    add: {
        marginTop: -40,
        marginLeft: 120,
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

export default Homecards;
