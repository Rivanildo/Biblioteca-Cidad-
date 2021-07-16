import React, { useState } from "react";
import { Image, View,ImageBackground, ScrollView,   FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Linking } from "react-native";
 


export default function Literatura(props) {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={require('../assets/img/bg-biblioteca.png')} style={styles.img}>
      <Image  source={require('../assets/sessoes/literatura.png')} style={styles.img2} />
      <SafeAreaView style={styles.container}>
    
      <ScrollView style={styles.scrollView}>

      <TouchableOpacity style ={styles.button} onPress={()=> props.navigation.navigate('Literatura Africana') }>
        <Image  source={require('../assets/sessoes/lit_africana.png')} style={styles.img3} />
      </TouchableOpacity>  

      <TouchableOpacity style ={styles.button} onPress={()=> props.navigation.navigate('Literatura Americana') }>
       <Image  source={require('../assets/sessoes/lit_americana.png')} style={styles.img3} />
      </TouchableOpacity>
      
      
      <TouchableOpacity style ={styles.button} onPress={()=> props.navigation.navigate('Literatura Brasileira') }>
      <Image  source={require('../assets/sessoes/lit_brasileira.png')} style={styles.img3} />
      </TouchableOpacity>  

      <TouchableOpacity style ={styles.button} onPress={()=> props.navigation.navigate('Literatura Infanto Juvenil') }>
        <Image  source={require('../assets/sessoes/lit_infantil.png')} style={styles.img3} />
      </TouchableOpacity>  
      
      <TouchableOpacity style ={styles.button} onPress={()=> props.navigation.navigate('Mulheres Negras') }>
        <Image  source={require('../assets/sessoes/lit_mulheres_negras.png')} style={styles.img3} />
      </TouchableOpacity>
      {/* 
      <TouchableOpacity style ={styles.button} onPress={()=> props.navigation.navigate('Mulheres Paraibanas') }>
       <Image  source={require('../assets/sessoes/lit_mulheres_paraibanas.png')} style={styles.img3} />
      </TouchableOpacity>
      
      */}
      
      
       
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
    alignSelf: "center",
    marginTop:60,
    
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
    marginTop:50,
    marginBottom:120,
    
  },


});
