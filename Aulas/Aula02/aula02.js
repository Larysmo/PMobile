import { useState } from 'react'

//components
const Box = (props) => {
  const [state, setState] = useState(false)
  console.log(props, state)
  return<></>
}

//componente principal
const App = () => {
  <>
  <Box color={'red'} size = {30}></Box>
  <Box color={'green'} size = {30}></Box>
  <Box color={'blue'} size = {30}></Box>
  </>
}

export default App