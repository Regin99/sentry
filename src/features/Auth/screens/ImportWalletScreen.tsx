import {Button, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RootStackScreenProps} from '../../../routes/types';
import {Screen} from '../../../components/molecules';
import Clipboard from '@react-native-clipboard/clipboard';

export const ImportWalletScreen = ({
  navigation,
}: RootStackScreenProps<'ImportWallet'>) => {
  const [isTextInClipboard, setIsTextInClipboard] = useState(false);
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = () => {
    Clipboard.setString('hello world');
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
  };

  const getClipboardText = async () => {
    const text = await Clipboard.getString();
    return text;
  };

  return (
    <Screen>
      <Button title="Back" onPress={navigation.goBack} />
      <TextInput
        placeholder="Paste here"
        value={copiedText}
        onChangeText={setCopiedText}
      />
      {isTextInClipboard && <Button title="Copy" onPress={fetchCopiedText} />}
    </Screen>
  );
};
