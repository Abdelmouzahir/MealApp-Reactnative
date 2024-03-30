import { View, Text, StyleSheet , Image, ScrollView, Button} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/Subtitle";
import List from "../components/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

export default function DetailsScreen({route, navigation}) {
     
    function headerButton() {
      console.log('Fav button pressed');
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon='star'  color='white' onPress={headerButton} />
            }
        });
    }, [navigation, headerButton]);

    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);  // find the meal with the given id
    return (
        <View style={styles.container}>
        <ScrollView  style={styles.containerScroll}>
            <Image  style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails 
            duration={selectedMeal.duration} 
            complexity={selectedMeal.complexity} 
            affordability={selectedMeal.affordability}
            textStyle={styles.text} />
            <View style={styles.listOuter}>
             <View style={styles.listC}>
              <Subtitle>Ingredients</Subtitle>
              <List data={selectedMeal.ingredients} />
              <Subtitle>Steps</Subtitle>
              <List data={selectedMeal.steps} />
             </View>
            </View>
        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFB38E',
       
    },
    containerScroll:{
        marginBottom: 32
    },
    
    image:{
            width: '100%',
            height: 350
    },
    title:{
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        margin:8,
        color: 'white'
    },
    text:{
        color: '#D04848'
    },
    listC :{
        width: '80%'
    },
    listOuter:{
       alignItems: 'center'
    }
    

    
});