import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGrTile from '../components/CategoryGrTile';

export default function CategoryScreen({navigation}) {
    
    function renderCatItem(itemData) {
        function pressHandler() {  navigation.navigate('Meals OverView',{
            categoryId: itemData.item.id,
            title: itemData.item.title,
          
        }); }   
        return <CategoryGrTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />;
      }
    
    return (
        <FlatList
          data={CATEGORIES}
          keyExtractor={(item) => item.id}  // keyExtractor is a function that extracts a unique key for a given item.
          renderItem={renderCatItem}
          numColumns={2}
        />
    );
    }