import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import {styleSayfa} from './style';
import Kutu from './component/kutu';
import { Button } from 'native-base';

export default class Root extends Component{
    constructor(props)
    {
        super(props);
        this.state={
             kutular : [],
        }
    }
    ekle()
    {
        let kutular= this.state.kutular;
        kutular.push(<Kutu/>);
        this.setState({kutular:kutular});
    }

    cikar()
    {
        let kutular= this.state.kutular;
        kutular = kutular.slice(0,kutular.length-1);
        this.setState({kutular:kutular});
    }
    
    render() {

        const kutular = this.state.kutular.map((data)=>{
            return(data)
        });
        
        return (
          <View>
            <View style={{marginTop:10}}>
                <Button onPress={()=>this.ekle()} style={{alignSelf:'center',width:100,height:40}}>
                    <Text style={{color:'white',flex:1,textAlign:'center'}}>Ekle</Text>
                </Button>
            </View>
            <View style={{marginTop:10}}>
                <Button onPress={()=>this.cikar()} style={{alignSelf:'center',width:100,height:40}}>
                    <Text style={{color:'white',flex:1,textAlign:'center'}}>Çıkar</Text>
                </Button>
            </View>

            <ScrollView style={{alignSelf:'center'}}>
                {kutular}
            </ScrollView>
          </View>
        );
    }
}

