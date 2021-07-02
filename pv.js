import React, { useState } from "react";
import { Image, View,ImageBackground, ScrollView,   FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Linking } from "react-native";
 


export default function pv(props) {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={require('./assets/img/bg-pv.png')} style={styles.img}>
      
      <SafeAreaView style={styles.container}>
    
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/drive/u/1/folders/1xCHX4EfgfQWLWf2_Ju62cMe4papEcaf5")}>
          
          Material de projeto de vida
               
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
    fontSize: 40,
    marginTop: 145,
    color: "white",

  },
  scrollView:{
    marginBottom:120,
  },


});
