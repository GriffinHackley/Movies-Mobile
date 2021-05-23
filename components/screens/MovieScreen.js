import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import MoviesService from '../services/movies.services';

export default class MovieScreen extends React.Component {
  state = {
    movie:[]

    
  }

  constructor(props){
    super(props);
    this.getMovieFromSearchQuery();
  }

  getMovieFromSearchQuery = async () => {
    try {
      const movies = await MoviesService.getMovie(this.props.route.params.id);
      this.setState({ movie:movies });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <SafeAreaView>

      <View
        style={this.styles.listItem}

      >
      <Image
        alt = "poster"
        source = {{uri: "https://image.tmdb.org/t/p/w185"+this.state.movie.poster_path }}
        style = {this.styles.ImageStyle}
        />
        <Text style = {this.styles.TextContainer}>
          <Text style={this.styles.movieTitle}>{ this.state.movie.title }{"\n"}</Text>
          <Text>{ this.state.movie.release_date }{"\n"}</Text>
          <Text>Rating: { this.state.movie.vote_average }{"\n"}</Text>
        </Text>
      </View>
      <Text>{ this.state.movie.overview }{"\n"}</Text>
      <Text>Budget: ${ this.state.movie.budget }{"\n"}</Text>
      <Text>Revenue: ${ this.state.movie.revenue }{"\n"}</Text>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Cast',{id:this.state.movie.id})}>
        <Text>{"\n"}See Full List of Cast</Text>
      </TouchableOpacity>
      </SafeAreaView>
    );
  }

  styles = StyleSheet.create({
    listItem: {
      padding: 24,
        flexDirection:'row'
    },
    movieTitle: {
      fontSize: 24,

    },
    ImageStyle:{
      width: 100,
      height: 100,

    },
    TextContainer:{
      flexDirection:'row'
    }
  })
}
