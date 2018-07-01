import { Dimensions, Platform } from 'react-native';

export function isiPhoneX() {
  let d = Dimensions.get('window');
  const { height, width } = d;
  return (
    // This has to be iOS duh
    Platform.OS === 'ios' &&
    // Accounting for the height in either orientation
    (height === 812 || width === 812)
  );
}
