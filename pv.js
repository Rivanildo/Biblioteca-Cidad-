import React, { useState } from "react";
import { Image, View,ImageBackground, ScrollView,   FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Linking } from "react-native";
 


export default function pv(props) {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={require('./assets/img/bg-pv.png')} style={styles.img}>
      
      <SafeAreaView style={styles.container}>
    
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text} >
          
        Projeto de Vida é a centralidade da Escola Cidadã Integral, e
        busca refletir as múltiplas dimensões da identidade dos(as) jovens
        ainda em formação. As aulas de Projeto de Vida não se referem apenas
        a um projeto de carreira voltado exclusivamente para o lado
        profissional, todavia é um processo de reflexão sobre o “ser e o querer
        ser”, tendo por objetivo ajudar o(a) jovem a planejar e traçar o
        caminho que precisa construir e seguir para realizar esse encontro,
        nas dimensões pessoal, social e produtiva da vida, num período de
        curto, médio e longo prazo.

        </Text>
        <Text style={styles.text}>
          O Projeto de Vida acontece na junção de duas variáveis: A
          primeira diz respeito à identidade, ou seja, quanto mais o(a) jovem se
          conhece, experimenta as potencialidades individuais, descobre o
          gosto, aquilo que sente prazer em fazer, maior será sua capacidade de
          elaborar seu projeto. Já a segunda, interfere na elaboração do Projeto
          de Vida por meio do conhecimento da realidade. Logo, quanto mais
          eles(elas) conhecem a realidade na qual estão inseridos(as), mais
          compreendem o funcionamento da estrutura social com seus
          mecanismos de inclusão e de exclusão, além de terem consciência dos
          limites e das possibilidades abertas pelo sistema na área em que
          queiram atuar, pois maiores serão as possibilidades de elaborarem e
          de implementarem os seus projetos.
               
        </Text>
       
        <Text style={styles.text}>
        Sendo assim, as duas variáveis demandam espaços e tempos de
        experimentação, bem como uma ação educativa. Além do mais, o(a)
        professor(a) de Projeto de Vida desempenha esse papel de orientador(a) e
        de interlocutor(a) desse processo na vida do(a) jovem.
                      
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
    textAlign:"justify",
    fontSize: 20,
    marginLeft:10,
    marginRight:15,
    marginBottom:10,
    color: "white",

  

  },
  scrollView:{
    marginTop:170,
    marginBottom:110,
  },


});
