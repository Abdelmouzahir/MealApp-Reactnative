import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { Button, StyleSheet, Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MealsOvScreen from './screens/MealsOvScreen';
import DetailsScreen from './screens/DetailsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoryScreen from './screens/CategoryScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import {Ionicons} from '@expo/vector-icons';
import FavoritesProvider from './store/context/favorites-context';

const Stack = createStackNavigator();
const drawer = createDrawerNavigator();

function DrawerNavigator(){
  return (
    <drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#f4511e'},
      headerTintColor: '#fff',
      sceneContainerStyle: {backgroundColor: '#FFB38E'},
      drawerContentStyle: {backgroundColor: '#FFB38E'},
      drawerInactiveTintColor: '#D04848',
      drawerActiveTintColor: '#fff',
      drawerActiveBackgroundColor: '#D04848',
      }}>
      <drawer.Screen name="Categories" component={CategoryScreen} 
         options={{title:'All Categories',
                 drawerIcon:({color, size}) => <Ionicons name='list' color={color} size={size} />}} />
      <drawer.Screen name="Favorite" component={FavoriteScreen} options={{
                 drawerIcon:({color, size}) => <Ionicons name='star' color={color} size={size} />}} />
    </drawer.Navigator>
  );
}


export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#f4511e'},
            headerTintColor: '#fff',
            contentStyle: {backgroundColor: '#f4511e'},// not working
            }}>
            <Stack.Screen name="MealsCategories" component={DrawerNavigator} options={{
              headerShown: false
            }}

          />
          <Stack.Screen name="MealsOverView" component={MealsOvScreen} />
          <Stack.Screen name="DetailScreen" component={DetailsScreen}  options={{
            title: 'Meal Details',
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
      </FavoritesProvider>
    </>
  );
}
