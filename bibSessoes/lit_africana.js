import React, { useState } from "react";
import { Image, View,ImageBackground, ScrollView,   FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Linking } from "react-native";
 


export default function lit_africana(props) {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={require('../assets/img/bg-biblioteca.png')} style={styles.img}>
      <Image  source={require('../assets/sessoes/lit_africana.png')} style={styles.img2} />
      
      <SafeAreaView style={styles.container}>
    
      <ScrollView style={styles.scrollView}>
       <Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1W6_qO_lHD9sMg6zMnFlbvUKFIinb0DFc/view?usp=sharing ")}>
Work Projects Administration – Slave Narratives
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/12GNsNqtF87XzsMW_2zl6ASNjJ1gkV_Ap/view?usp=sharing ")}>
William Still – The underground railroad
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1kmZK2Y6NZigai1ATginNxJfh77DL-qS4/view?usp=sharing ")}>
W. E. B. DuBois – Darkwater
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1X7hXl-2W3W9equ9d6ZcqCxF4jvOoa8sA/view?usp=sharing ")}>
W. E. B. DuBois – The Negro
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1L4CdZsCrQYfBWem0nRTbUzD_QTbjMaYU/view?usp=sharing ")}>
W. E. B. DuBois – As almas do povo negro
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1z8rTPC6yCSGW1d1PSg-h13OQiV-k_qay/view?usp=sharing ")}>
Various Authors – Stories by English Authors in Africa
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1aJ5clTTSnoVzuIJGzTjEZ53saJ7nZRwZ/view?usp=sharing ")}>
Solomon Northup – Twelve years a slave
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1BpOmnWm3E4wRcafcHMxfSssroXHcN-9W/view?usp=sharing ")}>
Phillis Wheatley – Poems
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1faj9dWEKsgxHUZjEvv6yWyUAjrWA_mtk/view?usp=sharing ")}>
Linda Brent – Incidents in the life of a slave girl
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1vPiJimbxJZDXKHvqF7Vo_0IugN9gmIVW/view?usp=sharing ")}>
Kelly Miller – Progress and achievements of the colored people
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/19tmWJEspbJePVogdUw9iKr-xiq-Fc7l-/view?usp=sharing ")}>
James A. Honeÿ – South African folk tales
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1ya9q8vHSZkxzDUyOLn4aT_npCZtky1AZ/view?usp=sharing ")}>
Ida B. Wells-Barnett – The red record
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1xG0C0LsYrP74-QyA-xFuo25paAEpdhPW/view?usp=sharing ")}>
Harriet Beecher Stowe – Uncle Tom’s cabin
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/15oTxzzrle3XmNN5FnsxKVoIef5s5Vqcd/view?usp=sharing ")}>
Frederick Douglas – Narrative of the life of Frederick Douglass
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1rUdTxXW1nCmRvNuCSA4ABSmXC1msP5UE/view?usp=sharing ")}>
Charles W. Chesnutt – The marrow of tradition
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1IijaKyfbWIdHZKwkCQAFBrCbCz3goQ4O/view?usp=sharing ")}>
Booker T. Washington – Up from slavery
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
