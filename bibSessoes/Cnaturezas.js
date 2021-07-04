import React, { useState } from "react";
import { Image, View,ImageBackground, ScrollView,   FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Linking } from "react-native";
 


export default function Natureza(props) {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={require('../assets/img/bg-biblioteca.png')} style={styles.img}>
      <Image  source={require('../assets/sessoes/Ci_natureza.png')} style={styles.img2} />
      
      <SafeAreaView style={styles.container}>
    
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text} onPress={() => Linking.openURL("https://www.amazon.com.br/Recep%C3%A7%C3%A3o-Darwinismo-Brasil-Heloisa-Domingues-ebook/dp/B074F4F2QS/ref=zg_bs_5559992011_f_13?_encoding=UTF8&psc=1&refRID=6GG2HZKEFCBCFWDHPEYA")}>
        A Recepção do Darwinismo no Brasil

        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.amazon.com.br/Cat%C3%A1logo-plantas-fungos-Brasil-Vol-ebook/dp/B00S16CQHK/ref=sr_1_11?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=26OYM395CDIPY&dchild=1&keywords=ebooks+gratuitos&qid=1624632294&rnid=6740748011&s=books&sprefix=ebook%2Cstripbooks%2C256&sr=1-11")}>
        Catálogo de plantas e fungos do Brasil - Vol. 1
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.amazon.com.br/Cat%C3%A1logo-plantas-fungos-Brasil-Vol-ebook/dp/B00S16CQGQ/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=26OYM395CDIPY&dchild=1&keywords=ebooks+gratuitos&qid=1624632294&rnid=6740748011&s=books&sprefix=ebook%2Cstripbooks%2C256&sr=1-1")}>
        Catálogo de plantas e fungos do Brasil - Vol. 2

        </Text>
        
        <Text style={styles.text} onPress={() => Linking.openURL("https://www.baixelivros.com.br/didatico/enem-2020-ciencias-da-natureza-e-suas-tecnologias")}>
        Ciências da Natureza e suas tecnologia I
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.baixelivros.com.br/ciencias-exatas/enem-ciencias-da-natureza-e-suas-tecnologias")}>
        Ciências da Natureza e suas tecnologia II

        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.amazon.com.br/Como-desigualdades-sociais-fazem-sa%C3%BAde-ebook/dp/B00P6OIYJ4/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=como+as+desigualdades+sociais&qid=1624633806&s=digital-text&sr=1-1")}>
        Como e por que as desigualdades sociais fazem mal à saúde

        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.amazon.com.br/v%C3%ADrus-pandemias-evoluem-Reinaldo-Lopes-ebook/dp/B088KVMNL5/ref=pd_sim_10/146-6739415-5059056?pd_rd_w=acOIL&pf_rd_p=e9306f50-1947-4ac4-b858-68213661b333&pf_rd_r=7GEHT8PK2WB163EP4NTF&pd_rd_r=7cc34c67-d088-4b01-b2dd-e32665656928&pd_rd_wg=DsRZG&pd_rd_i=B088KVMNL5&psc=1")}>
        Como os vírus e as pandemias evoluem

        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.amazon.com.br/Cultura-cientif%C3%ADca-um-direito-todos-ebook/dp/B00AH4G2DI/ref=zg_bs_5559992011_f_41?_encoding=UTF8&psc=1&refRID=6GG2HZKEFCBCFWDHPEYA")}>
        Cultura científica: um direito de todos
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.amazon.com.br/Declara%C3%A7%C3%A3o-Universal-Genoma-Direitos-Humanos-ebook/dp/B00AG6E68A/ref=zg_bs_5559992011_f_34?_encoding=UTF8&psc=1&refRID=6GG2HZKEFCBCFWDHPEYA")}>
        Declaração Universal do Genoma Humano e Direitos Humanos
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.amazon.com.br/direito-%C3%A0-natureza-cidade-ebook/dp/B00ZPKUAO6/ref=zg_bs_5559992011_f_29?_encoding=UTF8&psc=1&refRID=6GG2HZKEFCBCFWDHPEYA")}>
        O direito à natureza na cidade
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.amazon.com.br/Pesquisa-Cient%C3%ADfica-Fabio-T-Riba-ebook/dp/B08T4C2H6T/ref=pd_sim_18/146-6739415-5059056?pd_rd_w=acOIL&pf_rd_p=e9306f50-1947-4ac4-b858-68213661b333&pf_rd_r=7GEHT8PK2WB163EP4NTF&pd_rd_r=7cc34c67-d088-4b01-b2dd-e32665656928&pd_rd_wg=DsRZG&pd_rd_i=B08T4C2H6T&psc=1")}>
        Pesquisa Científica: #Fica a dica#

        </Text>


        <Text style={styles.text} onPress={() => Linking.openURL("https://www.amazon.com.br/Plantas-Medicinais-Mara-Z%C3%A9lia-Almeida-ebook/dp/B01A5VXJLU/ref=pd_sim_7/146-6739415-5059056?pd_rd_w=acOIL&pf_rd_p=e9306f50-1947-4ac4-b858-68213661b333&pf_rd_r=7GEHT8PK2WB163EP4NTF&pd_rd_r=7cc34c67-d088-4b01-b2dd-e32665656928&pd_rd_wg=DsRZG&pd_rd_i=B01A5VXJLU&psc=1")}>
        Plantas Medicinais

        </Text>
        
        <Text style={styles.text} onPress={() => Linking.openURL("https://www.amazon.com.br/Recupera%C3%A7%C3%A3o-ambiental-Atl%C3%A2ntica-Danilo-Almeida-ebook/dp/B072MJ529P/ref=pd_sim_11/146-6739415-5059056?pd_rd_w=acOIL&pf_rd_p=e9306f50-1947-4ac4-b858-68213661b333&pf_rd_r=7GEHT8PK2WB163EP4NTF&pd_rd_r=7cc34c67-d088-4b01-b2dd-e32665656928&pd_rd_wg=DsRZG&pd_rd_i=B072MJ529P&psc=1")}>
        Recuperação ambiental da Mata Atlântica

        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.amazon.com.br/Teoria-do-antitudo-Fernando-Marchi-ebook/dp/B0728GRKJV/ref=zg_bs_5559992011_f_11?_encoding=UTF8&psc=1&refRID=6GG2HZKEFCBCFWDHPEYA")}>
        Teoria do Antitudo

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
