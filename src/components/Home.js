import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  Alert,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import ContainerView from './ContainerView';
import { fb } from '../../firebase.js';

const Card = props => (
  <TouchableOpacity
    style={styles.card}
    onPress={() => props.navigation.navigate('Recipes')}
    // shadowOffset={{ width: 10, height: 10 }}
    // shadowColor="black"
    // shadowOpacity="1.0"
  >
    <Text>Recipes</Text>
  </TouchableOpacity>
);

class Home extends Component {
  state = { currentUser: null, displayName: null };
  componentDidMount() {
    const { currentUser } = fb.auth();
    console.log(fb.auth());
    this.setState({ currentUser });
  }
  static navigationOptions = {
    title: 'Home'
  };
  handleDisplayName = () => {
    const { displayName, currentUser } = this.state;
    !!displayName &&
      !!currentUser &&
      currentUser
        .updateProfile({
          displayName: displayName,
        })
        .then(function() {
          console.log('success!');
        })
        .catch(function(error) {
          console.log(error);
        });
  };
  handleSignOut = async () => {
    return await fb.auth().signOut();
  };
  render() {
    const { currentUser } = this.state;
    return (
      <ContainerView>
        {/* <Card {...this.props} /> */}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Change your display name..."
          onChangeText={displayName => this.setState({ displayName })}
          value={this.state.displayName}
        />
        <Button title="Change Display Name" onPress={this.handleDisplayName} />
        <Button title="Sign Out" onPress={this.handleSignOut} />
        {!!currentUser &&
          currentUser.displayName && <Text>Hi {currentUser.displayName}!</Text>}
      </ContainerView>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 250,
    borderRadius: 4,
    backgroundColor: '#fff',
    shadowRadius: 6,
    borderRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'grey',
    shadowOpacity: 0.5
  }
});

export default Home;
