import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const Account = props => (
  <View>
    <TextInput
      style={props.styles.textInput}
      autoCapitalize="none"
      placeholder="Change your display name..."
      onChangeText={displayName => props.onChangeText(displayName)}
      value={props.displayName}
    />
    <Button title="Change Display Name" onPress={props.handleDisplayName} />
    <Button title="Sign Out" onPress={props.handleSignOut} />
    {!!props.currentUser &&
      props.currentUser.displayName && (
        <Text>Hi {props.currentUser.displayName}!</Text>
      )}
  </View>
);

export default Account;
