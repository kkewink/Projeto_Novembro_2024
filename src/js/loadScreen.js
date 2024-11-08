import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const LoadScreen = ({ navigation }) => {
  useEffect(() => {
    // Aguarda 3 segundos e redireciona para a tela "Home"
    const timer = setTimeout(() => {
      navigation.replace('Home'); // Muda para a tela "Home" sem permitir voltar
    }, 200); // 3000 ms = 3 segundos

    // Limpeza do temporizador se o componente for desmontado antes de 3 segundos
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#00ff00" />
      <Text style={styles.loadingText}>Carregando...</Text>
    </View>
  );
};
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      texto:{
        display:"flex",
        color:"black",
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: "center",
      },
    });

    export default LoadScreen;