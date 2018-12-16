import React, { Component } from 'react';
import {View, Text} from 'react-native';

class DetailScreen extends Component {
    static navigatorStyle = {
        drawUnderNavBar: false,
        navBarTranslucent: false,
        navBarTextFontSize: 25,
        navBarTextColor: 'white',
        navBarBackgroundColor: 'black'
      };


    render () {
        return (
            <View style={{backgroundColor: 'black'}}>
                
            </View>

        );
    }
}

export default DetailScreen;