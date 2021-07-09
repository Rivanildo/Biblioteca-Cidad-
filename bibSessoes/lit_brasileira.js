import React, { useState } from "react";
import { Image, View,ImageBackground, ScrollView,   FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Linking } from "react-native";
 


export default function lit_brasileira(props) {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={require('../assets/img/bg-biblioteca.png')} style={styles.img}>
      <Image  source={require('../assets/sessoes/lit_brasileira.png')} style={styles.img2} />
      
      <SafeAreaView style={styles.container}>
    
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1RdtmuZFNMyNpKrqTtMwqWp1S1tapVodu")}>
        Aluízio de Azevedo - Casa de pensão
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/open?id=1f4KqfY_h8OAA_TkLlxgrNCoRFJBNnZii")}>
        Aluízio de Azevedo - O cortiço
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1MQHZVGtiLHcn86FZELjKHm0RD2lMWPay")}> 

        Alvares de Azevedo - Lira dos Vinte Anos

        </Text>
        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1kH9PEmtWv7qsztTCoMGdMVh65V0RZ67X")}>
        Alvares de Azevedo - Noite na taverna
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1UIVDGNov0LRcyp_wI66n-_9gPHJCM3vT")}>
        Augusto dos Anjos - Eu e outras poesias
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1hRK3tSM5ekulCVyUTZSazSxsEFi6-Rhe")}>
        Basílio da Gama - O Uraguai
        </Text>
        
        <Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/open?id=1P2veW6aRrTut-BTacTVi-311BU7SP_qN")}>
        Bernardo Guimarães - A escrava Isaura
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/open?id=1D_jmjiRy7znzKrDyPRLgOfnzDGaAxi16")}>
        Casimiro de Abreu - As primaveras
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1g5zuhtgg5QceGbalzW-pjrKsA9QPQ7BU")}>
        Casimiro de Abreu - Carolina
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=109hb_bQwi-JTr8590GvlKDw5bLz0bpjK")}>
        Castro Alves - Obras completas
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1JLt9dN8o9dt-4kpCFY7DM6pJ-hxf3C26")}>
        Cecília Meireles - Viagem
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/open?id=1GIM5d4D7XAaWTwLcZiBDaS47TFHEaCev")}>
        Clarice Lispector - e a descoberta do mundo
        </Text>
        <Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/open?id=1u9rfY7NC8_0MC0t2GWa8kqm21pYN1aZO")}>
        Domingos José Gonçalves de Magalhães - Suspiros poéticos e saudades
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/open?id=18s143OwGG45f4W78psmGLY_o-aXEZpJk")}>
        Eça de Queirós - A cidade e as serras
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1_U5KuAguhaVuq087KMcV2QYZ12MSvgKU")}>
        Eça de Queirós - A ilustre casa de Ramires
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1QDddH-TkaIyDOec3NxA1K2xTCzwBTHFo")}>
Eça de Queirós - A perfeição
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1lB8TpVe_n1beCVIIHJHZHxa0jthSxmoD")}>
Eça de Queirós - A relíquia

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1nP4aN44Au80BmQPvTwcBBxyHlMIBUYvK")}>
Eça de Queirós - Contos

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1gcpDbXYjhHYayIfBJyLm40SrH8wn692j")}>
Eça de Queirós - No moinho

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1lSLmy3pBBDQrlkHKMZwyCZyd6qmbra5x")}>
Eça de Queirós - Os Maias

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1wbBAL1zrYZ6-hSO2r0HCanatVxp6itvF")}>
Euclides da Cunha - À margem da história
  
</Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1hxdDIYOF4ED9kYxWEnZjSnKP3gQAPSg7")}>
Euclides da Cunha - Canudos e outros temas

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1I4PxtYU_i_-J-m0kvaNm-NMsdkApu4mY")}>
Euclides da Cunha - Os sertões

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1GajSe1Ho-QiF3VswBo3ab0_n0JpjGPvQ")}>
	Euclides da Cunha - Um paraíso perdido

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1Q6dMjlqy9OoI352a5rINK1y38pcJc_OU")}>
Gonçalves Dias - Canção do Exílio

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1zWCYtig8g1lbL_YbxuOEbWBlQUWszEHH")}>
Gonçalves Dias - Primeiros cantos

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1Ulfzke0WNUkmPAYvQ7wf28eu9FqK076Q")}>
João do Rio - A alma encantadora das ruas
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/open?id=1EK2mo_gZKyJXhLx66hFIy4gCJoLIWSAr")}>
Joaquim Manuel de Macedo - A moreninha
  </Text>


<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1paEF67Llv7YyWzaIX7HzVx4QNil9OKwe")}>
Joaquim Manuel de Macedo - O moço loiro

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/open?id=160nUYUASjaHeND5dPE1I6ARpDL6vpqUx")}>
Joaquim Nabuco - O abolicionismo

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1bVadIQAK3nXnBuD5zwMz2aQcf2hy-KKL")}>
José de Alencar - A pata da gazela

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1mXoPHtW0eMhQmAdpaEZvC_qeG8W5hfIX")}>
José de Alencar - A viuvinha

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1pqDUFZneQXK8Kalz9-McHQWnKOWCYgb")}>
José de Alencar – Cinco minutos

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1OzqHqVnSJlDxZORDw6qAKCrKWKem0wpb")}>
José de Alencar - Iracema

  </Text>

  <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1sohn7Ot9vQwSM7pzPaX5hdBj9k-GTejS")}>
José de Alencar - Lucíola
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1M6QFyp1faCQtFHhBH4rriDDP-3yYUrKl")}>
José de Alencar - O Garatuja

  </Text>


<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1-ZH3ekP-CPL1XMv4_MeTc8lDasjx83b1")}>
José de Alencar - O Sertanejo

  </Text>


<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=13sGpAWGUE7ptM-5VxwV8VJUoii2klxXk")}>
José de Alencar - Senhora

  </Text>


<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=13sGpAWGUE7ptM-5VxwV8VJUoii2klxXk")}>
José de Alencar - Ubirajara

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/open?id=1oATIZI5iMOduGN4TEoFhBXp9tO7sz0lx")}>
Lima Barreto - Clara dos Anjos

  </Text>


<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1y8sZtW0CJlIKay6sTcENjUrXqu6Jm6Qt")}>
Lima Barreto - Contos de Lima Barreto

  </Text>


<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1Nzm0E9hxHotRc5JKm9dknGBwqznBeKCU")}>
Lima Barreto - Diário Íntimo

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1jMgq294I3qNfbHUFizz1RpA08mRrfZjo")}>
Lima Barreto - O homem que sabia javanês

  </Text>


<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1gBC3pfXtmxgs7Ns4qpLGawnPOnJzx4Jj")}>
Lima Barreto - Os bruzundangas

  </Text>


<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1-o63bbLrhVgFuB6vm1FAZzSgC6NACV6G")}>
Lima Barreto - Triste fim de Policarpo Quaresma

  </Text>


<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1GEkc3JM1sFUTVB_MVajTTW3dYM6liXyJ")}>
Lúcio Alcântara - A casa da minha avó

  </Text>


<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1r8gQcqY77k6JLxXIvJDNLU6IY48EFyST")}>
Machado de Assis - Almada

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1fh_DMZR35ZU3BGMjLhtifzt28yxhg_xP")}>
Machado de Assis - Americanas

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1PDyw1n9xWwVt4ZRzqUkx7mIG2nOKSlRl")}>
Machado de Assis – Casa Velha

  </Text>
<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1dBeeSeDGs6YfiFxef-j-GVQw8oDS_hUi")}>
Machado de Assis – Contos Fluminenses

  </Text>
<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1wTw7684k4Oq5cS9ApM6ulQHPP5scgR0r")}>
Machado de Assis - Crisalidas

  </Text>

  <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1QZWMEOAJGTcM47WBZGCh-hrdx20Za1e")}>
Machado de Assis - Dispersas

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1xkAdLcoHWH4P6eIqG0RKzsOA6pCmyY9a")}>
Machado de Assis – Dom Casmurro

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1m1KtqU9nTNiICfdWMb2bTgieEmrs8I1M")}>
Machado de Assis - Esau

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1OzVRkTJsnu7M0WOU4KmETbhEYmCR4ykj")}>
Machado de Assis - Falenas

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1SJ_meaijo5V6AjFPksKJ_keLvtgJFewM")}>
Machado de Assis - Gazeta

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1yhwVGTNc2ZVbcxLcofhh-CWK5RgVMfMb")}>
Machado de Assis - Helena

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1BkAO5rIZrPf3xk058rbbSz23Py22dWqA")}>
Machado de Assis – Histórias Meia Noite

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1on40nn2D6UM_nNwJnawRW7Ng8aJY5-DC")}>
Machado de Assis – Histórias Sem Data

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL(" https://drive.google.com/open?id=1f8zYXPUSq5UHn9ECZ8RM5nSJWcqY-H3p")}>
Machado de Assis - Iaia

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1BcbaSFCq_HvOj69gb9vn7jXYREau5coh")}>
Machado de Assis – Mão Luva
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=18yckLoernnDVcPR6dV5QlSEWd7By_UHn")}>
Machado de Assis - Memorial-de-aires

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=14zqlkASthe5g6bXhqeF1xMqUzTSqtP27")}>
Machado de Assis - Memorias Brás

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1YCJyi7PWw7E_Ky-K52x4l3zX3BTJtl0t")}>
Machado de Assis - O alienista

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1_rlNHsYd0CUT0MQrocLitvs87TOi7Obi")}>
Machado de Assis - Ocidentais

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1UVhOHrZktCprI_uyH6Ac9KRY0W3RFB_x")}>
Machado de Assis - Páginas Recolhidas

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=10Sma-rOyCUhcjMxlmxzn6yMprnwdUu92")}>
Machado de Assis – Papeis Avulsos

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1guGI_KNX3tJQ4QHOQ_I6w9an8CJogvwK")}>
Machado de Assis - Quincas

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=12grjeIwfmuf8ivOaCBB7RobBT16jev_J")}>
Machado de Assis - Relíquias

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=12grjeIwfmuf8ivOaCBB7RobBT16jev_J")}>
Machado de Assis - Relíquias
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1uHsAcQ0DrbDUmsmBB7G-GqsdXWQd-7W")}>
Machado de Assis - Ressurreição
  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1l2-8UR4OQ4l5JYfQVjR6BPvInZXFA_JM")}>
