import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const SearchFilter = props => (
  <View style={{ justifyContent: 'flex-start' }}>
    <View style={{ width: '100%' }}>
      <TextInput
        style={styles.input}
        onChangeText={title => this.setState({ title })}
        value={this.state.title}
        placeholder="Recipe title..."
      />
      <TextInput
        style={styles.input}
        onChangeText={ingredients => this.setState({ ingredients })}
        value={this.state.ingredients}
        placeholder="Ingredient list..."
      />
      <Button
        buttonStyle={{ width: '15%' }}
        title="Add"
        onPress={() => this.onAdd(this.state.title, this.state.ingredients)}
      />
    </View>
    <View>
      <TextInput
        style={styles.input}
        onChangeText={filter => this.setState({ filter })}
        value={this.state.filter}
        placeholder="Search..."
      />
    </View>
  </View>
);

export default SearchFilter;
