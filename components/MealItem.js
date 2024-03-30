import { View, Text, Pressable, Image, StyleSheet, Platform} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

export default function MealItem({ title, imageUrl, duration , complexity, affordability, id}) {
    const navigation = useNavigation();

    function navigateToDetailScreen() {
        navigation.navigate('DetailScreen' , {mealId :id});
    }

  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{color: "#ccc"}}
       style={({pressed}) =>  pressed ? {opacity: 0.5} : null}
       onPress={navigateToDetailScreen}
      >
      <View  style={styles.innerContainer}>
        <View>
        <Image source={{uri: imageUrl}}   style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails  duration={duration} complexity={complexity}  affordability={affordability}/>
       </View> 
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
    innerContainer:{
        borderRadius: 8,
        overflow: "hidden"
    },
    mealItem:{
        margin:16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation:4,
        //ios
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.25,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        margin:8
    },
    
})  