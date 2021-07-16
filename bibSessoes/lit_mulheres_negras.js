import React, { useState } from "react";
import { Image, View,ImageBackground, ScrollView,   FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Linking } from "react-native";
 


export default function lit_mulheres_negras(props) {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={require('../assets/img/bg-biblioteca.png')} style={styles.img}>
      <Image  source={require('../assets/sessoes/lit_mulheres_negras.png')} style={styles.img2} />
      
      <SafeAreaView style={styles.container}>
    
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text} onPress={() => Linking.openURL("http://www.letras.ufmg.br/literafro/")}>
        Literatura Escrita por Mulheres Negras
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
