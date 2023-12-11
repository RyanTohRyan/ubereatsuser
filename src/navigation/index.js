import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from '../screens/HomeScreen';
import RestaurantDetailsPage from '../screens/RestaurantDetailsScreen';
import DishDetailsScreen from '../screens/DishDetailsScreen';
import Basket from '../screens/Basket';
import OrdersScreen from '../screens/OrdersScreen.js';
import OrderDetails from '../screens/OrderDetails/index.js';
import {Foundation} from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeTabs" component={HomeTabs} />
         
        </Stack.Navigator>
    )
}

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator barStyle={ {backgroundColor : 'white'}}>
            <Tab.Screen name="Home" component={HomeStackNavigator}
             options={{tabBarIcon:
             ({color}) => {<Foundation name="home" size={24} color={color}/>}
             }} />
            <Tab.Screen name="Orders" component={OrdersStackNavigator}
             options={{tabBarIcon:
                ({color}) => {<Foundation name="home" size={24} color={color}/>}
                }}  />
            <Tab.Screen name="Profile" component={OrdersScreen}
             options={{tabBarIcon:
                ({color}) => {<Foundation name="home" size={24} color={color}/>}
                }}  />
        </Tab.Navigator>
    )
}

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator>
        <HomeStack.Screen name="Restaurants" component={HomeScreen} />
        <HomeStack.Screen name="Restaurant" component={RestaurantDetailsPage} />
        <HomeStack.Screen name="Dish" component={DishDetailsScreen} />
        <HomeStack.Screen name="Basket" component={Basket} />
        </HomeStack.Navigator>
    )
}

const OrdersStack = createNativeStackNavigator();

const OrdersStackNavigator = () => {
    return (
        <OrdersStack.Navigator>
        <OrdersStack.Screen name="Orders" component={OrdersScreen} />
        <OrdersStack.Screen name="Order" component={OrderDetails} />

        </OrdersStack.Navigator>
    )
}

export default RootNavigator;