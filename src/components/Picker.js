import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'

const PickerInput = ({ IOS, type, setType }) => {
    if (IOS) {
      return (
        <Picker
          selectedValue={type}
          onValueChange={setType}
          style={styles.picker}
          >
          <Picker.Item label="Type" value="Type" />
          <Picker.Item label="Personal" value="Personal" />
          <Picker.Item label="Food" value="Food" />
          <Picker.Item label="Hygiene" value="Hygiene" />
          <Picker.Item label="Others" value="Others" /> 
        </Picker>
      )
    } else {
        return (
        <Picker
          selectedValue={type}
          onValueChange={(itemValue, itemIndex) =>
            setType(itemValue)
          }
          style={styles.pickerAndroid}
        >
          <Picker.Item label="Personal" value="Personal" />
          <Picker.Item label="Food" value="Food" />
          <Picker.Item label="Hygiene" value="Hygiene" />
          <Picker.Item label="Others" value="Others" /> 
        </Picker>
    );
  };
};

const styles = StyleSheet.create({
  picker: {
    backgroundColor: '#E2E2E2',
    marginHorizontal: 15,
    marginTop: 15,
    height: 200,
    borderRadius: 15,
  },
  pickerAndroid: {
    marginHorizontal: 15,
    color: '#E2E2E2',
  }
});

export default PickerInput;

