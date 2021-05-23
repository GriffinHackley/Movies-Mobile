import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, br } from 'react-native';

export default class MovieListItem extends React.Component {

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

  render() {
    return (
      <SafeAreaView>
      <TouchableOpacity
        style={this.styles.listItem}
        onPress={() => this.props.navigation.navigate('Movie', {id:this.props.movie.id})}
      >
      <Image
        alt = "poster"
        source = {{uri: "https://image.tmdb.org/t/p/w185"+this.props.movie.poster_path }}
        style = {this.styles.ImageStyle}
        />
        <Text style = {this.styles.TextContainer}>
          <Text style={this.styles.movieTitle}>{ this.props.movie.title }{"\n"}</Text>
          <Text>{ this.props.movie.release_date }{"\n"}</Text>
          <Text>Rating: { this.props.movie.vote_average }{"\n"}</Text>
        </Text>
      </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
