import { View, Text, Image, FlatList , StyleSheet} from "react-native"
import {Ionicons} from "@expo/vector-icons"
import restaurants from '../../../assets/data/restaurants.json'
import DishListItem from "../../components/DishListItem";
import Header from "./Header.js"
import styles from "./styles.js";
import { useRoute, useNavigation } from "@react-navigation/native";
const restaurant = restaurants[0];
//(""); 

//1:42
const RestaurantDetailsPage = ( ) => {

    const route = useRoute();
    const navigation = useNavigation();
    const id = route.params?.id;
    console.warn(id)
    return (
        <View style={styles.page}>
        

         
             
            <FlatList  ListHeaderComponent={()=><Header restaurant={restaurant}/>} data={restaurant.dishes} 
            renderItem={({item})=><DishListItem dish={item}/>}
            keyExtractor={(item)=>item.name}
            />
            <Ionicons name="arrow-back-circle"
            onPress={()=> navigation.goBack()}
            size={45} color="white" style={styles.iconContainer}/>
           
        </View>
    )
}



export default RestaurantDetailsPage