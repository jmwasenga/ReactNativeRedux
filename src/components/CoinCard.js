import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { images } from '../Utils/CoinIcons';


const CoinCard = ({ symbol, name, price_usd, percentage_change_24h, percentage_change_7d, last_updated}) => {

    const {container, image, bold} = styles;
  return (
     <View style={{flexDirection: 'row'}}>
         <Image 
             style={image}
             source={{uri: images[symbol]}}
          />
          <View style={{alignSelf: 'center'}}>              
             <Text>{symbol}</Text>
             <Text>{name}</Text>  
             <Text>{price_usd}</Text>
            
          </View>
          
    
     </View>    
  )
};

styles = StyleSheet.create({
    container: {
        display: 'flex'
    },
    image: {
        width: 40,
        height: 40
    },
    bold: {
        fontWeight: 'bold'
    }
});


export default CoinCard;