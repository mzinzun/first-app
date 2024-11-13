import { View, Text, Button} from 'react-native'
import React from 'react'
import styles from '../utils/styles'

const Menu = () => {
  return (
    <View style={styles.menu}>
        <Button style={styles.button } title="Home" onPress={() => {}} />
        <Button style={styles.button} title="FAQ" onPress={() => {}} />
        <Button style={styles.button} title="Application" onPress={() => {}} />
        <Button style={styles.button} title="Success" onPress={() => {}} />
    </View>
  )
}

export default Menu
