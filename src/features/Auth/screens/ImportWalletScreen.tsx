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

export const ImportWalletScreen = ({
  navigation,
}: RootStackScreenProps<'ImportWallet'>) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const {hasPermission, requestPermission} = useCameraPermission();
  const device = useCameraDevice('back');
  const [mnemonic, setMnemonic] = useState('');
  const [isCameraActive, setIsCameraActive] = useState(false);

  const handleOpenCamera = async () => {
    bottomSheetModalRef.current?.present();
  };

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      console.log(`Scanned ${codes.length} codes!`);
      console.log(codes);
    },
  });

  return (
    <Screen>
      <Button title="Back" onPress={navigation.goBack} />
      <Button title="Open modal" onPress={handleOpenCamera} />
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
