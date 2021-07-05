import React, { useState } from "react";
import { Image, View,ImageBackground, ScrollView,   FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Linking } from "react-native";
 


export default function Realidade(props) {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={require('../assets/img/bg-biblioteca.png')} style={styles.img}>
      <Image  source={require('../assets/sessoes/realidade_virtual.png')} style={styles.img2} />
      
      <SafeAreaView style={styles.container}>
    
      <ScrollView style={styles.scrollView}>
      <Text style={styles.text2} >
       Pelo Mundo
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("http://chilexplora.com/chilexplora/panorama/museos/mbamasculino/tour.html?fbclid=IwAR30OVPZVOzAHjOrRrQPhhURts50bKUwBa48uD4Xj0zpKlo3xlpmBaRtHxU")}>
        Museu Nacional de Bellas Artes (Santiago do Chile)
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://gm360.com.br/iglesia/iglesiasanpedro.html")}>
        La Iglesia de San Pedro de Atacama (Atacama, Chile)
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.museofridakahlo.org.mx/es/el-museo/visita-virtual/")}>
        Museu Frida Kahlo (México)
        </Text>
        
        <Text style={styles.text} onPress={() => Linking.openURL("https://www.museudofado.pt/")}>
        Museu do Fado (Lisboa - Portugal) 
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.museoreinasofia.es/en")}>
        Museu Nacional - Centro de Arte Reina Sofia (Madri - Espanha)
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://caixaforum.org/es/digital?lang=0")}>
        Fundación La Caixa (Madri - Espanha)
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.iwm.org.uk/visits/iwm-london")}>
        Imperial War Museum (Londres)
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.tate.org.uk/")}>
        Tate Modern Gallery (Londres)
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.louvre.fr/en/explore")}>
        Louvre (Paris - França)
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://artsandculture.google.com/partner/the-metropolitan-museum-of-art")}>
        Metropolitan Museum of Art, Nova York – Estados Unidos 
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.artic.edu/")}>
        Art Institute of Chicago, Chicago – Estados Unidos
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.museivaticani.va/content/museivaticani/en/collezioni/musei/tour-virtuali-elenco.htm")}>
        Museu do Vaticano, Roma – Itália
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.annefrank.org/nl/museum/")}>
        Museu Casa de Anne Frank, em Amsterdam
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://artsandculture.google.com/streetview/9QF3u2yNtD8ufQ?sv_lng=-99.1874967&sv_lat=19.4262021&sv_h=261.9837739797691&sv_p=-1.1648862483025795&sv_pid=vE0AANmrdjzJR19WXs9Z2w&sv_z=1")}>
        Museu Nacional de Antropologia, Cidade do México – México 
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://artsandculture.google.com/story/cQVh5Rbqa2Q3dg")}>
        Galeria Uffizi, Florença – Itália 
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://artsandculture.google.com/streetview/british-museum/AwEp68JO4NECkQ?sv_lng=-0.1266024509257022&sv_lat=51.51905368906714&sv_h=306&sv_p=0&sv_pid=JeKwUFYAMWXNWPh3IOg3jw&sv_z=1")}>
        The British Museum, Londres – Inglaterra 
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://artsandculture.google.com/partner/acropolis-museum")}>
        Museu da Acrópole, Atenas – Grécia
        </Text>
        <Text style={styles.text} onPress={() => Linking.openURL("https://naturalhistory2.si.edu/vt3/NMNH/")}>
        National Museum of Natural History, Washington DC – Estados Unidos
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://artsandculture.google.com/streetview/ohara-museum-of-art/VgH7zV1V0X5QTQ?sv_lng=133.7701356405036&sv_lat=34.59600414554415&sv_h=-19.18120977308996&sv_p=-3.795637714049647&sv_pid=3aHLJ152bRAOxleJKMuwNg&sv_z=1")}>
        Museu de Arte Ohara (Kurashiki, Japão) 
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://artsandculture.google.com/partner/yad-vashem")}>
        Yad Vashem Museu do Holocausto (Jerusalém, Israel)
        </Text>

        <Text style={styles.text2} >
        No Brasil
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://artsandculture.google.com/streetview/pinacoteca-do-estado-de-s%C3%A3o-paulo/ogFzI8ChtO96vg?hl=pt-BR&sv_lng=-46.6338008&sv_lat=-23.5343627&sv_h=35&sv_p=0&sv_pid=sw81l2mz7XZFfOK9pgCOag&sv_z=1")}>
        Pinacoteca, São Paulo – Brasil 
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://artsandculture.google.com/partner/masp")}>
        Museu de Arte de São Paulo – MASP, São Paulo – Brasil
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.museuoscarniemeyer.org.br/visite/visita-virtual-3D")}>
        Museu Oscar Niemeyer 
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://artsandculture.google.com/project/museu-nacional-brasil")}>
        Museu Nacional 
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("http://www.eravirtual.org/museu-casa-guignard/?utm_medium=website&utm_source=archdaily.com.br")}>
        Museu Casa Guignard
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("http://www.eravirtual.org/casa-de-cora-coralina/?utm_medium=website&utm_source=archdaily.com.br")}>
        Casa de Cora Coralina
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("http://www.eravirtual.org/casa-de-guimaraes-rosa/?utm_medium=website&utm_source=archdaily.com.br")}>
        Casa de Guimarães Rosa
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://www.museucasadeportinari.org.br/TOUR-VIRTUAL/?utm_medium=website&utm_source=archdaily.com.br")}>
        Museu Casa Portinari
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("http://www.eravirtual.org/museu-da-republica/?utm_medium=website&utm_source=archdaily.com.br")}>
        Museu da República
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("https://artsandculture.google.com/partner/museu-afro-brasil")}>
        MUSEU AFRO BRASIL (SÃO PAULO)
        </Text>

        <Text style={styles.text} onPress={() => Linking.openURL("http://infograficos.oglobo.globo.com/rio/museu-do-amanha.html")}>
        MUSEU DO AMANHÃ (RIO DE JANEIRO)
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

  text2: {
    alignSelf:"center",
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
