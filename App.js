import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { LogBox, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

LogBox.ignoreAllLogs();

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
import Podcasts from './bibSessoes/podcast';
import Realidade from './bibSessoes/realidadeVirtual';
import TecEstudos from './bibSessoes/tecEstudos';

import lit_africana from './bibSessoes/lit_africana';
import lit_americana from './bibSessoes/lit_americana';
import lit_brasileira from './bibSessoes/lit_brasileira';
import lit_infantil from './bibSessoes/lit_infantil';
import lit_mulheres_negras from './bibSessoes/lit_mulheres_negras';
import lit_mulheres_paraibanas from './bibSessoes/lit_mulheres_paraibanas';

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
        <Stack.Screen options={{headerShown: true}} name="Podcasts" component={Podcasts} options={{headerStyle:{backgroundColor: "#2a6dc7" } }} />
        <Stack.Screen options={{headerShown: true}} name="Realidade Virtual" component={Realidade} options={{headerStyle:{backgroundColor: "#2a6dc7" } }} />
        <Stack.Screen options={{headerShown: true}} name="Tecnicas de Estudo" component={TecEstudos} options={{headerStyle:{backgroundColor: "#2a6dc7" } }} />
      
        <Stack.Screen options={{headerShown: true}} name="Literatura Africana" component={lit_africana} options={{headerStyle:{backgroundColor: "#2a6dc7" } }} />
        <Stack.Screen options={{headerShown: true}} name="Literatura Americana" component={lit_americana} options={{headerStyle:{backgroundColor: "#2a6dc7" } }} />
        <Stack.Screen options={{headerShown: true}} name="Literatura Brasileira" component={lit_brasileira} options={{headerStyle:{backgroundColor: "#2a6dc7" } }} />
        <Stack.Screen options={{headerShown: true}} name="Literatura Infanto Juvenil" component={lit_infantil} options={{headerStyle:{backgroundColor: "#2a6dc7" } }} />
        <Stack.Screen options={{headerShown: true}} name="Mulheres Negras" component={lit_mulheres_negras} options={{headerStyle:{backgroundColor: "#2a6dc7" } }} />
        <Stack.Screen options={{headerShown: true}} name="Mulheres Paraibanas" component={lit_mulheres_paraibanas} options={{headerStyle:{backgroundColor: "#2a6dc7" } }} />
      </Stack.Navigator>
    </NavigationContainer>



 
  );
}

