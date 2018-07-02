import React from 'react';
import { View, StyleSheet } from 'react-native';
import { isiPhoneX } from '../../isiPhoneX';

const ContainerView = props => (
  <View style={[styles.container, { paddingTop: isiPhoneX() ? 40 : 32 }]}>
    {props.children}
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9ebee',
    // alignItems: 'flex-start',
    // justifyContent: 'center',
    padding: 16
  }
});

export default ContainerView;
