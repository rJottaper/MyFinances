import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CurrencyInput from 'react-native-currency-input';

const InputValue = ({ title, value, newValue }) => {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.bord} />
      <View style={styles.inputValue}>
        <Text style={styles.value}>U$</Text>
        <CurrencyInput 
          style={styles.input}
          value={value}
          onChangeValue={newValue}
          keyboardType="number-pad"
          maxLength={10}
        />
      </View>
    </>
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
  inputValue: {
    flexDirection: 'row',
    backgroundColor: '#E2E2E2',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginHorizontal: 15,
    marginTop: 10,
    borderRadius: 8
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5E6666',
    marginLeft: 5
  },
  input: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5E6666',
    marginLeft: 5
  }
});

export default InputValue;