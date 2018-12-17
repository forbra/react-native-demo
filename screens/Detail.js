import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import HorizontalBarChart from 'react-native-charts-wrapper/lib/HorizontalBarChart';

export default class DetailScreen extends Component {
    static navigatorStyle = {
        drawUnderNavBar: false,
        navBarTranslucent: false,
        navBarTextFontSize: 25,
        navBarTextColor: 'white',
        navBarButtonColor: 'white',
        navBarBackgroundColor: 'black'
      };

  
  
    render () {   
        return (
            <View style={{flex: 1}}>
            <View style={styles.container}>
              <HorizontalBarChart style={styles.chart}
                data={{dataSets:[{label: "Revenue", 
                values: [{y: this.props.jan}, 
                  {y: this.props.feb}, 
                  {y: this.props.mar},
                  {y: this.props.apr}, 
                  {y: this.props.may}, 
                  {y: this.props.jun}, 
                  {y: this.props.jul}, 
                  {y: this.props.aug}, 
                  {y: this.props.sep},
                  {y: this.props.oct}, 
                  {y: this.props.nov}, 
                  {y: this.props.dec}]}]}}
              />
            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF'
    },
    chart: {
      flex: 1
    }
  });