import {
  Button,
  LogBox,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {RootStackScreenProps} from '../../../Routes/types';
import {addWallet} from '../../../rtk/slices';
import {useDispatch} from 'react-redux';
import {ethers} from 'ethers';

export const AuthScreen = ({}: RootStackScreenProps<'Auth'>) => {
  const dispatch = useDispatch();

  const onPress = () => {
    const start = performance.now();
    const wallet = ethers.Wallet.createRandom();
    const end = performance.now();
    console.log(`Creating a Wallet took ${end - start} ms.`);
    dispatch(addWallet(wallet));
  };

  LogBox.ignoreAllLogs(); //Ignore all log notifications
  return (
    <View style={{backgroundColor: '#3B413C', flex: 1}}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{justifyContent: 'flex-end', flex: 1}}>
        <View padding={20}>
          <TouchableOpacity
            onPress={onPress}
            style={{backgroundColor: '#9DB5B2', padding: 20, borderRadius: 10}}>
            <View>
              <Text style={{color: '#FFFFFF'}}>Start</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};
