import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen  from 'HomeScreen';

// Create Master Stack
const Navigator = StackNavigator({
  Home: { screen: HomeScreen }
})

export default Navigator;