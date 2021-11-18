import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';
import Home from '../screens/Home';
import NewPurchase from '../screens/NewPurchase';

const { Navigator, Screen } = createStackNavigator();

const StackRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="Welcome" component={Welcome} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="Login" component={Login} />
      <Screen name="Home" component={Home} />
      <Screen name="NewPurchase" component={NewPurchase} />
    </Navigator>
  );
};

export default StackRoutes;