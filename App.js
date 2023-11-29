import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import { StyleSheet, Text, View , FlatList} from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import RestaurantDetailsPage from './src/screens/RestaurantDetailsScreen';
import DishDetailsScreen from './src/screens/DishDetailsScreen';
import Basket from './src/screens/Basket';
import OrdersScreen from './src/screens/OrdersScreen.js';
import OrderDetails from './src/screens/OrderDetails/index.js';

export default function App() {
  return (
    <View style={styles.container}>
{/* <RestaurantDetailsPage/> */}
{/* <HomeScreen />      */}
<OrderDetails/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 10,
    // paddingVertical: 20
  },
 
});
