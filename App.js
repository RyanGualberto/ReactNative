import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, TextInput, Text, View } from 'react-native';
import Dados from './src/components/Dados';

export default function App() {

  const [cidade, setCidade] = useState('Mongagua')
  const [list, setList] = useState('false')

  function mostrarDados() {
    setList('Active')
    console.log(list);
    if (list === 'Active') {
      return (
        <View>
          <Dados />
        </View>
      )
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Previsão do Tempo</Text>
      <View style={styles.item}>
        <Text style={styles.textDefault}>Cidade:</Text>
        <TextInput style={styles.input} value={cidade} onChange={e => setCidade(e.target.value)} />
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={mostrarDados}
        >
          <Text
            style={styles.textButton}>
            Buscar
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B2B40',
    alignItems: 'center',
    justifyContent: 'center',

  },
  title: {
    fontSize: '2rem',
    color: '#F2BE22',
    fontWeight: 600,
    position: 'absolute',
    top: '10%'
  },
  item: {
    height: 100
  },
  input: {
    marginTop: 10,
    height: 40,
    width: '300px',
    borderRadius: 5,
    backgroundColor: '#A6874E',
    color: '#fcfcfc',
    padding: 5
  },
  textDefault: {
    color: '#F2BE22',
    fontWeight: '600',
    fontSize: '1.4rem'
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    height: 35,
    width: '100px',
    borderRadius: 5,
    backgroundColor: '#A6874E',
    color: '#fcfcfc',
    textAlign: 'center',
  },
  textButton: {
    color: 'white',
    fontWeight: '600'
  }

});
