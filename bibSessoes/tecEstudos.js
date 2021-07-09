import React, { useState } from "react";
import { Image, View,ImageBackground, ScrollView,   FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Linking } from "react-native";
 


export default function TecEstudos(props) {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={require('../assets/img/bg-biblioteca.png')} style={styles.img}>
      <Image  source={require('../assets/sessoes/te_estudos.png')} style={styles.img2} />
      
      <SafeAreaView style={styles.container}>
    
      <ScrollView style={styles.scrollView}>
      <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1hnIApshSWvHxEg0YxGp5GoJI1Fq5ZbLF/view?usp=sharing")}>
Claudio de Moura - Você sabe estudar?
        </Text>
       
        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1VscJO1BV3E-ChAHfsb2g79YXE35Cc09J/view?usp=sharing")}>
Como organizar seus estudos
        </Text>
        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/17kmw3FDawzULfDt73lNfUhLM9FBSK0Pb/view?usp=sharing")}>
        Charles Duhigg - O poder do hábito

        </Text>
        
        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1kKfQ9UUM_ZrvXKCNtZMbnfL1pYfzlgUj/view?usp=sharing")}>
       Gladys Mariotto - Já entendi

        </Text>

        
        <Text style={styles.text} onPress={() => Linking.openURL("http://eduepb.uepb.edu.br/download/cartilha-ciast-saude-mental/?wpdmdl=1397&masterkey=607d9d3bad7e5")}>
        Saúde Mental
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
