import React, { useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Login from './src/login';

export default function App(){
  return(
    <View style={styles.container}>
      <Login/>
    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }

});