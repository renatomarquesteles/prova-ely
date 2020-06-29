import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function Novo({ navigation }) {
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [companhia, setCompanhia] = useState('');
  const [passageiros, setPassageiros] = useState('');
  const [errors, setErrors] = useState('');

  function handleSubmit() {
    if (!modelo || !ano || !companhia || !passageiros) {
      setErrors('Por favor, preencha todos os campos!');
      return;
    } else {
      setErrors(null);
    }

    const airplane = { modelo, ano, companhia, passageiros };

    fetch('https://crudcrud.com/api/a7355f7b73574693b46e5be92645bff2/avioes', {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'POST',
      body: JSON.stringify(airplane),
    })
      .then((response) => response.json())
      .then((data) => {
        setErrors('');
        navigation.navigate('Lista');
      })
      .catch((error) => {
        setErrors('Ocorreu um erro ao cadastrar avião.');
        console.error(error);
      });
  }

  return (
    <View style={styles.content}>
      <Text style={styles.h1}>Cadastrar um novo avião</Text>
      {errors && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errors}</Text>
        </View>
      )}
      <TextInput
        value={modelo}
        style={styles.input}
        onChangeText={(text) => setModelo(text)}
        placeholder="Modelo*"
        placeholderTextColor="#f0f0f0"
      />
      <TextInput
        keyboardType="number-pad"
        value={ano}
        style={styles.input}
        onChangeText={(text) => setAno(text)}
        placeholder="Ano*"
        placeholderTextColor="#f0f0f0"
      />
      <TextInput
        value={companhia}
        style={styles.input}
        onChangeText={(text) => setCompanhia(text)}
        placeholder="Companhia de Voo*"
        placeholderTextColor="#f0f0f0"
      />
      <TextInput
        keyboardType="number-pad"
        value={passageiros}
        style={styles.input}
        onChangeText={(text) => setPassageiros(text)}
        placeholder="Nº de passageiros*"
        placeholderTextColor="#f0f0f0"
      />
      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.btnText}>SALVAR</Text>
      </TouchableOpacity>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={{
            uri:
              'https://cdn.iconscout.com/icon/free/png-512/aeroplane-airplane-plane-air-transportation-vehicle-pessanger-people-emoj-symbol-30708.png',
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1a73e8',
  },
  errorContainer: {
    backgroundColor: '#f7b0b0',
    padding: 8,
    borderRadius: 4,
  },
  errorText: {
    color: '#8a2828',
  },
  h1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f5f5f5',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#689de3',
    borderColor: '#accaf2',
    color: '#fff',
    height: 32,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  btn: {
    width: '100%',
    height: 36,
    padding: 5,
    marginVertical: 10,
    borderRadius: 4,
    backgroundColor: '#54aeef',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
  },
  imgContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 15,
  },
  img: {
    width: 110,
    height: 110,
  },
});
