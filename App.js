import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import Routes from './src/components/Routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="auto"/>
      <Routes/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
