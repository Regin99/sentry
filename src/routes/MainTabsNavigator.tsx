import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainScreen, SettingsScreen} from '../features/Main/screens';

const Tab = createBottomTabNavigator();

export const MainTabsNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Main">
      <Tab.Screen name="Main" component={MainScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
