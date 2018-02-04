import React, { Component} from 'react';
import { connect} from 'react-redux';
import { ScrollView, View, Text, StyleSheet} from 'react-native';
import FetchCoinData from './../Actions/FetchCoinData';
import CoinCard from './CoinCard';
import Spinner from  'react-native-loading-spinner-overlay';


class CryptoContainer extends Component {
    componentDidMount() {
        this.props.FetchCoinData();
    }

renderCoinCards() {
    const { crypto } = this.props;
    console.log(crypto);
    return crypto.data.map((coin, index) => 
       <CoinCard 
          key={index}
          symbol={coin.symbol}
          name={coin.name}
          price_usd={coin.price_usd}
          percentage_change_24h={coin.percentage_change_24h}
          percentage_change_7d={coin.percentage_change_7d}       
       
       
       />
    );
}

    render() {
         const { crypto } = this.props;

         if(crypto.isFetching) {
            <View>
                <Spinner 
                    visible={crypto.isFetching}
                    textContent={"loading ....."}
                    textStyle={{color: '#253145'}}
                    animation="fade"
                
                />

            </View>    

         }
            
        return (
            <ScrollView style={styles.contentContainer}>
                {this.renderCoinCards()}
            </ScrollView>    
        )
    }
}



function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}


const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 55
    }
});

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer);