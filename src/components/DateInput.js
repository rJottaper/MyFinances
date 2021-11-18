import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DatePicker = ({ title, date, showDatePicker, newDate, hideDatePicker, handleConfirm, isDatePickerVisible }) => {
  const maxDate = new Date('2038-01-01');

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.bord} />
      <TouchableOpacity style={styles} style={styles.container} onPress={showDatePicker}>
        <FontAwesome style={styles.icon} name="calendar" />
        <Text style={styles.date}>{newDate}</Text>
        <FontAwesome style={styles.icon2} name="chevron-right" />
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        minimumDate={new Date()}
        
        date={date}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E2E2E2',
    marginHorizontal: 15,
    height: 45,
    borderRadius: 10,
    marginBottom: 20
  },
  title: {
    fontSize: 18,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10,
    color: '#E2E2E2',
  },
  bord: {
    borderBottomWidth: 1,
    borderColor: '#E2E2E2',
    width: '40%',
    marginLeft: 15,
    marginBottom: 10
  },
  date: {
    fontSize: 19,
    color: '#5E6666'
  },
  icon: {
    fontSize: 32,
    color: '#5E6666',
    marginLeft: 15,
  },
  icon2: {
    fontSize: 17,
    color: '#5E6666',
    marginRight: 15,
    marginTop: 2
  }
});

export default DatePicker;