Machado de Assis - Várias Histórias

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1-VGjLla53aLaxXDydVdd416vnnmClRLb")}>
Maria Firmina dos Reis - Úrsula e outras obras

  </Text>

  <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=18t_pqaxdnBUUrEv6AW70LDpj_-iNM8ku")}>
Mário de Andrade - Macunaíma

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1zXSOTRGeOGm0gTs-THz_abEb_eQm0SC")}>
Monteiro Lobato - A chave do tamanho

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1YM064wIM4w7CIWZ6WFN8YcExIjHlhiB2")}>
Monteiro Lobato - As caçadas de Pedrinho

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1WvU-8p5pyOhSsNUaRnP4EwLFEzTsTAxn")}>
Monteiro Lobato - Jeca Tatuzinho

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1Xk_gX9eSHwGaIMqL3y1vbSto6ZhsDei_")}>
Monteiro Lobato - Marquês de Rabicó

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1-YEHEkzum2VSPuATXPfIzHBUOW6LBO3r")}>
Monteiro Lobato - O maravilhoso universo do sítio

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1PtuIFWjgI7sCOs18C5rxGFCT1szUSw0s")}>
Monteiro Lobato - O ratinho o gato e o galo

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1Mp1uAb7qZH9RWHHfrjnfdm8n_Alx2NJM")}>
Monteiro Lobato - O Saci

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1leCok-LP3N5i_dNAmKcYCEibbyYKYdxR")}>
Olavo Bilac - Alma inquieta

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1QbGyZgw0XippDqWzbwXSfyTLqstzYznx")}>
Olavo Bilac - Contos para velhos

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1MuZiKrL7Su2311mswftebMkwASFbvjG8")}>
Olavo Bilac - Via-Láctea

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1kJ9dZ_dlqWrun1NZbBNTn_3L3YVivSXo")}>
Padre Antônio Vieira - Sermão do Espírito Santo

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1J2t6XntikQQ0OC3Ra1uTdITH2yWovcJ9")}>
Raul Pompéia - As joias da coroa

  </Text>

<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1rLmUcxF-gJfxyYk25z1MO9UxJqwdlAQp")}>
Raul Pompéia - O Ateneu

  </Text>


<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1adW6eYn2NtuHH7tycatnfz8eBb8nItAM")}>
Rui Barbosa - A imprensa e o dever da verdade

  </Text>


<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=151nvB3Ip8F32DxT5pnSorvaNO7tz_Yl7")}>
Rui Barbosa - Oração aos moços

  </Text>


<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1KthuqZzxJ7JeYHNClnSwIcl7aKi-BhvV")}>
Tomás Antônio Gonzaga - Cartas chilenas

  </Text>


<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1Mp1uAb7qZH9RWHHfrjnfdm8n_Alx2NJM")}>
Vera Lúcia Lopes Dias - Ensaios Graciliânicos

  </Text>
<Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/open?id=1jRiZ4-wc6o9qzUvYw0N564fWIqEJ1HEw")}>
Visconde de Taunay - Inocência

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
