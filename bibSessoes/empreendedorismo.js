import React, { useState } from "react";
import { Image, View,ImageBackground, ScrollView,   FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Linking } from "react-native";
 


export default function Empreendedorismo(props) {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={require('../assets/img/bg-biblioteca.png')} style={styles.img}>
      <Image  source={require('../assets/sessoes/empree_inovacao.png')} style={styles.img2} />
      
      <SafeAreaView style={styles.container}>
    
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text} onPress={() => Linking.openURL("https://empreendedorismosocial.porvir.org/")}>
        Empreendedorismo Social na Educação: orientações, ferramentas e casos reais para inspirar e apoiar gestores educacionais e professores a prepararem jovens para impactar o mundo: 

        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://5ca0e999-de9a-47e0-9b77-7e3eeab0592c.usrfiles.com/ugd/5ca0e9_59f401de40084635a1561c77603b63a4.pdf")}>
        Empreendedorismo como opção de carreira

        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://ibqp.org.br/wp-content/uploads/2017/07/GEM_2014-Livro-Empreendedorismo-no-Brasil.pdf.pdf")}>
        Empreendedorismo no Brasil

        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("http://www.dominiopublico.gov.br/download/texto/fs000349.pdf")}>
        Empreendedorismo e Educação Empreendedora: Confrontação entre a teoria e a prática
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("http://www.dominiopublico.gov.br/download/texto/fs000266.pdf")}>
        Empreendedorismo e Jovens Empreendedores
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("http://www.dominiopublico.gov.br/download/texto/fs000287.pdf")}>
        Empreendedorismo: uma filosofia para o desenvolvimento sustentável e a redução da pobreza
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
