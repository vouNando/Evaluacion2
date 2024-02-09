import React, { useState } from 'react'
import { Alert, Button, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export const MenorScreen = () => {
    const [formulario, setFormulario] = useState({
        num1: '',
        num2: '',
    });

    const handleNumero1Change = (valor: string) => {
        setFormulario({ ...formulario, num1: valor });
    };

    const handleNumero2Change = (valor: string) => {
        setFormulario({ ...formulario, num2: valor });
    };

    const handleComparar = () => {
        const { num1, num2 } = formulario;
        const parsedNum1 = parseInt(num1) || 0;
        const parsedNum2 = parseInt(num2) || 0;
        
        if (!isNaN(parsedNum1) && !isNaN(parsedNum2)) {
            const resultado = parsedNum1 <= parsedNum2 ? parsedNum1 : parsedNum2;
            Alert.alert('Resultado', `El mayor o igual es: ${resultado}`);
        } else {
            Alert.alert('Error', 'Por favor ingresa números válidos en ambos campos.');
        }
    };
  return (
    <View>
            <TextInput onChangeText={handleNumero1Change} value={formulario.num1} placeholder='Numero 1' keyboardType='numeric'/>
            <TextInput onChangeText={handleNumero2Change} value={formulario.num2} placeholder='Numero 2' keyboardType='numeric'/>
            <Button title='Comparar' onPress={handleComparar}/>
            <Button title='Limpiar' onPress={() => setFormulario({ num1: '', num2: '' })}/> 
        </View>
   
  )
}
