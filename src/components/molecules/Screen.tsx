import {SafeAreaView, StyleSheet} from 'react-native';
import React, {ReactNode} from 'react';

export const Screen = ({children}: {children?: ReactNode}) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#3B413C',
  },
});
