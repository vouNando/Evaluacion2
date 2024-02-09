import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export const ImageScreen = () => {
  return (
    <View   >
        <Text style={style.text}>Imagen 1</Text>
        <Image style={style.imagen1} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzNSpRuE5ZOx2u7KUe1cuLeVFbgscKhQ21Lc5qkiaq2f8HxOzn-aeK7t7TJFud9_lEzrc&usqp=CAU'}}  />
        
    </View>
    
  )
}
 const style = StyleSheet.create({
     container:{
         backgroundColor:'#9AD0C2',
         
     },
     imagen1:{
         width:300,
         height:300,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:50,
        marginTop:50,
       
     },
     text:{
         fontSize:30,
         textAlign:'center',
         color:'#2D9596',
         marginTop:50
     }
 })