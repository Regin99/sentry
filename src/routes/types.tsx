// import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  // CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type AuthStackParamList = {
  Auth: undefined;
};

export type MainTabsParamList = {
  Main: undefined;
  Settings: undefined;
};

export type AppStackParams = {
  MainTabs: NavigatorScreenParams<MainTabsParamList>;
};

export type RootStackParamList = AppStackParams & AuthStackParamList;

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
