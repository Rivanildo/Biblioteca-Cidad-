/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, { Component } from 'react';
 import { LogBox, Platform, StyleSheet, Text, View, ScrollView, Image,ImageBackground } from 'react-native';
 import DropDownItem from 'react-native-drop-down-item';


 const IC_ARR_DOWN = require('./icons/ic_arr_down.png');
 const IC_ARR_UP = require('./icons/ic_arr_up.png');
 
 type Props = {};
 export default class dicionario extends Component<Props> {
   state = {
     contents: [
       {
         title: 'Amor',
         body: 'Hi. I love this component. What do you think?',
       },
       {
         title: 'Avião',
         body: 'Yes. You can have more items.',
       },
       {
         title: 'Abelha',
         body: 'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
       },
     ],
   };


 
   render() {
  
    return (
       <View style={styles.container}>
         <ImageBackground source={require('./assets/img/bg-dicionario.png')} style={styles.img}>

         <Image  source={require('./assets/img/manual.png')} />

           <ScrollView style={{ alignSelf: 'stretch', marginTop:55 }}>

              <Text style={styles.texto1} >
              Por que existir um Manual de Linguagem Cidadã?

              </Text>
              <Text style={styles.txt2} >
              O Manual de Linguagem Cidadã nasceu a partir de uma inquietação relacionada ao uso legítimo, pertinente e não-excludente de palavras, termos e expressões, em documentos de interesse público que fazem parte da rotina escolar da Rede Estadual de Educação.

              </Text>
              <Text style={styles.txt2} >
              A ideia fundamental é que, inspirados/as pelo princípio da equidade, possamos utilizar, nos textos produzidos pelas escolas e pelas instituições públicas, uma linguagem plural, inclusiva e não-violenta.
              </Text>
              <Text style={styles.txt2} >
              É importante destacar que esse material é um instrumento facilitador e orientador. Afinal, todas e todos nós estamos aprendendo!
              </Text>


              <Text style={styles.texto1} >
              Orientações
              </Text>

              <Text style={styles.texto1} >
              

              1- Ênfase na equidade de gênero e na inclusão
      
              </Text>

              <Text style={styles.txt2} >
              - Uso de termos ou vocábulos que contemplem expressões genéricas para se referir à coletividade.	
              Ex: pessoa, população, humanidade, direção, assessoria, corpo docente, equipe médica.

              </Text>


              <Text style={styles.txt2} >
            - Indicação das formas feminina e masculina em substituição à predominância da forma masculina. 
            Ex: Em vez de "Reunião de pais e professores”, substituta por “Reunião de mães, pais, professoras e professores” ou "Reunião de famílias e docentes".
            Ex: Este é um direito básico que deve ser garantido a toda cidadã e a todo cidadão.

              </Text>
              <Text style={styles.txt2} >
            - Indicação das formas feminina e masculina por meio de uso de artigo ou pronome, quando o nome for comum de dois gêneros.
            Ex.: a/o cientista, o paciente ou a paciente, o/a estudante, o/a jovem, o/a bolsista etc.
              </Text>

              <Text style={styles.txt2} >
            - Observância do nome social de estudantes, professoras, professores, funcionárias e funcionários no Sistema Saber e nos crachás de identificação.
              </Text>





             {
               this.state.contents
                 ? this.state.contents.map((param, i) => {
                   return (
                     <DropDownItem
                       key={i}
                       style={styles.dropDownItem}
                     
                       contentVisible={false}
                       invisibleImage={IC_ARR_DOWN}
                       visibleImage={IC_ARR_UP}
                       header={
                         <View style={styles.header}>
                           <Text style={{
                             fontSize: 16,
                             color: 'blue',
                           }}>{param.title}</Text>
                         </View>
                       }
                     >
                       <Text style={[
                         styles.txt,
                         {
                           fontSize: 20,
                         },
                       ]}>
                         {param.body}
                       </Text>
                     </DropDownItem>
                   );
                 })
                 : null
             }
             <View style={{ height: 96 }} />
           </ScrollView>
         </ImageBackground>
       </View> 
     ); 
   }
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
     
   },

   header: {
     width: '100%',
     paddingVertical: 8,
     paddingHorizontal: 12,
     flexWrap: 'wrap',
     flexDirection: 'row',
     alignItems: 'center',
   },

   
   headerTxt: {
     fontSize: 12,
     color: 'rgb(74,74,74)',
     marginRight: 60,
     flexWrap: 'wrap',
   },
   txt: {
     fontSize: 14,
   },

    txt2: {
    textAlign:"justify",
    fontSize: 20,
    marginLeft:10,
    marginRight:15,
    marginBottom:10,
    color: "white",
   },
 texto1: {
    textAlign:"justify",
    fontSize: 20,
    marginLeft:10,
    marginRight:15,
    marginBottom:10,
    color: "white",
    fontWeight:"bold",
   },

   img:{
    flex: 1,
    alignItems: "center",
    
  },
 });