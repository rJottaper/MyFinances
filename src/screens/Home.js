import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Card from '../components/Card';

const Home = ({ route }) => {
  const navigation = useNavigation();

  const [purchase, setPurchase] = useState([]);

  useEffect(() => {
    if (route.params) {
      const { product, value, type, newDate } = route.params;
      setPurchase(oldData => [ ...oldData, { product, value, type, newDate }]);
    };
  }, [route.params]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>MyFinances</Text>
      <View style={styles.content}>
        <Text style={styles.text}>What We Will Buy Today?</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NewPurchase')}>
          <FontAwesome style={styles.icon} name="plus" />
        </TouchableOpacity>
      </View>
      <View style={styles.products}>
        <FlatList 
          data={purchase}
          keyExtractor={(item, index) => 'key' + index}
          renderItem={({ item }) => <Card product={item.product} place={item.type} date={item.newDate} value={item.value} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2E2E2'
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 10
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#5E6666',
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5E6666',
    flex: 1
  },
  button: {
    backgroundColor: '#5E6666',
    width: 35,
    height: 35,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E2E2E2',
    marginTop: 3
  },
  products: {
    flex: 1
  }
});

export default Home;