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

export const AuthScreen = ({navigation}: RootStackScreenProps<'Auth'>) => {
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
        <View
          padding={20}
          style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            onPress={onPress}
            style={{
              backgroundColor: '#9DB5B2',
              paddingVertical: 10,
              paddingHorizontal: 30,
              borderRadius: 10,
              justifyContent: 'center',
            }}>
            <View>
              <Text style={{color: '#FFFFFF'}}>Start</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ImportWallet')}
            style={{
              backgroundColor: '#9DB5B2',
              paddingVertical: 10,
              paddingHorizontal: 30,
              borderRadius: 10,
              justifyContent: 'center',
            }}>
            <View>
              <Text style={{color: '#FFFFFF'}}>Import</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};
