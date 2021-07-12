import React, { useState } from "react";
import { Image, View,ImageBackground, ScrollView,   FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Linking } from "react-native";
 


export default function noticias(props) {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={require('./assets/img/bg-news.png')} style={styles.img}>
      
      <SafeAreaView style={styles.container}>
    
      <ScrollView style={styles.scrollView}>
       
        <Text style={styles.text}>
          Enquanto não atualizamos essa página, acesse os links abaixo nos encontre pelas redes sociais ;)
        </Text>

         <View style = {styles.btns}>
        
        

        <TouchableOpacity style ={styles.button} onPress={()=> Linking.openURL("https://www.facebook.com/escolacidadaintegralpb/") }>
          <Image  source={require('./assets/img/FACEBOOK.png')}  />
        </TouchableOpacity> 
        <TouchableOpacity style ={styles.button} onPress={()=> Linking.openURL("https://www.instagram.com/ecipb/") }>
          <Image  source={require('./assets/img/INSTAGRAM.png')}  />
        </TouchableOpacity>  
        <TouchableOpacity style ={styles.button} onPress={()=> Linking.openURL("https://www.youtube.com/channel/UC6Kpg2FUEx1kRJX3xOqdmZg/featured") }>
          <Image  source={require('./assets/img/YOUTUBE.png')}  />
        </TouchableOpacity>  
        
       
      </View> 


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
  btns:{
    
    flexDirection: "column",
    alignSelf: "center",
    
    
    
  },

  button:{
      marginTop:20,
  },

  img:{
    flex: 1,
    alignItems: "center",
    
  },

  
  text: {
    textAlign:"center",
    
    fontSize: 20,
    marginLeft:10,
    marginRight:15,
    marginBottom:10,
    color: "white",

  

  },
  scrollView:{
    marginTop:170,
    marginBottom:110,
  },

});
