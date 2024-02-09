import { createStackNavigator } from '@react-navigation/stack';
import { BienvenidoScree } from '../screen/BienvenidoScree';
import { ImageScreen } from '../screen/ImageScreen';
import { Image2Screen } from '../screen/Image2Screen';
import { MayorScreen } from '../screen/MayorScreen';
import { MenorScreen } from '../screen/MenorScreen';



export type RootStackParamList = {
    BienvenidoScreen: undefined,
    ImageScreen: undefined,
    Image2Screen: undefined,
    MayorIgual: undefined,
    MenorIgual: undefined,
}
const Stack = createStackNavigator< RootStackParamList>();

export const StackNavigator=( )=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BienvenidoScreen"  component={BienvenidoScree} />
      <Stack.Screen name="ImageScreen" component={ImageScreen}  />
      <Stack.Screen name="Image2Screen" component={Image2Screen} />
      <Stack.Screen name="MayorIgual" component={MayorScreen} />
      <Stack.Screen name="MenorIgual" component={ MenorScreen} />
     
    </Stack.Navigator>
  );
}