/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, FlatList,} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from './components/screens/SearchScreen';
import BrowseScreen from './components/screens/BrowseScreen';
import BrowseNavigator from './components/Navigators/BrowseNavigator';

import MoviesService from './components/services/movies.services';
import MovieListItem from './components/movie_list_item';

const Tab   = createBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Browse" component={BrowseNavigator} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
