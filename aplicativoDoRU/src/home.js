import React from 'react';
import { View, Text, Image, TouchableOpacity , StyleSheet} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';



export default function Home(){
       
        return(
            <View style={styles.container}>
                <LinearGradient colors={['#70e000','#008000']} style={{width:'100%', height:'40%'}}>

                </LinearGradient>
            </View>
        );
} 


const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    

});