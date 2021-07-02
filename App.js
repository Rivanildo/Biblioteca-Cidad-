import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import Home2 from './Home2';
import pomodoro from './pomodoro';
import propulsao from './propulsao'
import pv from './pv';
import estudo from './estudo';
import noticias from './noticias';
import sobre from './sobre';
import biblioteca from './biblioteca';
import dicionario from './dicionario';

import Humanas from './bibSessoes/Chumanas';

export default function App() {
  const Stack = createStackNavigator();

  return (
<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen  name="Propulsão" component={propulsao} options={{headerStyle:{backgroundColor: "#ea8198" } }} />
        <Stack.Screen options={{headerShown: true}} name="pomodoro" component={pomodoro} />
       
        <Stack.Screen name="Projeto de Vida" component={pv} options={{headerStyle:{backgroundColor: "#ea8198" } }}/>
        <Stack.Screen options={{headerShown: true}} name="Estudo Orientado" component={estudo} options={{headerStyle:{backgroundColor: "#ea8198" } }} />
        <Stack.Screen options={{headerShown: true}} name="Notícias" component={noticias} options={{headerStyle:{backgroundColor: "#ea8198" } }} />
        <Stack.Screen options={{headerShown: true}} name="Sobre" component={sobre} options={{headerStyle:{backgroundColor: "#ea8198" } }} />
        <Stack.Screen options={{headerShown: true}} name="Biblioteca" component={biblioteca}  options={{headerStyle:{backgroundColor: "#2a6dc7" } }}/>
        <Stack.Screen options={{headerShown: true}} name="Dicionário" component={dicionario} options={{headerStyle:{backgroundColor: "#dcbb71" } }} />

        <Stack.Screen options={{headerShown: false}} name="Humanas" component={Humanas} />
      
      
      </Stack.Navigator>
    </NavigationContainer>



 
  );
}

