import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

function App(): React.JSX.Element {
  const NativeStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <NativeStack.Navigator>
        <NativeStack.Screen name="Home" component={HomeScreen} />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
