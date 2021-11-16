import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Input = ({ title, name, value, newValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.bord} />
      <View style={styles.inputView}>
        <FontAwesome style={styles.icon} name={name} />
        <TextInput style={styles.input} value={value} onChangeText={newValue} placeholder={placeholder} secureTextEntry={secureTextEntry} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10,
    color: '#E2E2E2',
  },
  bord: {
    borderBottomWidth: 1,
    borderColor: '#e2e2e2',
    width: '40%',
    marginLeft: 15
  },
  inputView: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 15,
    marginBottom: 6,
    borderBottomWidth: 1,
    borderColor: '#E2E2E2',
    padding: 7
  },
  icon: {
    fontSize: 20,
    color: '#E2E2E2',
    marginTop: 1
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: '#E2E2E2'
  }
});

export default Input;