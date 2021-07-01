import React, { useState } from "react";
import { Image, View,ImageBackground, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
 


export default function Home(props) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/img/bgtest.png')} style={styles.img}>



      </ImageBackground>



    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
   
  },

  btns:{
    flexDirection: "row",
    marginTop:260,
    alignItems: 'center',
    justifyContent: 'center',
    width:400,
    marginRight:100
    
    
  },

  btns2:{
    flexDirection: "row",
    marginTop:20,
    alignItems: 'center',
    justifyContent: 'center',
    width:400,
    marginRight:100,
  },

  btns3:{
    flexDirection: "column",
    marginTop:10,
    alignItems: 'center',
    justifyContent: 'center',
    width:400,
    marginRight:100,
  },

  img:{
    flex: 1,
    alignItems: "stretch",
    
  }

});
