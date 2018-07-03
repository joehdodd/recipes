import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const RecipeMenu = props => (
  <View style={styles.outerContainer}>
    <ScrollView contentContainerStyle={styles.innerContainer} horizontal={true}>
      <TouchableOpacity
        onPress={() => props.onNav('All')}
        style={[
          styles.navView,
          {
            borderBottomColor:
              props.active === 'All' ? '#191919' : 'transparent'
          }
        ]}
      >
        <Text style={styles.text}>All</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        onPress={() => props.onNav('New')}
        style={[
          styles.navView,
          {
            borderBottomColor:
              props.active === 'New' ? '#191919' : 'transparent'
          }
        ]}
      >
        <Text style={styles.text}>New</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        onPress={() => props.onNav('Add')}
        style={[
          styles.navView,
          {
            borderBottomColor:
              props.active === 'Add' ? '#191919' : 'transparent'
          }
        ]}
      >
        <Text style={styles.text}>Add</Text>
      </TouchableOpacity>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  outerContainer: {
    flex: 0,
    flexGrow: 0,
    paddingTop: 32,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: '#f7f7f7',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0, 0, 0, .3)'
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 1
  },
  text: {
    fontWeight: '700',
    color: '#191919'
  },
  navView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    padding: 16
  },
  active: {

  }
});

export default RecipeMenu;
