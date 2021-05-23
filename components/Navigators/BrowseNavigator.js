import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BrowseScreen from '../screens/BrowseScreen'
import GenreScreen from '../screens/GenreScreen';
import MovieScreen from '../screens/MovieScreen';
import CastScreen from '../screens/CastScreen';

const Stack = createStackNavigator();

export default class BrowseNavigator extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Browse" component={BrowseScreen}/>
        <Stack.Screen name="Genre" component={GenreScreen} />
        <Stack.Screen name="Movie" component={MovieScreen} />
        <Stack.Screen name="Cast" component={CastScreen} />
      </Stack.Navigator>
    );
  }
}
