import React, { Component } from 'react';
import {FlatList, ActivityIndicator, Text, View, StyleSheet, Image, TouchableNativeFeedback } from 'react-native';

export default class MainScreen extends Component {
    static navigatorStyle = {
        drawUnderNavBar: false,
        navBarTranslucent: false,
        navBarTextFontSize: 25,
        navBarTextColor: 'white',
        navBarBackgroundColor: 'black'
      };

    constructor(props){
        super(props);
        this.state ={ 
          isLoading: true,
        }
      }
    
    componentDidMount(){
        return fetch('https://my.api.mockaroo.com/companies.json?key=48536f70')
          .then((response) => response.json())
          .then((responseJson) => {
    
            this.setState({
              isLoading: false,
              dataSource: responseJson.companies,
            }, function(){
    
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
      }

    clickHandler = (companyName, revenue) => {
        this.props.navigator.push({
            screen: "app.DetailScreen",
            title: companyName,
            passProps: {
                jan: revenue[0].amount,
                feb: revenue[1].amount,
                mar: revenue[2].amount,
                apr: revenue[3].amount,
                may: revenue[4].amount,
                jun: revenue[5].amount,
                jul: revenue[6].amount,
                aug: revenue[7].amount,
                sep: revenue[8].amount,
                oct: revenue[9].amount,
                nov: revenue[10].amount,
                dec: revenue[11].amount
            }
        }, )       
    };  


    render () {
        if(this.state.isLoading){
            return(
              <View style={{flex: 1, padding: 20, backgroundColor: 'black'}}>
                <ActivityIndicator/>
              </View>
            )
          }

        return (  
            <View style={{flex: 1}}>
                <FlatList
                    style={styles.flatList}
                    data={this.state.dataSource}
                    renderItem={({item}) => 
                    <TouchableNativeFeedback onPress={() => this.clickHandler(item.name + ' Revenue', item.revenue) } >
                        <View style={styles.flatListContainer}>
                            <View style={styles.flatListContainerCompanyInfo}>
                                <Text style={styles.flatListContainerItemCompany}>{item.name}</Text>
                                <Text style={styles.flatListContainerItemAddress}>{item.address.street}</Text>
                                <Text style={styles.flatListContainerItemAddress}>{item.address.city}, {item.address.state}, {item.address.zip}</Text>
                                <Text style={styles.flatListContainerItemAddress}>{item.phone}</Text>
                            </View>
                            <Image source={{uri: item.photo}} style={styles.flatListContainerCompanyPicture} />
                        </View>
                    </TouchableNativeFeedback>
                }
                keyExtractor={({id}, index) => id}
              />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    flatList: {
      backgroundColor: 'black',
      padding: 20
    },

    flatListContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'black',
      color: 'white',
      padding: 15
    },

    flatListContainerCompanyInfo: {
      flex: 2,
      backgroundColor: 'black',
      color: 'white'
    },

    flatListContainerCompanyPicture: {
      flex: 1,
      backgroundColor: 'black', 
      width: 50,
      height: 80
    },

    flatListContainerItemCompany: {
      backgroundColor: 'black',
      color: 'white',
      fontSize: 20
    },

    flatListContainerItemAddress: {
      backgroundColor: 'black',
      color: 'white'
    }

  })
