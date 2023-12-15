import {Button, Text, View} from 'react-native';
import React from 'react';
import {RootStackScreenProps} from '../../../Routes/types';

export const AuthScreen = ({navigation}: RootStackScreenProps<'Auth'>) => {
  return (
    <View>
      <Text>AuthScreen</Text>
      <Button
        title="Navigate to Main Stack"
        onPress={() => navigation.navigate('MainTabs')}
      />
    </View>
  );
};
