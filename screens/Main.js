import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';

class MainScreen extends Component {

    buttonHandler = () => {
        this.props.navigator.push({
            screen: "app.DetailScreen",
            title: "Detail"
        })
    };

    render () {
        return (
            <View>
                <Text>Main Screen</Text>
                <Button title = "Go" onPress = {this.buttonHandler}/> 
            </View>

        );
    }
}

export default MainScreen;