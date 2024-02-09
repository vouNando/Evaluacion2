import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

//import { TouchableOpacity } from 'react-native-gesture-handler';
import { ButtonComponents } from '../components/ButtonComponents';
import { BodyComponents } from '../components/BodyComponents';
import { COLOR_CONTAINER } from '../comomns/ConstansColors';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/StackNavigator';

interface Props extends StackScreenProps < RootStackParamList,'BienvenidoScreen'>{}

export const BienvenidoScree = ( {navigation}: Props) => {
  return (
   <View style={styles.container}>
   <BodyComponents>
    <Text style={styles.container1}> BIENVENIDO</Text>

   <ButtonComponents title="Imagen 1" onPress={( ) => navigation.navigate('ImageScreen') }/>
   <ButtonComponents title="Imagen 2"   onPress={() => navigation.navigate('Image2Screen')} />
   <ButtonComponents title=" >=" onPress={() =>  navigation.navigate('MayorIgual') } />
   <ButtonComponents title=">=" onPress={() =>  navigation.navigate('MenorIgual')}/>
   </BodyComponents>

   </View>
  )
}
const styles = StyleSheet.create({
 container: {
    backgroundColor:COLOR_CONTAINER
 },


    container1:{
        backgroundColor:'white',
       
        textAlign: 'center',
        fontSize:30
        
    }

})
