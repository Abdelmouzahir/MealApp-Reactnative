import { View, Pressable, Text, StyleSheet, Platform } from "react-native";
//import { useNavigation } from "@react-navigation/native";

export default function CategoryGrTile({ title, color, onPress}) {
    //const navigation = useNavigation();

    return (
        <View style={styles.gridItem} >
            <Pressable android_ripple={{color: '#ccc'}} style={({pressed})=> [styles.button, pressed ? styles.buttonpressed : null]} onPress={onPress}>
                <View  style={[styles.inner, {backgroundColor:color}]}>
                    <Text  style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem:{
        flex: 1,
        margin: 16,
        height: 150, 
        borderRadius: 8,
        elevation: 4,
        //ios
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.25,
        backgroundColor: 'white',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    inner:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        borderRadius: 8,
        
    },
    button:{
        flex: 1,
    },
    buttonpressed: {
        opacity: 0.5,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18,
    }

});