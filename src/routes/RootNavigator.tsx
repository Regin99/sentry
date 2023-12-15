import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './RootStack';
import {AuthScreen} from '../features/Auth/screens';
import {MainTabsNavigator} from './MainTabsNavigator';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {/* <RootStack.Screen name="Auth" component={AuthScreen} /> */}
        <RootStack.Screen name="MainTabs" component={MainTabsNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
