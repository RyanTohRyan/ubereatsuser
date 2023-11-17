import {View, Text, StyleSheet, Image} from 'react-native';

const DishListItem = ({dish}) => {

    return (
        // flex 1 for view in case description too long
        <View style={styles.container}>
            <View style={{flex: 1}}>
            <Text style={styles.name}>{dish.name}</Text>
            <Text style={styles.description} numberOfLines={2}>{dish.description}</Text>
            <Text style={styles.price}>$ {dish.price}</Text>
            </View>
           {dish.image && ( <Image source={{uri: dish.image}} style={styles.image}/>)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,
        marginVertical: 10,
        marginHorizontal: 20,
        flexDirection: "row",
    },
    image: {
        height: 100,
        aspectRatio: 1,
    },
    name: {
        fontWeight: "600",
        fontSize: 16,
        letterSpacing: 0.5
    },
    description: {
        color: "gray",
        marginVertical: 5,
    },
    price: {
        fontSize: 16
    }
});

export default DishListItem;