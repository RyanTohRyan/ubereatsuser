import {View, Text, StyleSheet, FlatList} from 'react-native'
import {AntDesign} from '@expo/vector-icons';
import { useState } from 'react';

import restaurants from '../../../assets/data/restaurants.json'
const restaurant = restaurants[0];

const BasketDishItem = ({basketDish}) => {
    return (
        <View style={styles.row}>
        <View style={styles.quantityContainer}>
            <Text>1</Text>
        </View>
        <Text style={{fontWeight: "600"}}>{basketDish.name}</Text>
        <Text style={{marginLeft: 'auto'}}>$ {basketDish.price}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: "100%",
        paddingVertical: 30,
        padding: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: "600",
        marginVertical: 10,
    },
    description:{
        color: "gray",
    },
    separator: {
        height: 1,
        backgroundColor: "lightgrey",
        marginVertical: 10
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        
        marginVertical: 15,
    },
    quantity: {
        fontSize: 25,
       // fontWeight: 'bold',
        marginHorizontal: 20,
    },
    button: {
        backgroundColor: 'black',
        marginTop: 'auto',
        padding: 20,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: "600"
    },
    quantityContainer: {
        backgroundColor: 'lightgray',
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginRight: 10,
        borderRadius: 3,

    }

})

export default BasketDishItem