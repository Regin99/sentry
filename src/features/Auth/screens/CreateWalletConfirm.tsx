import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Screen} from '../../../components/molecules';
import {RootStackScreenProps} from '../../../routes/types';
import {useDispatch} from 'react-redux';
import {addWallet} from '../../../rtk/slices';

export const CreateWalletConfirm = ({
  navigation,
  route,
}: RootStackScreenProps<'CreateWalletConfirm'>) => {
  const dispatch = useDispatch();
  const splittedMnemonic = route.params.mnemonic.split(' ');
  return (
    <Screen>
      <View style={styles.splittedContainer}>
        <View style={{width: '50%'}}>
          {splittedMnemonic.length &&
            splittedMnemonic
              .slice(0, splittedMnemonic.length / 2)
              .map((item, index) => (
                <Text key={index} style={styles.text}>
                  {item}
                </Text>
              ))}
        </View>
        <View style={{width: '50%'}}>
          {splittedMnemonic.length &&
            splittedMnemonic
              .slice(splittedMnemonic.length / 2)
              .map((item, index) => (
                <Text key={index} style={styles.text}>
                  {item}
                </Text>
              ))}
        </View>
      </View>
      <View style={{flexDirection: 'row', flex: 1, alignItems: 'flex-end'}}>
        <TouchableOpacity style={styles.button} onPress={navigation.goBack}>
          <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(addWallet(route.params.mnemonic));
          }}>
          <Text style={styles.text}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  splittedContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
    color: 'white',
    margin: 10,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'rgba(211,5,123,0.5)',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
});
