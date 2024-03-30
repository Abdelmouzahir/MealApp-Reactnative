import { View, Text, StyleSheet } from 'react-native';
import React from 'react';



export default function Subtitle({children}) {
    return (
        <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{children}</Text>
      </View>
    );
}
const styles = StyleSheet.create({
    subtitle:{
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#D04848',
        
    },
    subtitleContainer:{
        padding: 6,
        borderBottomColor: '#D04848',
        borderBottomWidth: 2,
        marginHorizontal: 12,
        marginVertical: 4
    }

    
});