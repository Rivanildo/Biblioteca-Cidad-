import React, { useState } from "react";
import { Image, View,ImageBackground, ScrollView,   FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Linking } from "react-native";
 


export default function lit_americana(props) {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={require('../assets/img/bg-biblioteca.png')} style={styles.img}>
      <Image  source={require('../assets/sessoes/lit_americana.png')} style={styles.img2} />
      
      <SafeAreaView style={styles.container}>
    
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1mF42IjNkBoxpS8IlklGqMUQkBL6T0jem/view?usp=sharing")}>
          Edgar Allan Poe - Obra Completa
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1jNpygQvXDUSV7YFla2EIIlfM9zhHUxfo/view?usp=sharing")}>
          F. Scott Filtzgerald - O Grande Gatsby
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1L8joV_sAdWj-7xwgM0DnvsifQITpSMGW/view?usp=sharing")}>
        F. Scott Filtzgerald - This side of Paradise
        </Text>
        
        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1Cxv0S-uuaEfualOXs1JFBXVMNQhdtKOv/view?usp=sharing")}>
        Herman Melvile - A Romance Of The South Sea
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1c9ruA8DGfipohh96kCmUD39Ybr55dtQV/view?usp=sharing")}>
        Herman Melvile - Bartleby, The Scrivener A Story os Wall-Street
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1NvcB-fJMBAN6Um1TYz4UjZ6DnDuJgxd0/view?usp=sharing")}>
        Herman Melvile - Battle-Pieces and Aspects of the War
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1apRaFf2eRuF6PNaDjUMnMBVvWpTpJ9Qv/view?usp=sharing")}>
        Herman Melvile -I and My Chimney
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/17-Tfp-OKIvdzjM8e5QyL_Xw3Sc5ViiI2/view?usp=sharing")}>
        Herman Melvile - John Marr and Other Poems
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1ADcefmOM5KyCgkZ85YjzWcT4S9bhWx11/view?usp=sharing")}>
        Herman Melvile - Moby Dick (Inglês)
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/17pbWI9foA2G2LxdayIww8djnrQr1Ln1w/view?usp=sharing")}>
        Herman Melvile - Moby Dick (Português)
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1n4tBcsTEa2gU9lwqou7f0zWwhxcuYj1W/view?usp=sharing")}>
        Herman Melvile - RedBurn. His First Voyage
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1rcuMtpzh0TC0s9V62GA4mZSCXVG_2AZz/view?usp=sharing")}>
        Herman Melvile - White Jacket of The Wolrd on a Man-of-War
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1mM4fjh6eVdtI_6TITTvz_D4Y3mMyR40K/view?usp=sharing")}>
        Mark Twain - 1601 conversation as it was by the social fireside in the time of the tudors
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/19uhR2B5bnGLqymx-9mgKfWyPs87Hebyb/view?usp=sharing")}>
        Mark Twain - A burlesque autobiography
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1rzmubsDQw723rHua9BUput8sHJTgwbyc/view?usp=sharing")}>
        Mark Twain - A Dogs Stale
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1zeR6ZUYOagreKMnulrYXMYdLivPbqJHn/view?usp=sharing")}>
        Mark Twain - A double Barrelled Detective
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1Fq5gpi7QwopnCraUxNnA5_2X0azfhCnL/view?usp=sharing")}>
        Mark Twain - A Helpless Situation
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1F8FqswGTA1dWivawZeXF4ZVHQOkgEoM-/view?usp=sharing")}>
        Mark Twain - A Horse’s Tale
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1nsW6j9C2Z77YlRMc03-s6PfK84K7Jt_8/view?usp=sharing")}>
        Mark Twain - A Scrap Of Curious History
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1b_InNzk1dJBgkZuKXlMpqLG0VDKjggTC/view?usp=sharing")}>
        Mark Twain - A simplified alphabet
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1Yc-v_WWbBLKXL9PY2zSwlEElEOCCr6h8/view?usp=sharing")}>
        Mark Twain - A Telephonic Conversation
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1hDL4cXifBtchGkQRlZjGg2uIau3xWPw7/view?usp=sharing")}>
        Mark Twain - A Tramp Abroad
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1EcxWTduoTVeEhR-65p7YvKXBsWToqYDI/view?usp=sharing")}>
        Mark Twain - Adventures of Huckleberry Finn
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1r92zrkBeTrO3VMEbRKEJYA3RRFf9Gmlj/view?usp=sharing")}>
        Mark Twain - Alonzo fitz and other stories
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1m05TwYtxulvx1gtHgEkZtAq_LdLgG6Iq/view?usp=sharing")}>
        Mark Twain - As Concerns Interpreting The Deity
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1GjbtyWlhGDbyyz_LFyib69fz5nFVDPtg/view?usp=sharing")}>
        Mark Twain - Following the Equator
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/191ZAUvRsuyR2B_V-RZchE-A9P5ZE9eSb/view?usp=sharing")}>
        Mark Twain - Life On The Mississippi
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1dkUsFIPkYe6sPc-9lnn7UB8nUNjO_rdS/view?usp=sharing")}>
        Mark Twain - The Adventures of Tom Sawyer

        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1Zm69JXqzxhecJn1wWFLdjeSp2Os89YL5/view?usp=sharing")}>
        Mark Twain - The letters of Mark Twain
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1TsmwP32PG2CQ7jH76WHGDrWVSIM_1qf-/view?usp=sharing")}>
        Mark Twain - O Estranho Misterioso

        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1KpOl7ERw4r9lWevQyHdqiJ9ZuZXHS_xj/view?usp=sharing")}>
        Robert Frost - A Boys's Will

        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1orpEN9NvIxU0PRYkJPINqSB5lfCuOvDM/view?usp=sharing")}>
        Robert Frost - North of Boston 

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
