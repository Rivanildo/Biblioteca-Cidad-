import React, { useState } from "react";
import { Image, View,ImageBackground, ScrollView,   FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Linking } from "react-native";
 


export default function Home(props) {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={require('./assets/img/bg-biblioteca.png')} style={styles.img}>
      <Image  source={require('./assets/img/BIBLIOTECA.png')} style={styles.img2} />
      <SafeAreaView style={styles.container}>
    
      <ScrollView style={styles.scrollView}>

      <Text style={styles.textAlfabeto}>
          A
        </Text>
        <Text style={styles.text} onPress={() => Linking.openURL("https://www.google.com/")}>
          A TESTE TESTE
               
        </Text>


        <Text style={styles.textAlfabeto}>
          B
        </Text>
        <Text style={styles.textAlfabeto}>
          C
        </Text>
        <Text style={styles.textAlfabeto}>
          D
        </Text>
        <Text style={styles.textAlfabeto}>
          E
        </Text>
        <Text style={styles.textAlfabeto}>
          F
        </Text>
        <Text style={styles.textAlfabeto}>
          G
        </Text>
        <Text style={styles.textAlfabeto}>
          H
        </Text>
        <Text style={styles.textAlfabeto}>
          I
        </Text>
        <Text style={styles.textAlfabeto}>
          J
        </Text>
        <Text style={styles.textAlfabeto}>
          K
        </Text>
        <Text style={styles.textAlfabeto}>
          L
        </Text>
        <Text style={styles.textAlfabeto}>
          M
        </Text>
        <Text style={styles.textAlfabeto}>
          N
        </Text>
        <Text style={styles.textAlfabeto}>
          O
        </Text>
        <Text style={styles.textAlfabeto}>
          P
        </Text>
        <Text style={styles.textAlfabeto}>
          Q
        </Text>
        <Text style={styles.textAlfabeto}>
          R
        </Text>
        <Text style={styles.textAlfabeto}>
          S
        </Text>
        <Text style={styles.textAlfabeto}>
          T
        </Text>
        <Text style={styles.textAlfabeto}>
          U
        </Text>
        <Text style={styles.textAlfabeto}>
          V
        </Text>
        <Text style={styles.textAlfabeto}>
          W
        </Text>
        <Text style={styles.textAlfabeto}>
          X
        </Text>
        <Text style={styles.textAlfabeto}>
          Y
        </Text>
        <Text style={styles.textAlfabeto}>
          Z
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.google.com/")}>
          dicionario ok
               
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

  
  text: {
    fontSize: 20,
    marginTop: 20,
    color: "white",

  },

  textAlfabeto: {
    fontSize: 40,
    marginTop: 20,
    color: "white",

  },
  scrollView:{
    marginBottom:120,
  },


});
