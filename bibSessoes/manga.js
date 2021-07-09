import React, { useState } from "react";
import { Image, View,ImageBackground, ScrollView,   FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Linking } from "react-native";
 


export default function Manga(props) {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={require('../assets/img/bg-biblioteca.png')} style={styles.img}>
      <Image  source={require('../assets/sessoes/manga.png')} style={styles.img2} />
      
      <SafeAreaView style={styles.container}>
    
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/19IaK9FtHp682HVkfTNFabx0G3iiLcMvt/view?usp=sharing")}>
          Biblioteca - Um lugar mágico
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1lp3qykmZX0dfznOXqolAQrWd_RTJTtxo/view?usp=sharing")}>
          Bullying - Isso não é brincadeira
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/15d9Cx1s0Hdh68JET3r6BMQsTFsV7UuRW/view?usp=sharing")}>
          Capitã Recicla - Em defesa do óleo sustentável
        </Text>
        
        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1AtziKnt0nMN9ZNpJdirYLwV7fDdrGMfk/view?usp=sharing")}>
          Chico Bento - Chico Bento vai ao Pantanal
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1y4tl7hM-V91AyxHu6MQJK8YKeRrpXyLO/view?usp=sharing")}>
          Cleide Ramos - Quadrinhos - Guia Prático
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1WG96l44jJqDXSL8tNdLUyYpBuEzSk8Ov/view?usp=sharing")}>
          Coronavírus - Uma batalha interna
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1J6-i8V0oS1w1cA-nSfPv24XM2VElPJIu/view?usp=sharing")}>
          Gibi da Mesada
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1fKVtHPcgv7aeDRBPI-DvSzQkQTtUneuX/view?usp=sharing")}>
          Gibi da Saúde - Guarda Responsável de Animais
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/18DsMgolB1r8XrkuxFDVzPvQp98Boaq-m/view?usp=sharing")}>
          Gibizinho da turma do Pinho
        </Text>
        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1TORMWc5TNFJJSGRLw6LHYr5EZVeXFmuV/view?usp=sharing")}>
          Lúcia Teixeira - O Segredo da Linga Vida
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1NscZs7yg0MO0MvcmrNwitzuFyGib2m7R/view?usp=sharing")}>
          Menino Maluquinho contra a dengue
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1rNyaGYgSgERHRpGBWbkH-sZgifmUD6EI/view?usp=sharing")}>
          O oceano e nós
        </Text>
        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1i7UQbEnIEw0xTEGny7i__SaXc6Dn9nJT/view?usp=sharing")}>
          Operação corta fogo - Corpo de Bombeiros
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1HGPDKofcafMnS_8zyM0K5v9GMxC83oc0/view?usp=sharing")}>
          Sesinho - Feriado todo dia
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1pEjpqRmdqezMUnCLpgl1goRPW8SDMLIa/view?usp=sharing")}>
          Sesinho - No mundo da lua
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1oDmONZ3xaMJOvmSqvIsbUMD7dm0yz3aM/view?usp=sharing")}>
          Sesinho - Você fala minha língua
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1BrysQZ6nObJN_ttjMaaqI3QQD1c0KiqF/view?usp=sharing")}>
          Quanto menos lixo, melhor!
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1LPY1JIURLHjDi53hokFYOn1qOzvdP_J8/view?usp=sharing")}>
          Tirinhas da Mafalda - Vol. 1 - Eunice Isaias
        </Text>
        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/12qa8k0_9mCgAP6_4gOc--0hWhj4Iagii/view?usp=sharing")}>
        Tirinhas da Mafalda - Vol. 2 - Eunice Isaias
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1HUqRNW89DjduMaYxh-vi8crewD5p1v9H/view?usp=sharing")}>
        Tirinhas da Mafalda - Vol. 3 - Eunice Isaias
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1xSr_BuLLOOvOOzgdTT3PbuUqXZzmrzl-/view?usp=sharing")}>
        Tirinhas da Mafalda - Vol. 4 - Eunice Isaias
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1kFxaFaBKLOj5AcjXbmFBatsLuCkddwVo/view?usp=sharing")}>
        Tirinhas da Mafalda - Vol. 5 - Eunice Isaias
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/129ddoHlf6UkUGhdmvKh0G_Vc_A1JVwvb/view?usp=sharing")}>
        Tirinhas da Mafalda - Vol. 6 - Eunice Isaias
        </Text>
        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1SJSUkkSfhlcUpdggwaadxx20xWaDoaa3/view?usp=sharing")}>
        Tirinhas da Mafalda - Vol. 7 - Eunice Isaias
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1fsJxHw8C1QvXpMYiBwqdjC_mRubUKV6L/view?usp=sharing")}>
          Turma da Mônica - A escolha certa
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1exWfcHjpg9hvgAL5lDPrSXXG1Cdzqx8-/view?usp=sharing")}>
        Turma da Mônica - A gente se entende
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1ALD3YBnfrpGwbvwLO9_MXjBVbDIbEyHk/view?usp=sharing")}>
        Turma da Mônica - Alimentos Saudáveis
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1KfJ3BMn-bR1YWrlUATkvDVtCyQDXrMpy/view?usp=sharing")}>
        Turma da Mônica - Comer sem desperdiçar
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1-23bMT0cnNE-EjZXq1e5FZlQYQzA7mD2/view?usp=sharing")}>
        Turma da Mônica - Cuidando do mundo
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1-k_9wWDUboBDv2eNCp0DH9tcGLJZyE4N/view?usp=sharing")}>
        Turma da Mônica - Eu participo
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1M_oh21IYcs23yWAZjI0uooyokFNLe66A/view?usp=sharing")}>
        Turma da Mônica - O estatudo da criança e do Adolescente
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1pASdAkbLodfwbLVd3N3x-bWRL7cdRnOl/view?usp=sharing")}>
        Turma da Mônica - Somos todos cidadãos
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1TQvaf08thRCttQsDshFIaxkYz115u21G/view?usp=sharing")}>
        Turma da Mônica - Somos todos iguais
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1Q2PPOe2LUFex3h5Oh2zuiu96qLfECxLn/view?usp=sharing")}>
        Turma da Mônica - Todos são importantes
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1xLRVUMb8WSFVoIvLJaZYW5EMJZhWCl1Y/view?usp=sharing")}>
        Turma da Mônica - Um por todos e todos por um!
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1jWxj1gIQvNUrSpHo2ioSXqYBkKBrQnxq/view?usp=sharing")}>
        Turma da Mônica - Uma história que precisa ter fim
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1_AlbQOo8H2vwrZQSN26Xlnhxf_fX8vHv/view?usp=sharing")}>
        Turma da Mônica - Vacinação é um gesto de Amor
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1mOkVpdDhcedV6OsnKISHtxXzFMQcRT9O/view?usp=sharing")}>
        Turma da Mônica e o ministério público
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/11GGNzB4D4CxjkyLyR3RFXCo2TN8iYljB/view?usp=sharing")}>
        Turma da Mônica Jovem - Prevenção do uso de drogas
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1_FKsl7uRMeTT8JvaC5FIhR1SrEW3KjsC/view?usp=sharing")}>
          Turma do Coxinha - Criança Nasceu para Ser Feliz!
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://drive.google.com/file/d/1jzLEmhTz3DSOmYKskNVA-xGbs20Xd9Cc/view?usp=sharing")}>
          Turminha Legal
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
