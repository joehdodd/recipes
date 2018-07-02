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
import Account from './Account';
import { fb } from '../../firebase.js';

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
          displayName: displayName
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
  onChangeText = text => {
    this.setState(text);
  };
  render() {
    const { currentUser, displayName } = this.state;
    return (
      <ContainerView>
        <Account
          styles={styles}
          currentUser={currentUser}
          displayName={displayName}
          handleDisplayName={this.handleDisplayName}
          handleSignOut={this.handleSignOut}
          onChangeText={this.onChangeText}
        />
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
