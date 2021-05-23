import React from 'react';
import _ from 'lodash';
import {SafeAreaView, StyleSheet, View, Text, FlatList} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MoviesService from '../services/movies.services';
import MovieListItem from '../movie_list_item';

export default class GenreScreen extends React.Component {

  state={
    cast:[],
  }

  constructor(props){
    super(props);
    this.state = {id:props.route.params.id};
    this.getMoviesFromSearchQuery();
  }

  getMoviesFromSearchQuery = async () => {
    try {
      const cast = await MoviesService.getCast(this.state.id);
      this.setState({ cast:cast });
    } catch (e) {
      console.log(e);
    }
  }


  render() {
    return (
      <SafeAreaView>
        <Text>Not implemented

        </Text>
      </SafeAreaView>
    );
  }
}
