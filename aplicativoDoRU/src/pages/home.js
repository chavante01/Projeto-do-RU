import React, {useState} from 'react';
import { View, Text, ImageBackground, TouchableOpacity , StyleSheet, Image } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';


export default function Home(){ 

        return(
            <View style={styles.container}>
                <LinearGradient colors={['#008000','#70e000']} start={{x:0, y:0}} style={styles.estilodogradiente}>
                    <TouchableOpacity style={{marginTop:'-15%',marginLeft:'2%'}} >
                        <Image source={require('./../../assets/user.jpg')} style={styles.fotodeperfil}/>
                    </TouchableOpacity>
                    <View style={{flexDirection:'column',justifyContent:'center',width:'50%', height:'100%'}}>
                        <Text style={styles.nomedoestudante}>Lucas Chavante</Text>
                        <TouchableOpacity style={styles.botaodepositar}>
                            <Text style={{fontSize:15, color:'#fcfcfc'}}>Comprar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{height:'100%',width:'20%',alignItems:'flex-end'}}>
                        <TouchableOpacity style={styles.botaologout}>
                            <MaterialCommunityIcons name="logout" size={30} color="#fcfcfc"/>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
                <View style={styles.corpo}>
                    <View style={styles.areadosaldo}>
                        <Text style={{fontSize:20, marginTop:'3%'}}>Seu saldo</Text>
                        <View style={{flexDirection:'row',alignItems:'center', marginTop:'5%'}}>
                            <Text style={{fontSize:15,marginRight:'1%'}}>R$</Text>
                            <Text style={{fontSize:50}}>60</Text>
                        </View>    
                    </View>
                    <View style={styles.areadoextratoeinformaçoes}>
                        <TouchableOpacity style={styles.botaoextrato}>
                            <Text style={{marginTop:'4%', fontSize:15}}>Extratos</Text>
                            <View style={{marginTop:'4.5%'}}>
                                <Octicons name="checklist" size={34} color="green" />
                            </View>
                            
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botaoinformaçoes}>
                            <Text style={{marginTop:'4%', fontSize:15}} >Informações</Text>
                            <View>
                                <Ionicons name="ios-information-circle-outline" size={45} color="green"/>
                            </View>
                            
                        </TouchableOpacity>
                    </View>
                </View>
                
                
               
                
            </View>
        );
} 


const styles = StyleSheet.create({
    container:{
        flex:1,   
    },
    estilodogradiente:{
        height:"30%",
        width:'100%',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        flexDirection:'row',
        alignItems:'center',
        
    },
    fotodeperfil:{
        height:85,
        width:85,
        borderRadius:85/2,

    },
    nomedoestudante:{
        marginTop:'-25%',
        marginLeft:'4%',
        fontSize:25,
        fontWeight:'bold',
        color:'#fcfcfc'
    },
    botaodepositar:{
        width:'50%',
        height:'10%',
        marginLeft:'4%',
        alignItems:'center',
        borderRadius:5,
        backgroundColor:'#0d47a1'
    },
    botaologout:{
        marginTop:'35%'
    },
    corpo:{
        height:'50%',
        width:'100%',
        flexDirection:'column',
        alignItems:'center',
        
        
    },
    areadosaldo:{
        flexDirection:'column',
        alignItems:'center',
        marginTop:'-10%',
        width:'85%',
        height:'40%',
        borderRadius:15,
        backgroundColor:'#fffafb',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 18,
    },
    areadoextratoeinformaçoes:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:'7%'
    },
    botaoextrato:{
        alignItems:'center',
        width:'39.2%',
        height:'24%',
        borderRadius:15,
        backgroundColor:'#fffafb',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 18,

    },
    botaoinformaçoes:{
        alignItems:'center',
        width:'39.2%',
        height:'24%',
        borderRadius:15,
        backgroundColor:'#fffafb',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 18,
    },
    

});