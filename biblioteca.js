import React, { useState } from "react";
import { Image, View,ImageBackground, ScrollView,   FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Linking } from "react-native";
 


export default function biblioteca(props) {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={require('./assets/img/bg-biblioteca.png')} style={styles.img}>
      <Image  source={require('./assets/img/BIBLIOTECA.png')} style={styles.img2} />
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

      <TouchableOpacity style ={styles.button} onPress={()=> props.navigation.navigate('Dicionarios') }>
        <Image  source={require('./assets/sessoes/dicionarios.png')} style={styles.img3} />
      </TouchableOpacity>  
      
      <TouchableOpacity style ={styles.button} onPress={()=> props.navigation.navigate('Empreendedorismo') }>
        <Image  source={require('./assets/sessoes/empree_inovacao.png')} style={styles.img3} />
      </TouchableOpacity>

      <TouchableOpacity style ={styles.button} onPress={()=> props.navigation.navigate('TecEstudos') }>
       <Image  source={require('./assets/sessoes/te_estudos.png')} style={styles.img3} />
      </TouchableOpacity>
      
      
      <TouchableOpacity style ={styles.button} onPress={()=> props.navigation.navigate('Manga') }>
        <Image  source={require('./assets/sessoes/manga.png')} style={styles.img3} />
      </TouchableOpacity>

      <TouchableOpacity style ={styles.button} onPress={()=> props.navigation.navigate('Literatura') }>
      <Image  source={require('./assets/sessoes/literatura.png')} style={styles.img3} />
      </TouchableOpacity>
     
     
      <TouchableOpacity style ={styles.button} onPress={()=> props.navigation.navigate('Midias') }>
        <Image  source={require('./assets/sessoes/midias.png')} style={styles.img3} />
      </TouchableOpacity>

      <TouchableOpacity style ={styles.button} onPress={()=> props.navigation.navigate('Realidade Virtual') }>
        <Image  source={require('./assets/sessoes/realidade_virtual.png')} style={styles.img3} />
      </TouchableOpacity>

      
       
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
    marginLeft: 35,
    
  },
  img3:{
    marginTop:30,
    
    
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
    marginBottom:100,
    marginLeft:20,
    
  },


});
