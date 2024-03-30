import { View, StyleSheet } from 'react-native';
import Subtitle from '../components/Subtitle';
import MealsList from '../components/MealsList';
import { useContext } from 'react';
import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';


export default function FavoriteScreen() {
   const favMealsCtx =  useContext(FavoritesContext);

    const FAVORITE_MEALS = MEALS.filter((meal) => favMealsCtx.ids.includes(meal.id));
    
    if(FAVORITE_MEALS.length === 0 || !FAVORITE_MEALS){
        return <View style={styles.screen}><Subtitle>No favorite meals found.</Subtitle></View>
    }
    return (
        <MealsList items={FAVORITE_MEALS}/>
    );
}
 

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});