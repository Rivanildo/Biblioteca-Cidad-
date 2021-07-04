import React, { useState } from "react";
import { Image, View,ImageBackground, ScrollView,   FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Linking } from "react-native";
 


export default function Matematica(props) {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={require('../assets/img/bg-biblioteca.png')} style={styles.img}>
      <Image  source={require('../assets/sessoes/conhec_matematicos.png')} style={styles.img2} />
      
      <SafeAreaView style={styles.container}>
    
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text} onPress={() => Linking.openURL("http://eduepb.uepb.edu.br/e-books/#:~:text=pertencimento%3A%20perspectivas%20etnogr%C3%A1ficas-,Cole%C3%A7%C3%A3o%20Caro%C3%A1,-Caro%C3%A1%2C%20uma%20cole%C3%A7%C3%A3o")}>
        Coleção Caroá - Itinerários de Pesquisas em Ensino de Ciências e Educação Matemática

        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.baixelivros.com.br/ciencias-exatas/matematica/como-estudar-matematica")}>
        Como Estudar Matemática
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.amazon.com.br/Elementos-Geometria-Euclides-ebook/dp/B00AGZCDLS/ref=zg_bs_5559992011_f_9?_encoding=UTF8&psc=1&refRID=6GG2HZKEFCBCFWDHPEYA")}>
        Geometria, de Euclides
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.baixelivros.com.br/ciencias-exatas/matematica/matematica-basica")}>
        Matemática Básica
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.baixelivros.com.br/ciencias-exatas/matematica/tabuada-ensino-pratico")}>
        Tabuada: Ensino Prático para Aprender Aritmética
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
