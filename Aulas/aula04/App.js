import { useState, useEffect } from 'react'
import Splash from './Screens/Splash'
import Login from './Screens/Login'
import Home from './Screens/Home'


const App = () => {
  const [exibeSplash, setExibeSplash] = useState(false);
  useEffect (() => {
    setTimeout(() => setExibeSplash(false),3000)
  }, [] );

  return exibeSplash ? <Splash /> : <Home/>;
} 

export default App;