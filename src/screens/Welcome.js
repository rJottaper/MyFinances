import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import WelcomeSVG from '../assets/welcome.svg'
import Button from '../components/Button';

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <WelcomeSVG width={250} height={250} />
        <Text style={styles.title}>One App That {'\n'} Manage Your {'\n'} Money</Text>
      </View>
      <Button title="CONTINUE" backgroundColor="#5E6666" color="#E2E2E2" onPress={() => navigation.navigate('SignUp')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2e2e2'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5e6666'
  }
});

export default Welcome;