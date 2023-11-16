import { Image } from 'react-native';
import { StyleSheet, FlatList, View} from 'react-native';
import RestaruantItem from '../../components/RestaurantItem';
import restaurants from '../../../assets/data/restaurants.json'


export default function HomeScreen() {
  return (
<View style={styles.page}>
    <FlatList data={restaurants} renderItem={({item})=> <RestaruantItem restaurant={item}/>} />
    </View>
  );
}

const styles = StyleSheet.create({
 page: {
    padding: 10,
 }
 
});
