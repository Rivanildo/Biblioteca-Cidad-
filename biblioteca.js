import React, { useState } from "react";
import { Image, View,ImageBackground, ScrollView,   FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Linking } from "react-native";
 


export default function biblioteca(props) {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={require('./assets/img/bg-biblioteca.png')} style={styles.img}>
      <Image  source={require('./assets/img/biblioteca_01.png')} style={styles.img2} />
      <SafeAreaView style={styles.container}>
    
      <ScrollView style={styles.scrollView}>

      <TouchableOpacity style ={styles.button} onPress={()=> props.navigation.navigate('Humanas') }>
        <Image  source={require('./assets/sessoes/Ci_humanas.png')} style={styles.img3} />
      </TouchableOpacity>  

      <TouchableOpacity style ={styles.button} onPress={()=> props.navigation.navigate('Naturezas') }>
       <Image  source={require('./assets/sessoes/Ci_natureza.png')} style={styles.img3} />
      </TouchableOpacity>
      
      
      <TouchableOpacity style ={styles.button} onPress={()=> props.navigation.navigate('Matematica') }>
      <Image  source={require('./assets/sessoes/conhec_matematicos.png')} style={styles.img3} />
      </TouchableOpacity>  

      <TouchableOpacity style ={styles.button} onPress={()=> props.navigation.navigate('Trabalhos') }>
      <Image  source={require('./assets/sessoes/destaque8.png')} style={styles.img3} />
      </TouchableOpacity>  

      <TouchableOpacity style ={styles.button} onPress={()=> props.navigation.navigate('Dicionarios') }>
        <Image  source={require('./assets/sessoes/dicionarios.png')} style={styles.img3} />
      </TouchableOpacity>  
      
      <TouchableOpacity style ={styles.button} onPress={()=> props.navigation.navigate('Empreendedorismo') }>
        <Image  source={require('./assets/sessoes/empree_inovacao.png')} style={styles.img3} />
      </TouchableOpacity>

      <TouchableOpacity style ={styles.button} onPress={()=> props.navigation.navigate('Tecnicas de Estudo') }>
       <Image  source={require('./assets/sessoes/te_estudos.png')} style={styles.img3} />
      </TouchableOpacity>
      
      
      <TouchableOpacity style ={styles.button} onPress={()=> props.navigation.navigate('Manga') }>
        <Image  source={require('./assets/sessoes/manga.png')} style={styles.img3} />
      </TouchableOpacity>

      <TouchableOpacity style ={styles.button} onPress={()=> props.navigation.navigate('Literatura') }>
      <Image  source={require('./assets/sessoes/literatura.png')} style={styles.img3} />
      </TouchableOpacity>
      
      <TouchableOpacity style ={styles.button} onPress={()=> props.navigation.navigate('Teses e Disserta????es') }>
      <Image  source={require('./assets/sessoes/teses.png')} style={styles.img3} />
      </TouchableOpacity>

     {/*
      <TouchableOpacity style ={styles.button} onPress={()=> props.navigation.navigate('Podcasts') }>
        <Image  source={require('./assets/sessoes/podcast.png')} style={styles.img3} />
      </TouchableOpacity>
     */}
      <TouchableOpacity style ={styles.button} onPress={()=> props.navigation.navigate('Realidade Virtual') }>
        <Image  source={require('./assets/sessoes/realidade_virtual.png')} style={styles.img3} />
      </TouchableOpacity>

      
       
      </ScrollView>
    </SafeAreaView>
    <TouchableOpacity style ={styles.buttonP} onPress={()=> props.navigation.navigate('Podcasts') }>
        <Image  source={require('./assets/sessoes/podcast.png')} style={styles.img3} />
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

  img2:{
    marginTop:30,
    marginLeft: 35,
    
  },
  img3:{
    marginTop:20,
    
    
  },

  
  text: {
    fontSize: 40,
    marginTop: 20,
    color: "white",

  },

  textAlfabeto: {
    fontSize: 40,
    marginTop: 20,
    color: "white",

  },
  scrollView:{
    marginTop:15,
    marginBottom:0,
    marginLeft:20,
    
  },


});
