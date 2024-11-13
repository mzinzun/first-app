import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'

const BtnComponent = () => {
  return (
    <View>
      <Button title="Press me" onPress={() => alert("Hello World")}/>
    </View>
  )
}

export default BtnComponent

const styles = StyleSheet.create({})
