import React, { useState } from "react";
import { Image, View,ImageBackground, ScrollView,   FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Linking } from "react-native";
 


export default function estudo(props) {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={require('./assets/img/bg-estudo.png')} style={styles.img}>
      
      <SafeAreaView style={styles.container}>
    
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text} onPress={() => Linking.openURL("https://www.google.com/")}>
          
          
               
        </Text>
       
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
    alignItems: "center",
    
  },

  
  text: {
    fontSize: 80,
    marginTop: 40,
    color: "white",

  },
  scrollView:{
    marginBottom:120,
  },


});
