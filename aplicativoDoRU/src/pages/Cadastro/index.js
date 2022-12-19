import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Register from './../../../assets/register.svg';

export default function Cadastro(){
    return(
        <View style={styles.container}>
            <Register width={200} height={200}/>
            <TextInput style={styles.input} placeholder='Nome'>
                <Text></Text>
            </TextInput>
            <TextInput style={styles.input} placeholder='Sobrenome'>
                <Text></Text>
            </TextInput>
            <TextInput style={styles.input} placeholder='Número de matrícula'>
                <Text></Text>
            </TextInput>
            <TextInput style={styles.input} placeholder='Senha'>
                <Text></Text>
            </TextInput>
            <TextInput style={styles.input} placeholder='Confirme a senha'>
                <Text></Text>
            </TextInput>
            <TouchableOpacity style={styles.button}>
                <Text style={{color:'#000'}}> Criar Conta</Text>
            </TouchableOpacity>
        </View>


    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    input:{
        width:'90%',
        height:50,
        borderWidth:1,
        borderRadius:18,
        marginTop:10,
        padding:10,
        fontSize:15,
    },
    button:{
        alignItems:'center',
        justifyContent:'center',
        width:'60%',
        height:50,
        borderRadius:18,
        marginTop:20,
        padding:10,
        fontSize:15,
        backgroundColor:'#51ad72',
    }

})