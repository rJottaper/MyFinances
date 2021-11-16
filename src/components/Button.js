import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ title, backgroundColor, color, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: backgroundColor }]} onPress={onPress}>
      <Text style={[styles.buttonTitle, { color: color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 46,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 10,
  }, 
  buttonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default Button;