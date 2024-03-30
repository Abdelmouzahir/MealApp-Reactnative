import MealItem from "./MealItem";
import { FlatList, View, StyleSheet } from 'react-native';

export default function MealsList({items}){

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
                data={items}
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
