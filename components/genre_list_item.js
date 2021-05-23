import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default class GenreListItem extends React.Component{
  styles = StyleSheet.create({
    listItem: {
      padding: 24,
    },
    genre: {
      fontSize: 24,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
  })

  render() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Genre',{id:this.props.genre.id})}>
        <Text style={this.styles.genre}>{ this.props.genre.name }</Text>
      </TouchableOpacity>
    );
  }
}
