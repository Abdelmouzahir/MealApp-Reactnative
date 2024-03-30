import { View, StyleSheet } from 'react-native';
import Subtitle from '../components/Subtitle';


export default function FavoriteScreen() {
    return (
        <View style={styles.screen}>
            <Subtitle>Favorite Meals</Subtitle>
            
        </View>
    );
}
 

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});