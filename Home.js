import React, { useState } from "react";
import { Image, View,ImageBackground, FlatList, ScrollView, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
 


export default function Home(props) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/img/bg2.png')} style={styles.img}>
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}> 
      
      <View style = {styles.btns3}>
        <TouchableOpacity style ={styles.button} onPress={()=> props.navigation.navigate('Biblioteca') }>
          <Image  source={require('./assets/img/biblioteca_01.png')}  />
        </TouchableOpacity>  
      
      <View style = {styles.btns}>
        
        <TouchableOpacity style ={styles.button} onPress={()=> props.navigation.navigate('Estudo Orientado') }>
          <Image  source={require('./assets/img/EO.png')}  />
        </TouchableOpacity> 
        <TouchableOpacity style ={styles.button} onPress={()=> props.navigation.navigate('Propulsão') }>
          <Image  source={require('./assets/img/propulsao.png')}  />
        </TouchableOpacity>  
        <TouchableOpacity style ={styles.button} onPress={()=> props.navigation.navigate('Projeto de Vida') }>
          <Image  source={require('./assets/img/pv.png')}  />
        </TouchableOpacity>  
        
       
      </View>

      <View style = {styles.btns2}>
      <TouchableOpacity style ={styles.button} onPress={()=> props.navigation.navigate('pomodoro') }>
          <Image  source={require('./assets/img/pomodoro.png')}  />
        </TouchableOpacity>   
        
        <TouchableOpacity style ={styles.button} onPress={()=> props.navigation.navigate('Notícias') }>
          <Image  source={require('./assets/img/noticias.png')}  />
        </TouchableOpacity>  
        <TouchableOpacity style ={styles.button} onPress={()=> props.navigation.navigate('Sobre') }>
          <Image  source={require('./assets/img/eci.png')}  />
        </TouchableOpacity>  

      </View>

      
        
        <TouchableOpacity style ={styles.button4} onPress={()=> props.navigation.navigate('Dicionário') }>
          <Image  source={require('./assets/img/manual_01.png')}  />
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
    marginTop:20,
    flexDirection: "row",
    alignSelf: "center",
    
    
    
  },

  btns2:{
    flexDirection: "row",
    marginTop:20,
    alignSelf:"center",
    
  
    
  },

  btns3:{
    flexDirection: "column",
    marginTop:10,
    alignSelf: "center",
    
  
  },

  img:{
    flex: 1,
    alignItems: "stretch",
    
    
  },

  button4:{
    marginTop:40,
    
    
    
  },


  scrollView:{
    marginTop:265,
   
  },

});
