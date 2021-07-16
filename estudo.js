import React, { useState } from "react";
import { Image, View,ImageBackground, ScrollView,   FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Linking } from "react-native";
 


export default function estudo(props) {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={require('./assets/img/bg-estudo.png')} style={styles.img}>
      
      <SafeAreaView style={styles.container}>
    
      <ScrollView style={styles.scrollView}>
      <Text style={styles.text} >
          
      Estudo Orientado integra a Parte Diversificada do Currículo
dentro das inovações em conteúdo, método e gestão.O objetivo desse
componente é “ensinar” o estudante a estudar, apoiá-lo e orientá-lo em
seu estudo diário, por meio da utilização de técnicas de estudo que o
auxiliarão em seu processo de aprendizagem. Além de assegurar o
espaço adequado para o estudar, o Estudo Orientado visa à excelência
acadêmica e à consecução do Projeto de Vida do estudante.
      
      </Text>
       
      </ScrollView>
    </SafeAreaView>
    <TouchableOpacity style ={styles.button} onPress={()=> Linking.openURL("https://drive.google.com/drive/u/1/folders/1I4MuksbXRagw1xGenYIMeUBKrDGwLuN5") }>
          <Image  source={require('./assets/img/drive.png')}  />
        </TouchableOpacity> 
    
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
    textAlign:"justify",
    fontSize: 20,
    marginLeft:10,
    marginRight:15,
    marginBottom:10,
    color: "white",

  

  },
  scrollView:{
    marginTop:170,
    marginBottom:10,
  },


});
