import React from 'react'
import AwesomeAlert from 'react-native-awesome-alerts'

const Alert = ({ show, onConfirmPressed }) => {
  return (
    <AwesomeAlert
        show={show}
        showProgress={false}
        title="Registration Completed"
        showConfirmButton={true}
        confirmText="Sign Up"
        onConfirmPressed={onConfirmPressed}
        confirmButtonColor='#5E6666'
      />
  );
};

export default Alert;