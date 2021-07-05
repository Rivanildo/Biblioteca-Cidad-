import React, { useState } from "react";
import { Image, View,ImageBackground, ScrollView,   FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Linking } from "react-native";
 


export default function sobre(props) {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={require('./assets/img/bg-sobre.png')} style={styles.img}>
      
      <SafeAreaView style={styles.container}>
    
      <ScrollView style={styles.scrollView}>
        
        
        <Text style={styles.text} >
          
        A Biblioteca Cidadã é um acervo digital, fruto de uma curadoria realizada por professores/as da Rede Estadual de Educação.  Composta por inúmeros títulos e mídias, a Biblioteca tem como objetivo disponibilizar conhecimento em diversos formatos, com a missão de contribuir para o desenvolvimento social, cultural e intelectual de todas as pessoas, por meio da democratização do acesso a obras gratuitas e/ou de domínio público.
        </Text>
        <Text style={styles.text} >
A estrutura da curadoria foi pensada a partir do acesso a títulos divididos em áreas de conhecimento, com subdivisões (quando for o caso). Os títulos disponíveis para cada área foram escolhidos por meio de uma seleção com base nos seguintes critérios: afinidade com alguma das áreas de conhecimento apresentadas; pertinência e relevância, tanto para a educação escolar quanto para a formação pessoal; obra estabelecida como de domínio público ou que esteja com acesso gratuito, a fim de que não haja ônus para a pessoa interessada no seu conteúdo. 
</Text>
<Text style={styles.text} >
Além dos títulos divididos por áreas de conhecimento, também foram disponibilizados sites de museus e observatórios, assim como listamos possibilidades de conhecimento nos mais diversos temas em outras mídias, tais como podcasts e audiolivros.
</Text>
<Text style={styles.text} >
É fundamental destacar que toda a idealização da Biblioteca esteve comprometida com o respeito aos direitos humanos. Desse modo, buscamos possibilitar, por meio desse instrumento, a difusão de valores  como a cidadania, a liberdade, a solidariedade e a diversidade cultural, visando à promoção de uma sociedade mais acessível, equitativa e livre de preconceitos.
               
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
