import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import { StyleSheet, Text, View , FlatList} from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import RestaurantDetailsPage from './src/screens/RestaurantDetailsScreen';

export default function App() {
  return (
    <View style={styles.container}>
<RestaurantDetailsPage/>
{/* <HomeScreen />      */}
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
