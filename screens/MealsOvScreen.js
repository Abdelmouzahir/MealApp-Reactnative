import { StyleSheet, FlatList, View } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';


export default function MealsOvScreen({ route, navigation, }) {
    const categoryId = route.params.categoryId;
    const selectedCategory = MEALS.filter((meal) =>{ return meal.categoryIds.indexOf(categoryId) >= 0});
   

    useLayoutEffect(() => {
     const categoryTitle = CATEGORIES.find((cat) => cat.id === categoryId).title;
    
    navigation.setOptions({
        headerTitle: categoryTitle  
    });
     },[categoryId, navigation]);

    function renderMealsItem(itemData) {
        return  <MealItem title={itemData.item.title}
                          imageUrl={itemData.item.imageUrl} 
                          duration={itemData.item.duration}
                          complexity={itemData.item.complexity}
                          affordability={itemData.item.affordability}
                          id={itemData.item.id}
                          />;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={selectedCategory}
                keyExtractor={(item) => item.id}
                renderItem={renderMealsItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFB38E'
    }
});
