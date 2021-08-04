import React from "react";
import { Text,View ,TouchableOpacity,StyleSheet} from "react-native";
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';
import { askAsync } from "expo-permissions";


export default class Transactionscreen extends React.Component{
  constructor(){
   super();
   this.state = {hascamerapermission:null,scanned:false,scannedata:'',buttonstate:'normal'}
  }
  getcampermission=async()=>{
    const {status} = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({
      hascamerapermission:status==="granted",
      buttonstate:'clicked',
      scanned:false
    })
  }
  handlebarscanned=async({type,data})=>{
    this.setState({
      scanned:true,
      scannedata:data,
      buttonstate:'normal' 
    })
  }
  render(){

    const hascamerapermission = this.state.hascamerapermission;
    const scanned = this.state.scanned;
    const buttonstate = this.state.buttonstate;

    if(buttonstate==="clicked" && hascamerapermission){
      return(
       < BarCodeScanner 
         onBarCodeScanned = {scanned? undefined:this.handlebarscanned}
         style ={StyleSheet.absoluteFillObject}
       />
      )

    }

    else if(buttonstate==="normal"){
    return(
          <View style={styles.container}>
          <Text style={styles.displayText}>
          {hascamerapermission===true? this.state.scannedata : "request camera permission"}
          </Text>
          <TouchableOpacity onPress={this.getcampermission} style={styles.scanButton}> 
          <Text style={styles.buttonText}> Scan QR code</Text> 
          </TouchableOpacity>
          </View>
      )
  }  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  displayText:{
    fontSize: 15,
    textDecorationLine: 'underline'
  },
  scanButton:{
    backgroundColor: '#2196F3',
    padding: 10,
    margin: 10
  },
  buttonText:{
    fontSize: 20,
  }
});
