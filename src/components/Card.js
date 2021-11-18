import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import CardSVG from '../assets/card.svg'

const { height, width } = Dimensions.get('screen')

const Card = ({ product, place, date, value }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <CardSVG width={70} height={70} />
        <Text style={styles.product}>{product.toUpperCase()}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.place}>{place}</Text>
        <View style={styles.dateView}>
          <FontAwesome style={styles.icon} name="calendar" />
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <Text style={styles.value}>U$ {value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#5E6666',
    height: height / 3,
    marginHorizontal: 15,
    marginTop: 20,
    borderRadius: 15
  },
  header: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 15
  },
  product: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E2E2E2',
    marginTop: 15,
    marginRight: 15,
    textAlign: 'center'
  },
  content: {
    flex: 1,
    marginTop: 10,
    marginLeft: 15
  },
  place: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E2E2E2'
  },
  dateView: {
    flexDirection: 'row',
    marginTop: 10
  },
  icon: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E2E2E2',
    marginTop: 2,
    marginRight: 5
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E2E2E2'
  },
  value: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E2E2E2',
    marginBottom: 10
  }
});

export default Card;