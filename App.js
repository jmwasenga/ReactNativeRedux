import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, CryptoContainer } from './src/components';
import Store from './src/Store';
import { Provider } from 'react-redux';


export default class App extends React.Component {
  render() {
      return (
        <Provider store={Store} >
            <View>
               <Header/>
               <CryptoContainer />
            </View>
        </Provider>    
    );
  }
}

