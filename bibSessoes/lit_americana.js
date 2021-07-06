import React, { useState } from "react";
import { Image, View,ImageBackground, ScrollView,   FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Linking } from "react-native";
 


export default function lit_americana(props) {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={require('../assets/img/bg-biblioteca.png')} style={styles.img}>
      <Image  source={require('../assets/sessoes/lit_americana.png')} style={styles.img2} />
      
      <SafeAreaView style={styles.container}>
    
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text} onPress={() => Linking.openURL("https://www.amazon.com.br/Termos-para-Entender-Pol%C3%ADtica-Cidadania-ebook/dp/B08JS89CNS/ref=pd_sim_5/146-6739415-5059056?pd_rd_w=PCW2g&pf_rd_p=e9306f50-1947-4ac4-b858-68213661b333&pf_rd_r=SHY5CKM9P396N8XGAHHG&pd_rd_r=2fbe1c60-b55b-484a-84e6-403dec3b2e09&pd_rd_wg=uJQvW&pd_rd_i=B08JS89CNS&psc=1")}>
        150 Termos para Entender Política (Cidadania)
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("http://www.dominiopublico.gov.br/download/texto/mre000005.pdf")}>
        A cultura dos Povos Indígenas
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.amazon.com.br/Participa%C3%A7%C3%A3o-Mulher-Brasileira-Pol%C3%ADtica-ebook/dp/B07T753L8X/ref=reads_cwrtbar_2/146-6739415-5059056?pd_rd_w=yQChx&pf_rd_p=f0989065-fdf0-44f6-89ba-12ac8c8cc0a8&pf_rd_r=SHY5CKM9P396N8XGAHHG&pd_rd_r=2fbe1c60-b55b-484a-84e6-403dec3b2e09&pd_rd_wg=uJQvW&pd_rd_i=B07T753L8X&psc=1")}>
        A Participação da Mulher Brasileira na Política
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
