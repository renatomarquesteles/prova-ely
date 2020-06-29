import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Lista({ navigation }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    const refreshScreen = navigation.addListener('focus', () => {
      getAvioes();
    });
    return refreshScreen;
  }, [navigation]);

  function getAvioes() {
    fetch('https://crudcrud.com/api/a7355f7b73574693b46e5be92645bff2/avioes')
      .then((response) => response.json())
      .then((data) => {
        setList(data);
      })
      .catch((error) => console.error(error))
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            'https://www.airway.com.br/wp-content/uploads/2020/03/Zunum-960x640.jpg',
        }}
        style={styles.banner}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Lista de aviões! ✈</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Novo')}>
          <Text style={styles.btnText}>+ CADASTRAR AVIÃO</Text>
        </TouchableOpacity>
        {list.map((item) => (
          <View key={item._id} style={styles.listItemContainer}>
            <Text style={styles.listItemText}>Modelo: {item.modelo}</Text>
            <Text style={styles.listItemText}>Ano: {item.ano}</Text>
            <Text style={styles.listItemText}>Companhia: {item.companhia}</Text>
            <Text style={styles.listItemText}>Passageiros: {item.passageiros}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a73e8',
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
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
  banner: {
    width: '100%',
    height: 160,
  },
  listItemContainer: {
    padding: 10,
    marginVertical: 4,
    backgroundColor: '#689de3',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#accaf2',
  },
  listItemText: {
    color: '#fff',
  },
});
