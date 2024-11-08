import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoadScreen from "./src/js/loadScreen";
import EscolhaScreen from "./src/js/EscolhaScreen";
import CadastroScreen from "./src/js/CadastroScreen";
import LoginScreen from "./src/js/LoginScreen";
import HomeScreen from './src/js/HomeScreen';

const Stack = createStackNavigator();

function App(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="load">
                <Stack.Screen name="Load" component={LoadScreen}/>
                <Stack.Screen name="Escolha" component ={EscolhaScreen}/>
                <Stack.Screen name="Cadastrar" component={CadastroScreen}/>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Home" component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;