import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Button from '../components/Button';
import Input from '../components/Input';

const Login = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Validation
  const [isValidUsername, setIsValidUsername] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  
  const SignInAccount = () => {
    if (username == '' && password == '') {
      setIsValidUsername(false);
      setIsValidPassword(false);
    };
    if (username == '' || username == null || username.length < 4) {
      return setIsValidUsername(false)
    };
    if (password == '' || password == null || password.length < 6) {
      return setIsValidPassword(false)
    };
    navigation.navigate('Home')
  };

  const TextInputUsernameValue = (value) => {
    setUsername(value);
    if (value.length >= 4) {
      setIsValidUsername(true);
    };
  };

  const TextInputPasswordValue = (value) => {
    setPassword(value);
    if (value.length >= 6) {
      setIsValidPassword(true);
    };
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome style={styles.icon} name="chevron-left" />
        </TouchableOpacity>
        <View style={styles.greetings}>
          <Text style={styles.title}>Welcome Back,</Text>
          <Text style={styles.subtitle}>Sign In to Continue</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.inputs}>
            <Input title="Username" name="user" value={username} newValue={(value) => TextInputUsernameValue(value)} placeholder="Your Username" />
            {isValidUsername ? null : <Text style={styles.msgError}>Please, put a username</Text>}
            <Input title="Password" name="lock" value={password} newValue={(value) => TextInputPasswordValue(value)} placeholder="Your Password" secureTextEntry={true} />
            {isValidPassword ? null : <Text style={styles.msgError}>Please, put a password</Text>}
          </View>
          <Button title="Sign Up" backgroundColor='#E2E2E2' color="#5e6666" onPress={() => SignInAccount()} />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2e2e2'
  },
  greetings: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 15
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',    
    color: '#5E6666'
  },
  subtitle: {
    fontSize: 18,
    color: '#5E6666'
  },
  content: {
    flex: 4,
    backgroundColor: '#5e6666',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  inputs: {
    flex: 1,
    marginTop: 25
  },
  icon: {
    fontSize: 18,
    color: '#5E6666',
    marginLeft: 15,
    marginTop: 20
  },
  msgError: {
    marginLeft: 15,
    marginTop: 5,
    color: '#ff305e',
    fontWeight: 'bold'
  }
});

export default Login;