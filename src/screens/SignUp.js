import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../components/Button';
import Input from '../components/Input';
import Alert from '../components/Alert';

const SignUp = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Alert
  const [showAlert, setShowAlert] = useState(false);

  const hideAlert = () => {
    setShowAlert(false);
    navigation.navigate('Login');
  };

  // Validation 
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidUsername, setIsValidUsername] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const CreateAccount = () => {
    if (username == '' && password == '' && email == '') {
      setIsValidEmail(false);
      setIsValidUsername(false);
      setIsValidPassword(false);
    };
    let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(valid.test(email) === false) {
      setIsValidEmail(false)
      setEmail(email)
      return false
    };
    if (username == '' || username == null || username.length < 4) {
      return setIsValidUsername(false)
    };
    if (password == '' || password == null || password.length < 6) {
      return setIsValidPassword(false)
    };
    setShowAlert(true);
  };

  const TextInputValue = (value) => {
    setEmail(value);
    let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(valid.test(email) === true) {
      setIsValidEmail(true)
      return true
    };
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
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.greetings}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subtitle}>Sign Up to Continue</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.inputs}>
            <Input title="E-mail" name="at" value={email} newValue={(value) => TextInputValue(value)} placeholder="Your E-mail" />
            {isValidEmail ? null : <Text style={styles.msgError}>Please, put a e-mail</Text>}
            <Input title="Username" name="user" value={username} newValue={(value) => TextInputUsernameValue(value)} placeholder="Your Username" />
            {isValidUsername ? null : <Text style={styles.msgError}>Please, put a username</Text>}
            <Input title="Password" name="lock" value={password} newValue={(value) => TextInputPasswordValue(value)} placeholder="Your Password" secureTextEntry={true} />
            {isValidPassword ? null : <Text style={styles.msgError}>Please, put a password</Text>}
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.signin}>Do You Already Have an Account? Sign In</Text>
            </TouchableOpacity>
          </View>
          <Button title="Register" backgroundColor='#E2E2E2' color="#5e6666" onPress={() => CreateAccount()} />
        </View>
        <Alert show={showAlert} onConfirmPressed={() => hideAlert()} />
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
    fontSize: 16,
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
  signin: {
    fontSize: 14,
    marginTop: 10,
    marginLeft: 15,
    color: '#8d9697'
  },
  msgError: {
    marginLeft: 15,
    marginTop: 5,
    color: '#ff305e',
    fontWeight: 'bold'
  }
});

export default SignUp;