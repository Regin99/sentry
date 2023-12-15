import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamList} from './types';
import {AuthScreen} from '../features/Auth/screens';

export const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Auth" component={AuthScreen} />
    </AuthStack.Navigator>
  );
};
