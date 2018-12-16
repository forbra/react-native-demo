import React, { Component } from 'react';
import {FlatList, ActivityIndicator, Text, View, StyleSheet, Image } from 'react-native';

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
                    <View style={styles.flatListContainer}>
                        <View style={styles.flatListContainerCompanyInfo}>
                            <Text style={styles.flatListContainerItemCompany}>{item.name}</Text>
                            <Text style={styles.flatListContainerItemAddress}>{item.address.street}</Text>
                            <Text style={styles.flatListContainerItemAddress}>{item.address.city}, {item.address.state}, {item.address.zip}</Text>
                            <Text style={styles.flatListContainerItemAddress}>{item.phone}</Text>
                        </View>
                        <Image source={{uri: item.photo}} style={styles.flatListContainerCompanyPicture} />
                    </View>
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
