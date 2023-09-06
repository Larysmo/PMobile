import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native'

const Login = () => {
  return (
  <View style={estilos.container}>
    <View style={estilos.centraliza}>
      <Image style={estilos.imgPerfil}source={{uri:'https://github.com/Larysmo.png'}}/>
      <Image style={estilos.logo} source = {require('../assets/snack-icon.png')}/>
    </View> 
  <Text styles={estilos.titulo}>Login</Text>
  <TextInput style={estilos.input}
    placeholder={'E-mail'}
    keyboardType={'email-adress'}
  />
  <TextInput style={estilos.input}
    placeholder={'Senha'}
    secureTextEntry={true}
    />
  <Button title='entrar' />
  </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: 16,
    textAlign: 'center',
    fontWeight:700
  },
  logo:{
    height:100,
    width: 100,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 400,
    textAlign: 'center',
    paddingBottom: 24
  },  
  centraliza:{
    alignItems: 'center',
    padding: 15
  },  
  imgPerfil:{
    height: 50,
    width: 50,
    borderRadius: 25, 
    margin: 25
  },
  input:{
    lineHeight: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  }
});

export default Login