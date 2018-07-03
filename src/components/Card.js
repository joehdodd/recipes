import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => <View style={styles.card}>{props.children}</View>;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    backgroundColor: 'transparent',
    paddingTop: 5
  }
});

export default Card;
