import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';


const Detailpage = ({ route }) => {
    // const { items } = route.params;
    // const [cartItems, setCartItems] = useState([]);

    // useEffect(() => {
    //     const fetchCartItems = async () => {
    //         try {
    //             const storedCartItems = await AsyncStorage.getItem('cartItems');
    //             if (storedCartItems) {
    //             setCartItems(JSON.parse(storedCartItems));
    //             }
    //         } catch (error) {
    //             console.error('Error loading cart items:', error);
    //         }
    //     };

    //     fetchCartItems();
    // }, []);

    return (
        <View>
            <Text>hello</Text>
            {/* <Text>{items.description}</Text>
            <Text>${items.price}</Text> */}
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Platform.OS === "android" ?  35 : 0,
      padding: 15, 
      backgroundColor: '#ffff',
      alignItems: 'center'
    }
});

export default Detailpage;