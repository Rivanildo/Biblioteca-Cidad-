import React, { useState } from "react";
import { Image, View,ImageBackground, ScrollView,   FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Linking } from "react-native";
 


export default function trabalhosictcc(props) {
  return (
<View style={styles.container}>
      
      <ImageBackground source={require('../assets/img/bg-biblioteca.png')} style={styles.img}>
      <Image  source={require('../assets/sessoes/destaque8.png')} style={styles.img2} />
      
      <SafeAreaView style={styles.container}>
    
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1sWv1vm6yhi5NDQpzaIqOv-G2f2GoptL7/view?usp=sharing")}>
        Destaques Intervenção Comunitária 2021

        </Text>

         <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1AmRZW2fxNypnHq3Jts4B6uPKu2A46gsZ/view?usp=sharing")}>
        Destaques TCC 2021

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
  img2:{
    marginTop:60,
    
  },

  

  
  text: {
    marginLeft:10,
    fontSize: 20,
    marginTop: 20,
    color: "white",

  },
  scrollView:{
    marginTop:50,
    marginBottom:120,
  },


});
