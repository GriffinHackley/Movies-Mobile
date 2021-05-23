import React from 'react';
import _ from 'lodash';
import {SafeAreaView, StyleSheet, View, Text, FlatList} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MoviesService from '../services/movies.services';
import MovieListItem from '../movie_list_item';

export default class GenreScreen extends React.Component {

    state={
      id: -1,
      currentPage: 1,
      movies: [],
      loading: true,
      allLoaded: false,
    }

    constructor(props){
      super(props);
      this.state = {id:props.route.params.id};
      this.getMoviesFromSearchQuery();
    }

    getMoviesFromSearchQuery = async () => {
      try {
        const movies = await MoviesService.getGenreMovies(this.state.id,1);
        this.setState({ movies, loading: false, currentPage: 1,});
      } catch (e) {
        console.log(e);
      }
    }

    loadMoreMovies = () => {
      if (this.state.loading) return;
      if (this.state.allLoaded) return;

      this.setState(
        { loading: true },
        async () => {
          try {
            const newMovies = await MoviesService.getGenreMovies(this.state.id, this.state.currentPage + 1);
            this.setState((state) => {
              const newState = {...state};
              newState.movies = [...state.movies, ...newMovies];
              newState.currentPage = state.currentPage + 1;
              newState.loading = false;
              if (newMovies.length === 0) {
                newState.allLoaded = true;
              }
              return newState;
            });
          } catch(e) {
            console.log(e);
          }
        }
      )
    }


  render() {
    return (
      <SafeAreaView>
      <FlatList
        data={this.state.movies}
        renderItem={(dataEntry) => {
          return <MovieListItem movie={dataEntry.item} navigation={this.props.navigation} />
        }}
        onEndReached={this.loadMoreMovies}
        keyExtractor={(movie) => `movie_${movie.id}`}
      />
      </SafeAreaView>
    );
  }
}
