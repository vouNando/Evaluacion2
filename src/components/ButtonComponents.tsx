import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLOR_BUTTON } from '../comomns/ConstansColors'

interface ButtonProps{
    title:string;
    onPress: () => void;
}
export const ButtonComponents = ({title,onPress}:ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <Text style={styles.button}>{ title}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
     button: {
        backgroundColor:COLOR_BUTTON,
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 30,
        color: 'white'

     }
})