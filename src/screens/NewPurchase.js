import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableWithoutFeedback, ScrollView, StyleSheet, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Input from '../components/Input'
import InputValue from '../components/InputValue';
import DatePicker from '../components/DateInput';
import Button from '../components/Button'
import PickerInput from '../components/Picker';

const NewPurchase = () => {
  const navigation = useNavigation();

  const [product, setProduct] = useState('');
  const [value, setValue] = useState('');
  const [type, setType] = useState('');

  // Calendar Part
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setIsDatePickerVisible(true);
  }; 

  const hideDatePicker = () => {
    setIsDatePickerVisible(false);
  };

  const handleConfirm = (date) => {
    setDate(date);
    hideDatePicker();
  };

  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  const newDate = day + '/' + month + '/' + year;

  // Validation
  const sendItems = () => {
    navigation.navigate('Home', {
      product: product,
      value: value,
      type: type,
      newDate: newDate
    });
  };

  return (
    <TouchableWithoutFeedback 
      onPress={Keyboard.dismiss}
    >
      <ScrollView style={styles.container}>
        <SafeAreaView style={styles.container}>
          <View style={styles.greetings}>
            <Text style={styles.title}>Hey,</Text>
            <Text style={styles.subtitle}>What did you buy?</Text>
          </View>
            <View style={styles.content}>
              <Input title="Product" name="shopping-cart" placeholder="Your Product" value={product} newValue={setProduct} />
              <InputValue title="Value" value={value} newValue={(value) => setValue(value)} />
              <PickerInput 
                IOS 
                type={type}
                setType={(itemValue, itemIndex) =>
                  setType(itemValue)
                }  
              />
              <DatePicker 
                  title="Date" 
                  showDatePicker={() => showDatePicker()} 
                  hideDatePicker={() => hideDatePicker()} 
                  newDate={newDate.toString()} 
                  handleConfirm={(date) => handleConfirm(date)}
                  isDatePickerVisible={isDatePickerVisible}  
                />
              <Button title="Purchase" backgroundColor="#E2E2E2" color="#5E6666" onPress={() => sendItems()} />
            </View>
        </SafeAreaView>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2E2E2'
  },
  greetings: {
    marginTop: 15,
    marginLeft: 15,
    marginBottom: 10
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
});

export default NewPurchase;