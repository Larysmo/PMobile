import { View, Text, Button} from 'react-native'

// {navigation} deve ser usado apenas em navegação do tipo Pilha
const Sobre = ({navigation}) => {
  return(
    <View
    style={{flex:1,
    justifyContent:'center',
    alignItems:'center'}}
    >
    <Text>Tela Sobre</Text>
    <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  )
}

export default Sobre;