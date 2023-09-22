import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from '../screens/Home'
import Sobre from '../screens/Sobre'

const Drawer = createDrawerNavigator();

const Navegacaogaveta = () => {
  return <Drawer.Navigator>
      <Drawer.Screen name = "Home" component={Home} />
      <Drawer.Screen name = "Sobre" component={Sobre} />
  </Drawer.Navigator>
}

export default Navegacaogaveta;