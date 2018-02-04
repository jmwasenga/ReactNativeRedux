import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Header = () => {
    const { headerContainer, header} = styles;
    return (
        <View style={headerContainer}>
        <Text style={header}>Cryptocurrency App</Text>
    </View>
    );
    
}


const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20
  }
});
export default Header;