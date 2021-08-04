import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Transactionscreen from './screens/Bookstranscreen';
import Search from './screens/Searchscreen';


export default class App extends React.Component{
  render(){
    return (
       <AppContainer/>

     
      );
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction : {screen:Transactionscreen},
  Search : {screen:Search}
})

const AppContainer = createAppContainer(TabNavigator)