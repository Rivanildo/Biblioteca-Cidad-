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
import Matematica from './bibSessoes/Cmatematica';
import Naturezas from './bibSessoes/Cnaturezas';
import Dicionarios from './bibSessoes/dicionarios';
import Empreendedorismo from './bibSessoes/empreendedorismo';
import Literatura from './bibSessoes/literatura';
import Manga from './bibSessoes/manga';
import Midias from './bibSessoes/midias';
import Realidade from './bibSessoes/realidadeVirtual';
import TecEstudos from './bibSessoes/tecEstudos';

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

        <Stack.Screen options={{headerShown: true}} name="Humanas" component={Humanas} options={{headerStyle:{backgroundColor: "#2a6dc7" } }} />
        <Stack.Screen options={{headerShown: true}} name="Matematica" component={Matematica} options={{headerStyle:{backgroundColor: "#2a6dc7" } }} />
        <Stack.Screen options={{headerShown: true}} name="Naturezas" component={Naturezas} options={{headerStyle:{backgroundColor: "#2a6dc7" } }} />
        <Stack.Screen options={{headerShown: true}} name="Dicionarios" component={Dicionarios} options={{headerStyle:{backgroundColor: "#2a6dc7" } }} />
        <Stack.Screen options={{headerShown: true}} name="Empreendedorismo" component={Empreendedorismo} options={{headerStyle:{backgroundColor: "#2a6dc7" } }} />
        <Stack.Screen options={{headerShown: true}} name="Literatura" component={Literatura} options={{headerStyle:{backgroundColor: "#2a6dc7" } }} />
        <Stack.Screen options={{headerShown: true}} name="Manga" component={Manga} options={{headerStyle:{backgroundColor: "#2a6dc7" } }} />
        <Stack.Screen options={{headerShown: true}} name="Midias" component={Midias} options={{headerStyle:{backgroundColor: "#2a6dc7" } }} />
        <Stack.Screen options={{headerShown: true}} name="Realidade Virtual" component={Realidade} options={{headerStyle:{backgroundColor: "#2a6dc7" } }} />
        <Stack.Screen options={{headerShown: true}} name="TecEstudos" component={TecEstudos} options={{headerStyle:{backgroundColor: "#2a6dc7" } }} />
      </Stack.Navigator>
    </NavigationContainer>



 
  );
}

