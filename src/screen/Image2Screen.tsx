import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export const Image2Screen = () => {
  return (
    <View>
        <Text style={style.text}> Imagen 2</Text>
        <Image style={style.imagen1} source={{uri:'https://www.encancha.cl/resizer/jpIN2-rihMso6372d6jSypPeA2c=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/palco/2TS4RLRLRRBHRJXBZRM5KZHIZQ.jpg'}}  />
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
        color:'#FFA447',
        marginTop:50
    }
    
})
