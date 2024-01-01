import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {RootStackScreenProps} from '../../../routes/types';
import {Screen} from '../../../components/molecules';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import {ethers} from 'ethers';
import {useDispatch} from 'react-redux';
import {addWallet} from '../../../rtk/slices';
import {validateMnemonic} from '../../../utils';

export const ImportWalletScreen = ({
  navigation,
}: RootStackScreenProps<'ImportWallet'>) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const {hasPermission, requestPermission} = useCameraPermission();
  const dispatch = useDispatch();
  const device = useCameraDevice('back');
  const phrase =
    'rug buyer aim sudden country address dinner tragic tumble ethics trust tattoo';
  const [mnemonic, setMnemonic] = useState(phrase);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleOpenCamera = async () => {
    bottomSheetModalRef.current?.present();
  };

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      console.log(`Scanned ${codes.length} codes!`);
      console.log(codes);
      bottomSheetModalRef.current?.close();
    },
  });

  return (
    <Screen>
      <Button title="Back" onPress={navigation.goBack} />
      <Button title="Open modal" onPress={handleOpenCamera} />
      <TextInput value={mnemonic} onChangeText={setMnemonic} />
      <Text>{error}</Text>
      <Button
        title="Next"
        onPress={() => {
          validateMnemonic(mnemonic)
            ? dispatch(addWallet(mnemonic))
            : setError('Invalid Mnemonic');
        }}
      />
      <BottomSheetModal
        backgroundStyle={{backgroundColor: '#333333'}}
        ref={bottomSheetModalRef}
        snapPoints={['90%']}
        onDismiss={() => setIsCameraActive(false)}
        onChange={() => setIsCameraActive(true)}>
        {device && (
          <Camera
            style={{width: '90%', height: 500}}
            device={device}
            isActive={isCameraActive}
            codeScanner={codeScanner}
          />
        )}
      </BottomSheetModal>
    </Screen>
  );
};
