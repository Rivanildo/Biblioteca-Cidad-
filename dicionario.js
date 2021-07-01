import React from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Constants from 'expo-constants';


export default function dicionario(props)
{
  return(
    <SafeAreaView style={styles.container}>
      
    <ScrollView style={styles.scrollView}>
      <Text style={styles.text}>
dicionario ok     
     
      </Text>
    </ScrollView>
  </SafeAreaView>



  
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  marginTop: Constants.statusBarHeight,
},
scrollView: {
  /*backgroundColor: 'pink',*/
  marginHorizontal: 20,
},
text: {
  textAlign:'justify',
  fontSize: 20,
},

});