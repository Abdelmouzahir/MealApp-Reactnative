import { StyleSheet, FlatList, View } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import MealsList from '../components/MealsList';


export default function MealsOvScreen({ route, navigation, }) {
    const categoryId = route.params.categoryId;
    const selectedCategory = MEALS.filter((meal) =>{ return meal.categoryIds.indexOf(categoryId) >= 0});
   

    useLayoutEffect(() => {
     const categoryTitle = CATEGORIES.find((cat) => cat.id === categoryId).title;
    
    navigation.setOptions({
        headerTitle: categoryTitle  
    });
     },[categoryId, navigation]);

    return <MealsList items={selectedCategory}/>
}

