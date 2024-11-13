
import { StyleSheet } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    // wrapper: {
    //     margin: 0,
    //     padding: 0,
    //     box-sizing,
    // },
    container: {
        margin: 0,
        // padding: 0,
        // width: "100%",
        // height: "100%",
        flex: 1,
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 3,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        flex: 1,

        resizeMode: 'cover', // or 'stretch'
      },
    menu: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-end",
        width: "100%",
        borderWidth: 2,
        borderColor: "red",
        borderRadius: 5,
        padding: 30,
        margin: 10,
    },
    card: {
        flex: 1,
        width: "50%",
        borderWidth: 2,
        borderColor: "red",
        borderRadius: 5,
        padding: 10,
        margin: 10,
        backgroundColor: "gray"
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    button: {

    }
})

export default styles
