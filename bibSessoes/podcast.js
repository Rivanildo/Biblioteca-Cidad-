import React, { useState } from "react";
import { Image, View,ImageBackground, ScrollView,   FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Linking } from "react-native";
 


export default function podcast(props) {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={require('../assets/img/bg-biblioteca.png')} style={styles.img}>
      <Image  source={require('../assets/sessoes/podcast.png')} style={styles.img2} />
      
      <SafeAreaView style={styles.container}>
    
      <ScrollView style={styles.scrollView}>

        <Text style={styles.text2} >
          Podcasts Paraibanos
        </Text>  


        <Text style={styles.text} onPress={() => Linking.openURL("Chá das 3 - https://open.spotify.com/show/1ycPOMKvrEcoyCEALu1prF?si=17BzGKw9QDamMdF80Lq3gg&dl_branch=1")}>
        Chá das 3
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://open.spotify.com/show/6dnhtvMJ2lxL3JZzUfpQh1")}>
        Nossa Fala
        </Text>

        <Text style={styles.text2} >
          Podcasts produzidos por Mulheres / Empoderamento Feminino
        </Text> 



        <Text style={styles.text} onPress={() => Linking.openURL("https://open.spotify.com/show/7mDULAvpj0LktzqmQYQN8W?si=TCEtQRnMSuyRcOE_hdbwaA&dl_branch=1")}>
          Jout Jout de Saia
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://open.spotify.com/show/3abnr07SkMuHOUOXQpGnf1?si=R_BEb-x2RFaheKlETKXQ3Q&dl_branch=1")}>
          É nóia minha?
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://open.spotify.com/show/39IqvZCSC52QAehb4b4aaR")}>
          Mamilos
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://open.spotify.com/show/3C8L0wvrjyYDMQljzDmvnu")}>
          Calcinha Larga
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://open.spotify.com/show/7g6BfZvLNQjrj68MNXyDqf")}>
          Para dar nome as coisas
        </Text>

        <Text style={styles.text2} >
         Podcasts sobre educação
        </Text> 

        <Text style={styles.text} onPress={() => Linking.openURL("https://open.spotify.com/show/5xOp9uqymNJ9plcEo0PfdK")}>
        Todos Pela Educação
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://open.spotify.com/show/13VH9lPai2Ehq8Utm1TSqi")}>
        Educação Política - Politize!
        </Text>
        <Text style={styles.text} onPress={() => Linking.openURL("https://open.spotify.com/show/4pFodtzOkWIGnqpKxDWxAO")}>
        Atuarte | Educação Infantil 
        </Text>

        <Text style={styles.text2} >
         Podcasts sobre Direitos Humanos e Cidadania
        </Text> 

        <Text style={styles.text} onPress={() => Linking.openURL("https://open.spotify.com/show/5jLZX1bY2n73nAUw1Ps3mJ?si=Znxb4u0GQ42Bc_RH2M8Ryg&dl_branch=1")}>
          Cara Pessoa
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://open.spotify.com/show/6WRTzGhq3uFxMrxHrHh1lo?si=eum5G4f_RdSxU05LUqj2fQ&dl_branch=1")}>
          Café da manhã
        </Text>
        
        <Text style={styles.text} onPress={() => Linking.openURL("https://open.spotify.com/show/4gkKyFdZzkv1eDnlTVrguk?si=-D6ueA8MSG-UFDZ6FkaYXg&dl_branch=1")}>
          O Assunto
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://open.spotify.com/show/6UyPZWXpL08OTjO9KjR1ao?si=di5Zj8YaSnqtv-OWmPV6vQ&dl_branch=1")}>
          Filhos da Grávida de Taubaté
        </Text>
        
        <Text style={styles.text} onPress={() => Linking.openURL("https://open.spotify.com/show/0pN0feRNbeszJo6L1fcitc")}>
          Kilombas
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://open.spotify.com/show/1592iJQt0IlC5u5lKXrbyS")}>
          Bom dia, Obvious
        </Text>
        
        <Text style={styles.text} onPress={() => Linking.openURL("https://open.spotify.com/show/0qycUnfp92MidYXzMC8t0W")}>
          Vidas Negras
        </Text>

        <Text style={styles.text2} >
         Podcasts sobre Literatura
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://open.spotify.com/show/1ZPqepnXACjSoss3ceMsHr?si=CpEv_EbMTwyCdlLOoAs7Dg&dl_branch=1")}>
        Sem Papas: Literatura para novos tempos 
        </Text>
        
        <Text style={styles.text} onPress={() => Linking.openURL("https://open.spotify.com/show/66XCLKbi33MubYTZX2G2jW?si=oS0RsVX7QHSurnGAQDcKbQ&dl_branch=1")}>
          Não Inviabilize
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://open.spotify.com/show/3YqBM5mFxnnwhDy9kSdUa1")}>
        REVISE Literatura: Curso de revisão para o ENEM
        </Text>
        
        <Text style={styles.text} onPress={() => Linking.openURL("https://open.spotify.com/show/6vuS3cN6xCzyXj93PspkBn")}>
        Chá das Cinco com Literatura Podcast 
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://open.spotify.com/show/1U35i3kWPSBWwZPCqEQgKf")}>
          Radionovela: Literatura nas Ondas do Rádio 
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://open.spotify.com/show/7ksI66Jr0gBezD0QKpJ4lU")}>
        Toma Aí um Poema: Podcast Poesias Declamadas | Literatura Lusófona 
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://open.spotify.com/show/1SzCMmpD1KAQiJx3ik4vuu")}>
         Planeta Palavra – Literatura 
        </Text>

        <Text style={styles.text2} >
         Podcasts sobre cidadania LGBTQ
        </Text>


        <Text style={styles.text} onPress={() => Linking.openURL("https://open.spotify.com/show/1oWZc2ZjFIgW3MTu4JCi86")}>
          Estante LGBT 
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://open.spotify.com/show/2YmOVhmHMyQpWjYde9UUWR")}>
          Meu Orgulho LGBTQIA+ 
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://open.spotify.com/show/3YGm0swQTn5S64IZAV75EZ")}>
         LGBT no Ar 
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://open.spotify.com/show/2z9wrw5l06sXSaQMyOjYgy?si=ZvD029gZToazXsMTFuKkyw&utm_source=copy-link")}>
         Hospedagem aonde quer que eu vá 
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
    marginTop:40,
    
  },

  

  
  text: {
    marginLeft:10,
    fontSize: 20,
    marginTop: 20,
    color: "white",

  },


  
  text2: {
    alignSelf:"center",
    textAlign:"center",
    fontWeight:"bold",
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
