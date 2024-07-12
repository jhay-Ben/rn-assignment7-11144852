import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


const Homesubheader = () => {
    return (
        <View style={styles.container}>

            <View style={styles.textContainer}>
                <Text style={styles.text}>O U R   S T O R Y</Text>
            </View>


            <View style={styles.filterlistContainer}>

                <TouchableOpacity>
                    <View style={styles.filterContainer}>
                        <Image source={require('../assets/Filter.png')} style={styles.filter} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.filterContainer}>
                        <Image source={require('../assets/Listview.png')} style={styles.list} />
                    </View>
                </TouchableOpacity>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20
    },
    textContainer: {
        marginLeft: -50
    },
    text: {
        fontFamily: 'serif',
        fontSize: 20,
        fontWeight: '600'
    },
    filterlistContainer: {
        flexDirection: 'row',
        marginRight: -50
    },
    filterContainer: {
        backgroundColor: "#d1d1d1d1",
        height: 40,
        width: 40,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
      },
})


export default Homesubheader;