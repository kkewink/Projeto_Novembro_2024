import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>ROBLOX</Text>
      <StatusBar style="auto" />
      <Text></Text>
      <Text></Text>
      <Text>carregando...</Text>
      <Button title='ir pra load'
        onPress={() => navigator.navigate("load")}
      />
    </View>
  );
}

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
  }
});
