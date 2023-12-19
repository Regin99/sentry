// import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  // CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AuthStackParamList = {
  Auth: undefined;
  ImportWallet: undefined;
};

export type MainTabsParamList = {
  Main: undefined;
  Settings: undefined;
};

export type MainStackParamList = {
  MainTabs: NavigatorScreenParams<MainTabsParamList>;
};

export type RootStackParamList = MainStackParamList & AuthStackParamList;

export type RootStackScreenProps<RouteName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, RouteName>;

// export type MainScreenProps<T extends keyof MainTabsParamList> =
//   CompositeScreenProps<
//     BottomTabScreenProps<MainTabsParamList, T>,
//     NativeStackScreenProps<RootStackParamList, keyof RootStackParamList>
//   >;

// declare global {
//   namespace ReactNavigation {
//     interface RootParamList extends RootStackParamList {
//       //
//     }
//   }
// }
