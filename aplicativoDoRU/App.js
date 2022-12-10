import React, { useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Home from './src/pages/home';

export default function App(){
  return(
    <View style={styles.container}>
      <Home/>
    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }

});