import { StyleSheet, FlatList, View } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';


export default function MealsOvScreen({ route}) {
    const categoryId = route.params.categoryId;
    const selectedCategory = MEALS.filter((meal) =>{ return meal.categoryIds.indexOf(categoryId) >= 0});

    function renderMealsItem(itemData) {
        return  <MealItem title={itemData.item.title}
                          imageUrl={itemData.item.imageUrl} 
                          duration={itemData.item.duration}
                          complexity={itemData.item.complexity}
                          affordability={itemData.item.affordability}
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
    }
});
