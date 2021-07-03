import React, { useState } from "react";
import { Image, View,ImageBackground, ScrollView,   FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Linking } from "react-native";
 


export default function Humanans(props) {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={require('../assets/img/bg-biblioteca.png')} style={styles.img}>
      <Image  source={require('../assets/sessoes/Ci_humanas.png')} style={styles.img2} />
      
      <SafeAreaView style={styles.container}>
    
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text} onPress={() => Linking.openURL("https://www.amazon.com.br/Termos-para-Entender-Pol%C3%ADtica-Cidadania-ebook/dp/B08JS89CNS/ref=pd_sim_5/146-6739415-5059056?pd_rd_w=PCW2g&pf_rd_p=e9306f50-1947-4ac4-b858-68213661b333&pf_rd_r=SHY5CKM9P396N8XGAHHG&pd_rd_r=2fbe1c60-b55b-484a-84e6-403dec3b2e09&pd_rd_wg=uJQvW&pd_rd_i=B08JS89CNS&psc=1")}>
        150 Termos para Entender Política (Cidadania)
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("http://www.dominiopublico.gov.br/download/texto/mre000005.pdf")}>
        A cultura dos Povos Indígenas
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.amazon.com.br/Participa%C3%A7%C3%A3o-Mulher-Brasileira-Pol%C3%ADtica-ebook/dp/B07T753L8X/ref=reads_cwrtbar_2/146-6739415-5059056?pd_rd_w=yQChx&pf_rd_p=f0989065-fdf0-44f6-89ba-12ac8c8cc0a8&pf_rd_r=SHY5CKM9P396N8XGAHHG&pd_rd_r=2fbe1c60-b55b-484a-84e6-403dec3b2e09&pd_rd_wg=uJQvW&pd_rd_i=B07T753L8X&psc=1")}>
        A Participação da Mulher Brasileira na Política
        </Text>
        
        <Text style={styles.text} onPress={() => Linking.openURL("http://www.dominiopublico.gov.br/download/texto/ue000235.pdf")}>
        brasil@povo.com: A luta contra a desigualdade na Sociedade da Informação    
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.amazon.com.br/Capoeira-identidade-g%C3%AAnero-hist%C3%B3ria-capoeira-ebook/dp/B07HCQR2HV/ref=sr_1_40?dchild=1&qid=1624017402&rnid=6311441011&s=digital-text&sr=1-40")}>
        Capoeira, identidade e gênero: ensaios sobre a história social da capoeira no Brasil
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("http://eduepb.uepb.edu.br/e-books/#:~:text=Celso%20Furtado%3A%20a%20esperan%C3%A7a%20militante")}>
        Celso Furtado: a esperança militante    
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.ideiaeditora.com.br/produto/corpos-higidos-o-limpo-e-o-sujo-na-paraiba-1912-1924-3a-edicao/")}>
        Corpos hígidos: o limpo e o sujo na Paraíba (1912-1924)
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("http://www.dominiopublico.gov.br/download/texto/ue000158.pdf")}>
        Direitos Humanos: novas dimensões e desafios
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("http://www.dominiopublico.gov.br/download/texto/ue000123.pdf")}>
        Educação para um futuro sustentável. Uma visão transdisciplinar para uma ação compartilhada
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.amazon.com.br/Ensaios-sobre-racismos-pensamentos-fronteira-ebook/dp/B07XZLYJ6V/ref=pd_rhf_se_s_pd_crcd_2/146-6739415-5059056?pd_rd_w=Lj3Gv&pf_rd_p=49e26231-6534-4f40-8a6b-8528d27191f2&pf_rd_r=NAM71Y0KEEVAS4PZH381&pd_rd_r=8d6e88bc-425e-48f8-b17f-5dc036e0b1e0&pd_rd_wg=lvqXy&pd_rd_i=B07XZLYJ6V&psc=1")}>
        Ensaios sobre racismos: pensamentos de fronteira
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.ideiaeditora.com.br/produto/ensino-de-historia-experiencia-e-interculturalidade/")}>
        Ensino de História: experiência e interculturalidade    
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("http://www.dominiopublico.gov.br/download/texto/ue000072.pdf")}>
        Escrevendo a paz
        </Text>
        
        <Text style={styles.text} onPress={() => Linking.openURL("https://www.amazon.com.br/Hist%C3%B3ria-beleza-Brasil-Bernuzzi-Sant%E2%80%B2Anna-ebook/dp/B00VK7TR0G/ref=sr_1_1?dchild=1&qid=1624016368&rnid=6311441011&s=digital-text&sr=1-1")}>
        História da Beleza no Brasil
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.amazon.com.br/s?bbn=6311441011&rh=n%3A6311441011%2Cn%3A5559928011&dc&qid=1623967677&rnid=6311441011&ref=lp_6311441011_nr_n_14")}>
        Índios e caboclos: a história recontada
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.amazon.com.br/Introdu%C3%A7%C3%A3o-pensamento-feminista-negro-feminismo-ebook/dp/B08XZSDYT4/ref=pd_rhf_dp_s_ci_mcx_mr_hp_d_47/146-6739415-5059056?pd_rd_w=WI7cb&pf_rd_p=1d197d3f-52b3-48f9-8e03-2918da01793e&pf_rd_r=7AK8Z1XBTTBZDZTWS7DG&pd_rd_r=27219dac-d5fe-4afc-9b60-3a4e5be9e1cd&pd_rd_wg=lNnWo&pd_rd_i=B08XZSDYT4&psc=1")}>
        Introdução ao pensamento feminista negro / Por um feminismo para os 99%
        </Text>
        
        <Text style={styles.text} onPress={() => Linking.openURL("http://www.dominiopublico.gov.br/download/texto/ue000125.pdf")}>
        Jovens rumo à mudança
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("http://www.dominiopublico.gov.br/download/texto/ue000077.pdf")}>
        Juventude, juventudes: o que une e o que separa
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.amazon.com.br/Mulheres-que-inspiram-Rafael-Arrais-ebook/dp/B08W752D7Z/ref=sr_1_2?dchild=1&qid=1624016368&rnid=6311441011&s=digital-text&sr=1-2")}>
        Mulheres que inspiram
        </Text>
        
        <Text style={styles.text} onPress={() => Linking.openURL("http://www.dominiopublico.gov.br/download/texto/ue000171.pdf")}>
        Na escola: oito jeitos de mudar o mundo (Nós podemos)
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.amazon.com.br/voto-feminino-no-Brasil-ebook/dp/B07LFKPJ3F/ref=sr_1_4?dchild=1&qid=1624016368&rnid=6311441011&s=digital-text&sr=1-4")}>
        O voto feminino no Brasil
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.ideiaeditora.com.br/produto/os-70-anos-da-declaracao-universal-dos-direitos-humanos-e-o-contexto-atual/")}>
        Os 70 anos da Declaração Universal dos Direitos Humanos e o Contexto Atual
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.amazon.com.br/Representa%C3%A7%C3%B5es-culturais-ind%C3%ADgena-Desafios-contempor%C3%A2neos-ebook/dp/B01MQOD77X/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=Representa%C3%A7%C3%B5es+culturais+da+Am%C3%A9rica+Ind%C3%ADgena%3A&qid=1624629807&s=books&sr=1-1")}>
        Representações culturais da América Indígena
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("")}>
               
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("")}>
               
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
    marginTop:50,
    
  },

  

  
  text: {
    fontSize: 40,
    marginTop: 40,
    color: "white",

  },
  scrollView:{
    marginTop:50,
    marginBottom:120,
  },


});
