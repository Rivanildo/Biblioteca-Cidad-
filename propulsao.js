import React, { useState } from "react";
import { Image, View,ImageBackground, ScrollView,   FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Linking } from "react-native";
 


export default function propulsao(props) {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={require('./assets/img/bg-propulsao.png')} style={styles.img}>
      
      <SafeAreaView style={styles.container}>
    
      <ScrollView style={styles.scrollView}>
      <Text style={styles.text} >
          
      Este ano o Nivelamento começou com uma grande mudança que
      contou com a participação e o engajamento dos(as) estudantes para a
      escolha de um novo nome para a disciplina, de modo que passasse um
      sentimento de pertencimento e melhor entendimento, por parte dos (as)
      discentes da rede estadual de Ensino. Desse modo, através da ideia dada
      pela estudante Amanda Feliciano, da 2a série da ECI Deputado Álvaro
      Gaudêncio de Queiroz – 3a GRE e por meio de votação no Instagram
      @ECIPB, o novo nome para o Nivelamento a ser utilizado em todas as
      escolas da rede estadual no corrente ano letivo é Propulsão.
  
          </Text>
          <Text style={styles.text}>
          PROPULSÃO é um substantivo feminino que significa “ação ou efeito
de propulsar, ou seja, de impelir para a frente”, rumo a concretização dos
projetos de vida dos(as) estudantes da rede.
                 
          </Text>
         
          <Text style={styles.text}>
          
          Sendo assim, Propulsão é uma ação emergencial que visa promover
as habilidades básicas não desenvolvidas no ano escolar anterior ao do
ano/série em curso, em consonância com as diretrizes do processo de
recuperação da aprendizagem.
Entre as demais metodologias de recuperação desenvolvidas pelas
escolas, a metodologia de propulsão destaca-se como uma ação coletiva
que envolve a identificação das defasagens nas habilidades curriculares e
oferece a todos os(as) professores(as) as condições necessárias para
auxiliar os(as) estudantes a superarem suas dificuldades, com
estabelecimento de metas, prazos e responsáveis por sua execução.
          </Text>
       
      </ScrollView>
    </SafeAreaView>
    <TouchableOpacity style ={styles.button} onPress={()=> Linking.openURL("https://drive.google.com/drive/u/1/folders/1yMS9VAEalcERZihp5OGh_L8IySXFJER5") }>
          <Image  source={require('./assets/img/drive.png')}  />
        </TouchableOpacity> 
    
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
    marginBottom:10,
  },


});
