import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import NavegacaoPilha from './Routes/NavegacaoPilha'
import NavegacaoGaveta from './Routes/NavegacaoGaveta'
import NavegacaoAba from './Routes/NavegacaoAba'


const App = () => {
  return (
    <NavigationContainer>
      <NavegacaoAba/>
    </NavigationContainer>
  )};

export default App;    
