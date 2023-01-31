import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Register from './../../../assets/register.svg';
import api from './../services/api.js';

export default function Cadastro(){
  const navigation = useNavigation();
    function irParaLogin(){
      navigation.navigate('Login');
    }
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [matricula, setMatricula] = useState('');
    const [senha, setSenha] = useState('');
    const [confirm, setConfirm] = useState('');


    function cadastrar()    {
      var axios = require("axios").default;

      var options = {
        method: 'POST',
        url: 'http://18.206.54.38:3005/cadEstudantes',
        headers: {'Content-Type': 'application/json'},
        data: { nome: nome,sobrenome: sobrenome,numeroMatricula: matricula,senha: senha,senhaConfirm: confirm}
      };
      
      axios.request(options).then(function (response) {
        if (response.data != "Registrado com sucesso!"){
          console.log(response.data);
          alert(response.data);
        }
        else{
            console.log("Registrado com sucesso!");
            alert(response.data);
            //sleep(30);
            irParaLogin();
        }
        //console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    }

    return(
        <View style={styles.container}>
            <Register width={200} height={200}/>
            <TextInput style={styles.input} placeholder='Nome' onChangeText={(text) => setNome(text)}/>
                
            <TextInput style={styles.input} placeholder='Sobrenome' onChangeText={(text) => setSobrenome(text)}/>
                
            <TextInput style={styles.input} placeholder='Matrícula' onChangeText={(text) => setMatricula(text)}/>
             
            <TextInput style={styles.input} placeholder='Senha' onChangeText={(text) => setSenha(text)}/>
                
            <TextInput style={styles.input} placeholder='Confirme a senha' onChangeText={(text) => setConfirm(text)}/>
                
            <TouchableOpacity style={styles.button} onPress={cadastrar}>
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