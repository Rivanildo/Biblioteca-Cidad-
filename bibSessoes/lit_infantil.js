import React, { useState } from "react";
import { Image, View,ImageBackground, ScrollView,   FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Linking } from "react-native";
 


export default function lit_infantil(props) {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={require('../assets/img/bg-biblioteca.png')} style={styles.img}>
      <Image  source={require('../assets/sessoes/lit_infantil.png')} style={styles.img2} />
      
      <SafeAreaView style={styles.container}>
    
        <ScrollView style={styles.scrollView}>
        <Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/18Or0HkHoEwncXIof7wZb2QfG2yA3_IFU/view?usp=sharing ")}>
Francisca Júlia e Júlio César da Silva – A voz dos animais
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1K206zRTYENRhskzv7NXXxxzrM1Xa5xRx/view?usp=sharing ")}>
Trava-Línguas
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1Efy6PQ0gsV1mxXydBsDK96pT12LP9SeW/view?usp=sharing ")}>
Ana Maria Machado – Sopa de Pedra
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/181BusB_g2Gqvf9xZGW4q0Zv2VhNPNwJP/view?usp=sharing ")}>
Sueli Maria de Regino – Rapunzel
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/11aIm4dgYvu1_IvuE4qH8byJRSm7rpOk6/view?usp=sharing ")}>
Quadrinhas
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1WLY2Fh_7QIlfHg4uF3L88WMfCku8q5wC/view?usp=sharing ")}>
Josi Paz, Luda Lima e Pedro Sangeon – Pedalar é suave
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1sMSJdSGUa_sBwnTH76gZNKC0Vx2wnD8e/view?usp=sharing ")}>
Parlendas
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1ZZ72I2BriiXedoRrofqYWySIFwAAyFSP/view?usp=sharing ")}>
Padre Landell
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1iIltwq0R7wvTXPyQ_Y8r0JpfqVSObE6i/view?usp=sharing ")}>
Os três porquinhos
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1fxWkSsekIbErpleuGWGYG4YAR8kUkhgC/view?usp=sharing ")}>
Os músicos de Bremem
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/14PgbEIcHzgK9R0r5Pbln5iQ3MWZLRg04/view?usp=sharing ")}>
O rei e a flauta
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1V_fZhKTg5hfi8XsUxPJywf5_T91nBjro/view?usp=sharing ")}>
Lenira Almeida Heck e Júlia aVehuiah – O Ratinho Rói-Rói
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1sA3I6-8KyyuzM1-38VJuEywM4oljiGeh/view?usp=sharing ")}>
O pobre e o rico
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1Hdq3eRgoSyYaxTYRmAd45EbHigMhM4z4/view?usp=sharing ")}>
Antoine de Saint-Exupéry – O pequeno príncipe
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1Wjgi-bmacPGBoXzcmYNWkYpoEDbOGTm2/view?usp=sharing ")}>
Lenira Almeida Heck e Júlia Vehuiah – O peisinho e o gato
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1H5xknnqI2Yp16nOxVswmoxcclGrgGf0f/view?usp=sharing ")}>
O patinho feio
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1BeW7BPQCe3cKQ05KF6CZmbjgwFZqquIU/view?usp=sharing ")}>
O pássaro encantado
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1Beeg1f6QhPLAKzhiZF-JQuOZpqs1KO7c/view?usp=sharing ")}>
Olavo Bilac – O pássaro cativo
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1127rz7J008S7e0Mo6Qd3Xm77GyVRq6ob/view?usp=sharing ")}>
Lenira Almeida Heck e Júlia Vehuiah – O mistério do anel de pérola
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1pzh0M6q2aJqslvNgkBatJJo5jpatHM99/view?usp=sharing ")}>
Tarcisio Lage – O leão Praxedes
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1vJiYGtAIhiul4cY9HYJLpL994q0iGiEI/view?usp=sharing ")}>
O jovem gigante
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1YgMm81q9eFUgHhu3s3yMR26CsGDTn_Wc/view?usp=sharing ")}>
O gato de botas
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/19YpBz1m7flLpzcX3Y5iI08lEcmXGV3-y/view?usp=sharing ")}>
Lenira Almeida Heck e Júlia Vehuiah – O Galo Tião e a Vaca Malhada
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1XpuWGd_BFlv5g_E4WSvbHVuhwRmydb_O/view?usp=sharing ")}>
Lenira Almeida Heck e Júlia Vehuiah – O Galo Tião e a Dinda Raposa
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1QExz1KBpLS6zPP7sqtHxkU7noGbU_gN9/view?usp=sharing ")}>
O Flautist de Hamelin
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1K3iSBi-tMyHdf3QgyZZnOjaVEP_3HwoT/view?usp=sharing ")}>
O Corvo e o Jarro e Outras Histórias
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1M68xJOaIyzVnjOpLYj14g4qYE4b1Iyyo/view?usp=sharing ")}>
O Alfaiate Valente
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1BbqjKrIL3V8kMYHOzo-bb6eGC5hEbshi/view?usp=sharing ")}>
Lenira Almeida Heck e Júlia Vehuiah – No Reino das Letras Felizes
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1MJ6T3bz0eceAR1IPbIuYqeo_BnUfTi5t/view?usp=sharing ")}>
Micróbios
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1IogJJozsaEKtEmLaaysarv1qdv2Vj4wT/view?usp=sharing ")}>
João-de-Barro
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1mkFbspc7sztmK08kPe65jx7joOqfG-4d/view?usp=sharing ")}>
João Magrelo
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1MOnW9VMcjKoMVoziHqu8oUaDh33Q-Byt/view?usp=sharing ")}>
João e o Pé de Feijão
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1ewmgrI8onvUFjHyePWlnv2iim9WkTIlZ/view?usp=sharing ")}>
João e Maria
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1nIirRbtnKLLZBzZrdVKIdNnOvF4J_qI-/view?usp=sharing ")}>
/Irmãos Rebouças
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/12OLXTl0TIdMMa9OKOo7RNVOjPJxzWEuu/view?usp=sharing ")}>
Teresa Lopes – Histórias que Acabam Aqui
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1ErRs9qBUsA0MV9EYRBij6fapFxiDP16n/view?usp=sharing ")}>
Figueiredo Pimentel – Histórias da Avozinha
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1djpksweW66yPLgYzJodL6p8F1rPU_dA1/view?usp=sharing ")}>
Carlos Pinheiro – Fábulas de Esopo
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1Q8inrRLxldOj6K4l1vZB1Oeg7ZEGEvFo/view?usp=sharing ")}>
Devison Amorim do Nascimento – Eu que Vi, eu que Vi – O Resgate dos Animais
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1ecCSENC3F89K5c_rRzo7ahdE0GW7kWsT/view?usp=sharing ")}>
Curupira
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1guh6R6_5M36-c1EAY0_5fbLxz9ktooNA/view?usp=sharing ")}>
Cobras
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/18K2Pe26I_nZLZbZvPGPlABTP3jkZ8efy/view?usp=sharing ")}>
Cinderela
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1BOIpF2OklfQNuFjuC1Sb4Tpjhyl2V4-L/view?usp=sharing ")}>
Chapeuzinho Vermelho
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1icIqliofczwbtzX-UjjBEVgyDafETDf8/view?usp=sharing ")}>
Carlos Chagas
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1XfBDMGsVd4yg4qiZ8_q7uw4a707rAubf/view?usp=sharing ")}>
Cantigas
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1YQjwrf_OzQgGkT1-iw9_nKZzlGv7eVMN/view?usp=sharing ")}>
Branca de Neve
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1kI-OuXbmf3UldHe_iGKBGnBfmTCOPvh1/view?usp=sharing ")}>
Anna Nery
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1KwhSEiVd5EW3bhcy7rZiF4J8I6uA__UD/view?usp=sharing ")}>
Eliú Quintiliano – Amanda e os Nanorobôs
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1xKcHVTOyJxkOAjHrKTNatBjsIHDLfWUv/view?usp=sharing ")}>
Hans Christian Andersen – A Roupa Nova do Imperador
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1heqlKQSRbZxWGfuKI-eV4lSTz4ov5-rQ/view?usp=sharing ")}>
A Princesa e a Ervilha
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1B9voFszSIKTv2fVpmnwPjc8RKl3qJDEa/view?usp=sharing ")}>
A Luz Azul
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1esTSD4VnSq_iCMXzwSxhpDWiZm61nNQK/view?usp=sharing ")}>
A Lenda da Vitória-Régia
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1MIm-DgI37uXHY7pnaPuFpMGYaBcXXq3j/view?usp=sharing ")}>
A Cegonha e a Raposa e Outras Histórias
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1zWzneiWbX1aXoc_Esp1teVFGSR1LRIO2/view?usp=sharing ")}>
José Leon Machado – A Bruxa e o Caldeirão
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/16YH-NLrDR6kMf9Fl-Qx29AGkf8qfmFQt/view?usp=sharing ")}>
Lenira Almeida Heck e Júlia Vehuiah – A Borboleta Azul
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/1rHsQN7RxT6zlcX5dhO7fHs0-GwhbD7cZ/view?usp=sharing ")}>
Esopo – A Baleia Alegre
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/file/d/13XHLjXCzlcHUqEfX3Db-DcrUIwTdLaXf/view?usp=sharing ")}>
A Água da Vida
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
