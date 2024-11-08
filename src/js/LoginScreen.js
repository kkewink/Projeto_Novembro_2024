import React, { useState } from "react";
import{ Alert, View,} from 'react-native';

const LoginScreen = () =>{
    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');

    const validarLogin = () =>{
        if(!username || !senha){
            Alert.alert('Erro', 'Todos os campos são obrigatórios');
            return; 
        }
    }
    Alert.alert('Sucesso','Login realizado ocm sucesso!');

    return(
        <View style={styles.container}>
        <Text style={styles.titulo}>Realize o Login</Text>
        
        <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
        />
        <TextInput 
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
        />

        <Button title="Logar" onPress={validarLogin}/>
    </View>
    );
};


export default LoginScreen;