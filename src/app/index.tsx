import { View, Text, ImageBackground} from 'react-native';
import React from 'react';
import CardComponent from '../components/CardComponent';
import Menu from '../components/Menu';
import TitleComponent from '../components/TitleComponent';
import styles from '../utils/styles';


const Index = () => {
  return (
    <ImageBackground
      source={require('../images/tlmLogo.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <TitleComponent/>
        <Menu />
      </View>
    </ImageBackground>
  );
};

export default Index

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: "red",
//         margin: "auto",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100%",
//         width: "100%"
//     },
//     card: {
//         flex: 1,
//         borderWidth: 2,
//         borderColor: "black",
//         borderRadius: 5,
//         padding: 10,
//         margin: 10,
//         backgroundColor: "gray"
//     }
// })
