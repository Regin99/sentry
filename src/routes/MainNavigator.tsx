import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from './types';
import {MainTabsNavigator} from './MainTabsNavigator';

export const MainStack = createNativeStackNavigator<MainStackParamList>();

export const MainNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="MainTabs" component={MainTabsNavigator} />
    </MainStack.Navigator>
  );
};
