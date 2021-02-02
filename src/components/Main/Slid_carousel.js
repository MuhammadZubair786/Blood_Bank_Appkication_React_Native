import React, { Component } from "react";
import { Platform, StyleSheet, Text, View ,Image,ScrollView,Dimensions, ImageStore} from "react-native";
import { Value } from "react-native-reanimated";

const {width}= Dimensions.get('window')
const height = width*1

const data = [
  "https://image.shutterstock.com/image-photo/nurse-patient-blood-samples-donated-600w-72926290.jpg",
  "https://image.shutterstock.com/image-photo/one-woman-studied-laboratory-blood-600w-72925891.jpg",
  "https://wallpapercave.com/wp/wp4323457.jpg",
  "https://wallpapercave.com/wp/wp4323538.jpg",
  "https://wallpapercave.com/wp/wp4323660.jpg",
  "https://wallpapercave.com/wp/wp4323495.jpg"
];

export default class Slid_carousel extends Component {

  state ={
    active : 0
  }

  change = ({nativeEvent}) =>{
    const slide = Math.ceil(nativeEvent.contentOffset.x/ nativeEvent.layoutMeasurement.width)
    if(slide !== this.state.active){
      this.setState({active:slide})
    }

  }

  render() {
    return (
      <View style={styles.container} >
      <ScrollView
       pagingEnabled
        horizontal 
        onScroll={this.change}
        showsHorizontalScrollIndicator={false}
        style={ styles.scroll}
        >

        {
         data.map((image,index)=>{

          return(
           
            <Image
            key={index}
        source={{uri:image}}
        style={styles.image}
        />
          )
          })
        }
        
        </ScrollView>

        <View style={styles.pagination}>

          {data.map((v,i)=>{
            return(
              <Text key={i} style={i==this.state.active ? styles.paggingActiveText : styles.paggingText }>&#8226;</Text>
            )})}
         
                                
        </View>
      
       
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:0,
    width,
    height
  },
  scroll:{
    width,
    height
  },
  image:{
    width,
    height,
    resizeMode:'cover'
  },
 pagination :{
   flexDirection:'row',
   position:'absolute',
   bottom:-22,
   alignItems:'center',
   justifyContent:'center',
   color:'white',
   marginLeft:130,
  

 },
 paggingText :{
  fontSize:60,
  textAlign:'center',
  color:'#888',
  marginLeft:7
 },
 paggingActiveText :{
  fontSize:60,
  textAlign:'center',
  color:'white',
  fontWeight:'bold',
  marginLeft:7
 }
});