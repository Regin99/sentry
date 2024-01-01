import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamList} from './types';
import {
  AuthScreen,
  CreateWallet,
  ImportWalletScreen,
} from '../features/Auth/screens';
import {CreateWalletConfirm} from '../features/Auth/screens/CreateWalletConfirm';

export const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Auth" component={AuthScreen} />
      <AuthStack.Screen name="CreateWallet" component={CreateWallet} />
      <AuthStack.Screen
        name="CreateWalletConfirm"
        component={CreateWalletConfirm}
      />
      <AuthStack.Screen name="ImportWallet" component={ImportWalletScreen} />
    </AuthStack.Navigator>
  );
};
