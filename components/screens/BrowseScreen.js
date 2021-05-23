import React from 'react';
import _ from 'lodash';
import { SafeAreaView, Text, FlatList, ScrollView, StyleSheet, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import GenreScreen from '../screens/GenreScreen';
import SearchScreen from '../screens/SearchScreen';
import MovieScreen from '../screens/MovieScreen';
import MovieListItem from '../movie_list_item';
import GenreListItem from '../genre_list_item';


const Stack = createStackNavigator();

export default class BrowseScreen extends React.Component {
  state = {
    genres: [
      {"id": 28,"name": "Action"},
      {"id": 12,"name": "Adventure"},
      {"id": 16,"name": "Animation"},
      {"id": 35,"name": "Comedy"},
      {"id": 80,"name": "Crime"},
      {"id": 99,"name": "Documentary"},
      {"id": 18,"name": "Drama"},
      {"id": 10751,"name": "Family"},
      {"id": 14,"name": "Fantasy"},
      {"id": 36,"name": "History"},
      {"id": 27,"name": "Horror"},
      {"id": 10402,"name": "Music"},
      {"id": 9648,"name": "Mystery"},
      {"id": 10749,"name": "Romance"},
      {"id": 878,"name": "Science Fiction"},
      {"id": 10770,"name": "TV Movie"},
      {"id": 53,"name": "Thriller"},
      {"id": 10752,"name": "War"},
      {"id": 37,"name": "Western"}
    ],
}

  constructor(){
    super();
  }

  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.genres}
          renderItem={(dataEntry) => {
            return <GenreListItem
              id={dataEntry.id}
              genre={dataEntry.item}
              navigation = {this.props.navigation}
              />
          }}
        />
      </SafeAreaView>
    );
  }
}
