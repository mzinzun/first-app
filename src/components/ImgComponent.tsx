import { View, Image } from 'react-native'
import React from 'react'

const ImgComponent = () => {
  return (
    <View >
      <Image
      source={require("../images/img1.jpg")}
      style={{width: 200, height: 200}}
      />
    </View>
  )
}

export default ImgComponent
