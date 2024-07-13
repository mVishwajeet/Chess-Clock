import { StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
const { width } = Dimensions.get("window");

const PlayerStyles = StyleSheet.create({
    maincontainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#deb887',
      width: {width},
  
    },
  
    // title: {
    //   fontSize: 48,
    //   fontWeight: 'bold',
    //   //textAlign: 'center',
    //   color: '#191970',
    //   },
  
    subcontainer2: {
      width: 200, // Set a fixed width for the button
      height: 40, // Set a fixed height for the button
      borderRadius: 5,
    },

    placeholder: {
        borderColor: "gray",
        width: "100%",
        borderWidth: 2,
        borderRadius: 10,
        padding: 0,
    },

    button: {
        width: '100%',
        backgroundColor: '#000',
        borderRadius: 15,
    },

    buttonArea: {
        marginTop: 30,
    },
  
    
    text:{
      //textAlign: 'center',
      justifyContent: 'center',
      fontSize: 30,
      color: '#4b0082',
      fontFamily: 'Cochin'
    },

    bottomContainer: {
        marginTop: 20,
      },
   
  
  });
  
  export default PlayerStyles;
  