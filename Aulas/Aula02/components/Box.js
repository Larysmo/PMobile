import { useState } from 'react'
import { View } from 'react-native'

//components
const Box = (props) => {
  const [state, setState] = useState('teste');
    const boxStyle = {
      //height: props.size,
      //width: props.size,
      flex: props.size,
      backgroundColor: props.color,
    };

  return <View style={boxStyle}></View>;
};

export default Box;
