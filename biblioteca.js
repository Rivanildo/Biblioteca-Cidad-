import React, { useState } from "react";
import { Image, View,ImageBackground, ScrollView,   FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Linking } from "react-native";
 


export default function Home(props) {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={require('./assets/img/bg-biblioteca.png')} style={styles.img}>
      <Image  source={require('./assets/img/BIBLIOTECA.png')} style={styles.img2} />
      <SafeAreaView style={styles.container}>
    
      <ScrollView style={styles.scrollView}>

      
       
      </ScrollView>
    </SafeAreaView>
    
      </ImageBackground>


    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
   
  },


  img:{
    flex: 1,
    alignItems: "baseline",
    
  },

  img2:{
    marginLeft: 35,
    
  },

  
  text: {
    fontSize: 40,
    marginTop: 20,
    color: "white",

  },

  textAlfabeto: {
    fontSize: 40,
    marginTop: 20,
    color: "white",

  },
  scrollView:{
    marginBottom:120,
    marginLeft:20,
  },


});
